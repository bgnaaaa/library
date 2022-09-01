import UserLayout from "../../src/components/layout/UserLayout";
import { InputWrapper } from "@mantine/core";
import { Input, PasswordInput, Space } from "@mantine/core";
import { Modal } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import nookies, { parseCookies } from "nookies";
import { useState } from "react";

export default function PersonalInfo({
  userid = "1956226",
  username = "阿塔",
  phonenumber = "+97699198282",
  identitynumber = "E1919190",
}) {
  const [password, setPassword] = useState("");
  const [opened, setOpened] = useState(false);
  const router = useRouter();
  const changepassword = () => {
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "API", {
        password: password,
      })
      .then((res) => {
        nookies.set(null, "jwt", res.data.jwt, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/user/personalinfo",
        });
        router.push("/user/personalinfo");
      })
      .catch((error) => {});
  };
  return (
    <UserLayout>
      <div className="mx-[50px] mt-[50px] overflow-scroll items-center">
        <div className="flex gap-5">
          <img src="/assets/images/personal-icon.svg" />
          <h1 className="text-2xl font-bold">个人信息</h1>
        </div>
        <InputWrapper
          label={
            <div className="text-lg pb-1 text-black font-normal mt-[40px]">
              读者ID
            </div>
          }
        >
          <div className="className border-[1px] border-black rounded-[11px] w-[344px] text-xl font-[GIP] font-normal py-[12px] px-[12px]">
            {" "}
            {userid}
          </div>
        </InputWrapper>
        <InputWrapper
          label={
            <div className="text-lg pb-1 text-black font-normal mt-[20px]">
              读者名
            </div>
          }
        >
          <div className="className border-[1px] border-black rounded-[11px] w-[344px] text-xl font-[GIP] font-normal py-[12px] px-[12px]">
            {" "}
            {username}
          </div>
        </InputWrapper>
        <InputWrapper
          label={
            <div className="text-lg pb-1 text-black font-normal mt-[20px]">
              电话号码
            </div>
          }
        >
          <div className="className border-[1px] border-black rounded-[11px] w-[344px] text-xl font-[GIP] font-normal py-[12px] px-[12px]">
            {" "}
            {phonenumber}
          </div>
        </InputWrapper>
        <InputWrapper
          label={
            <div className="text-lg pb-1 text-black font-normal mt-[20px]">
              身份证号
            </div>
          }
        >
          <div className="className border-[1px] border-black rounded-[11px] w-[344px] text-xl font-[GIP] font-normal py-[12px] px-[12px]">
            {" "}
            {identitynumber}
          </div>
        </InputWrapper>
        <div className="flex mt-[20px] gap-5 items-center">
          <InputWrapper
            label={
              <div className="text-lg pb-1 text-black font-normal ">密码</div>
            }
          >
            <div className="className border-[1px] border-black rounded-[11px] w-[344px] text-xl font-[GIP] font-normal py-[12px] px-[12px]">
              **********
            </div>
          </InputWrapper>
          <button
            onClick={() => setOpened(true)}
            className="flex justify-end items-end   text-xl font-bold bg-[#0D409B] text-white px-12 py-2 rounded-[10px] mt-[40px] hover:bg-[#859FCC]"
          >
            密码修改
          </button>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            centered
            withCloseButton={false}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-center text-2xl font-bold">您想登出吗？</h1>

              <InputWrapper
                label={
                  <div className=" text-lg pb-1 text-black font-normal">
                    旧密码
                  </div>
                }
              >
                <PasswordInput
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-[#1E1E1E] border-[1px] rounded-[13px]"
                  placeholder="请输入旧密码"
                  radius="12px"
                  size={"lg"}
                  styles={{
                    input: { fontSize: 14, fontWeight: 400 },
                    filledVariant: { color: "black" },
                    input: { color: "white" },
                  }}
                  classNames={{
                    wrapper: "hover:border-[#9264F3]",
                    defaultVariant: "defaultVariant-class",
                    filledVariant: "placeholder-gray-600",
                    unstyledVariant: "unstyledVariant-class",
                  }}
                />
              </InputWrapper>

              <InputWrapper
                label={
                  <div className=" text-lg pb-1 text-black font-normal">
                    旧密码
                  </div>
                }
              >
                <PasswordInput
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-[#1E1E1E] border-[1px] rounded-[13px]"
                  placeholder="请输入旧密码"
                  radius="12px"
                  size={"lg"}
                  styles={{
                    input: { fontSize: 14, fontWeight: 400 },
                    filledVariant: { color: "black" },
                    input: { color: "white" },
                  }}
                  classNames={{
                    wrapper: "hover:border-[#9264F3]",
                    defaultVariant: "defaultVariant-class",
                    filledVariant: "placeholder-gray-600",
                    unstyledVariant: "unstyledVariant-class",
                  }}
                />
              </InputWrapper>
              <div className="flex gap-4 mt-[10px]">
                <button
                  onClick={() => setOpened(false)}
                  className="text-white w-[200px] h-[50px] bg-[#8F8F8F] hover:bg-[#C7C7C7] text-xl font-bold rounded-[10px]"
                >
                  取消
                </button>

                <button
                  onClick={changepassword}
                  className="text-white w-[200px] h-[50px] bg-[#0D409B] hover:bg-[#859FCC] text-xl font-bold rounded-[10px]"
                >
                  确认
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </UserLayout>
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
      return { redirect: { destination: "/user/personalinfo" } };
    } catch (e) {
      return { props: {} };
    }
  }
  return { props: {} };
}
