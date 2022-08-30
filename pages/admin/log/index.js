import { Space } from "@mantine/core";
import Link from "next/link";
export default function UserLog() {
  return (
    <>
      <div className="flex h-screen overflow-hidden ">
        <div
          className="min-h-full bg-center bg-cover top-0 sticky w-1/2 block"
          style={{
            backgroundImage: `url("/assets/images/tongji-admin-bg.jpg")`,
          }}
        ></div>

        <div className="w-1/2 h-full overflow-hidden ">
          <div className="flex justify-end p-6">
            <Link href={"/"}>
              <button>
                <img
                  src="/assets/images/tongji-logo.svg"
                  alt=""
                  className="w-[68px]"
                />
              </button>
            </Link>
          </div>

          <div className="flex flex-col mr-[120px] items-center relative">
            <h1 className="text-[48px] font-[GIP] font-bold">图书馆管理系统</h1>
            <div className="flex flex-row gap-2 items-start justify-start mt-[50px] ">
              <img src="/assets/images/admin-icon.svg" />
              <h1 className="text-[32px]">管理员模式</h1>
            </div>
            <div className="bg-[#1E1E1E] h-[1px] rounded-full  w-[344px] mt-[20px]"></div>
            <Link href={"/admin/signin"}>
              <button className="text-[28px] font-GIP font-normal text-white text-center w-[376px] bg-[#0D409B] rounded-[10px] py-[5px] mt-[20px] hover:bg-[#859FCC]">
                登录
              </button>
            </Link>

            <div className="bg-[#1E1E1E] h-[1px] rounded-full  w-[344px] mt-[20px]"></div>
            <Link href={"/user/log"}>
              <button className="text-[28px] font-GIP font-normal text-white text-center w-[376px] bg-[#1E1E1E] rounded-[10px] py-[8px] mt-[20px] hover:bg-[#8E8E8E]">
                用户模式
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
