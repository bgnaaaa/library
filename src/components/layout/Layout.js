import Link from "next/link";
import { useRouter } from "next/router";
import { Modal } from "@mantine/core";
import { useState } from "react";

export default function Layout({ children }) {
  const router = useRouter();

  const [opened, setOpened] = useState(false);

  const menuItems = [
    {
      href: "/admin",
      title: "主页",
    },
    {
      href: "/admin/usersearch",
      title: "索搜账户",
    },
    {
      href: "/admin/seats",
      title: "座位",
    },
    {
      href: "/admin/bookentry",
      title: "图书录入",
    },
    {
      href: "/admin/booksearch",
      title: "图书检索",
    },
    {
      href: "/admin/bookcancellation",
      title: "图书注销",
    },
    {
      href: "/admin/overdue",
      title: "过期末还数名单",
    },
    {
      href: "/admin/lossreport",
      title: "挂失受理",
    },
    {
      href: "/admin/bookreturn",
      title: "还书受理",
    },
    {
      href: "/admin/bookborrow",
      title: "借书受理",
    },
    {
      href: "/admin/damagedbooks",
      title: "图书损坏处理",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-[#D4D4D4] w-full md:w-1/5">
          <h1 className="text-2xl text-center font-bold mt-12">您好 Admin！</h1>
          <nav className="mt-8 text-lg font-normal">
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="mx-14 my-3" key={title}>
                  <Link href={href}>
                    <a
                      className={`flex px-4 py-2  rounded hover:bg-[#859FCC] cursor-pointer ${
                        router.asPath === href && "bg-[#0D409B] text-white"
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
      <div className=" absolute bottom-0 inset-x-0 p-6 ">
        <button
          onClick={() => setOpened(true)}
          className="hover:bg-[#859FCC] p-1 hover:p-1 hover:rounded-[5px]"
        >
          <div className="flex gap-1">
            <img src="/assets/images/logout-icon.svg" alt="" className="w-4" />
            <h1 className="text-xl font-normal">登出</h1>
          </div>
        </button>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          centered
          withCloseButton={false}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-2xl font-bold">您想登出吗？</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setOpened(false)}
                className="text-white w-[200px] h-[50px] bg-[#8F8F8F] hover:bg-[#C7C7C7] text-xl font-bold rounded-[10px]"
              >
                取消
              </button>
              <Link href={"/"}>
                <button className="text-white w-[200px] h-[50px] bg-[#0D409B] hover:bg-[#859FCC] text-xl font-bold rounded-[10px]">
                  确认
                </button>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
