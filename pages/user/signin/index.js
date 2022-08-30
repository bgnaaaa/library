import { Input, InputWrapper, PasswordInput, Space } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import nookies, { parseCookies } from "nookies";
import { useState } from "react";
import { useAuthContext } from "../../../src/hooks";

export default function Signin({ user }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { storeUser } = useAuthContext();
  const signin = () => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "API", {
        identifier: identifier,
        password: password,
      })
      .then((res) => {
        nookies.set(null, "jwt", res.data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        storeUser(res.data.user);
        if (res.data.user.has_card) router.push("/user/home");
        else router.push("/user/log");
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div className="flex h-screen overflow-hidden ">
      <div
        className="min-h-full bg-center bg-cover top-0 sticky w-1/2 "
        style={{
          backgroundImage: `url("/assets/images/tongji-user-bg.jpg")`,
        }}
      ></div>

      <div className="w-1/2  h-full overflow-hidden relative">
        <div className="flex justify-end p-4 absolute right-0">
          <Link href="/signin">
            <button>
              <img
                src="/assets/images/tongji-logo.svg"
                className="w-[68px] overflow-hidden"
              />
            </button>
          </Link>
        </div>
        <div className="w-full h-full flex justify-center px-7 mt-[70px]">
          <div className="w-full max-w-lg">
            <div className="flex gap-2 items-center pb-[20px]">
              <img src="/assets/images/user-icon.svg" />
              <h1 className="text-[32px] font-normal text-black ">
                用户模式 -
              </h1>
              <h2 className=" text-[32px] font-normal text-[#0D409B]"> 登记</h2>
            </div>
            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">
                  用户ID
                </div>
              }
            >
              <Input
                className=" w-[344px]"
                placeholder="请输入用户ID"
                onChange={(e) => setIdentifier(e.target.value)}
                radius="10px"
                size={"lg"}
                styles={{
                  input: { fontSize: 14, fontWeight: 400 },
                  filledVariant: { color: "black" },
                  input: { color: "black" },
                }}
                classNames={{
                  wrapper: "rounded-[12px] border-[2px] border-[#1E1E1E] ",
                  defaultVariant: "defaultVariant-class",
                  filledVariant: "bg-black placeholder-gray-600",
                  unstyledVariant: "unstyledVariant-class",
                }}
              />
            </InputWrapper>

            <Space h="md" />

            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">密码</div>
              }
            >
              <PasswordInput
                className=" w-[344px]"
                placeholder="请输入密码"
                onChange={(e) => setPassword(e.target.value)}
                radius="10px"
                size={"lg"}
                styles={{
                  input: { fontSize: 14, fontWeight: 400 },
                  filledVariant: { color: "black" },
                  input: { color: "black" },
                }}
                classNames={{
                  wrapper: "rounded-[12px] border-[2px] border-[#1E1E1E] ",
                  defaultVariant: "defaultVariant-class",
                  unstyledVariant: "unstyledVariant-class",
                }}
              />
            </InputWrapper>
            <Space h="sm" />

            <div className="">
              <Link href={"/user"}>
                <button
                  /*  onclick={signin} */
                  className="text-[24px] font-GIP font-normal text-white text-center w-[344px] bg-[#0D409B] rounded-[10px] py-[5px] mt-[20px] hover:bg-[#859FCC]"
                >
                  登录
                </button>
              </Link>
              <div className="bg-[#1E1E1E] h-[1px] roundend-full w-[344px] mt-[20px]"></div>
              <Link href={"/user/signup"}>
                <button className="text-[24px] font-GIP font-normal text-[#0D409B] hover:text-[#859FCC] text-center w-[344px] bg-none rounded-[10px] border-[2px] border-[#0D409B] hover:border-[#859FCC] py-[4px] mt-[20px]">
                  注册
                </button>
              </Link>
              <Link href={"/admin/log"}>
                <button className="text-[28px] font-GIP font-normal text-white text-center w-[344px] bg-[#1E1E1E] rounded-[10px] py-[8px] mt-[20px] hover:bg-[#8E8E8E]">
                  管理员模式
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { jwt } = parseCookies(ctx);

  if (jwt) {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/users/me",
        { headers: { Authorization: "Bearer " + jwt } }
      );
      return { redirect: { destination: "/home" } };
    } catch (e) {
      return { props: {} };
    }
  }
  return { props: {} };
}
