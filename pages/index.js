import Link from "next/link";

export default function Index() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-1/2 ">
        <div className="flex items-end justify-end pt-[50px] px-[50px]">
          <img
            src="/assets/images/tongji-logo.svg"
            alt=""
            className="w-[106px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[48px] font-[GIP] font-bold">图书馆管理系统</h1>
          <div className="bg-[#1E1E1E] h-[1px] border-rounded border-[1px] w-[344px] mt-[20px]"></div>
          <Link href={"/user/log"}>
            <button className="text-[28px] font-GIP font-normal text-white text-center w-[376px] bg-[#0D409B] hover:bg-[#859FCC] rounded-[10px] py-[5px] mt-[20px]">
              读者
            </button>
          </Link>
          <Link href={"/admin/log"}>
            <button className="text-[28px] font-GIP font-normal text-[#0D409B] hover:text-[#859FCC]  text-center w-[376px] bg-none rounded-[10px] border-[2px] border-[#0D409B] hover:border-[#859FCC] py-[4px] mt-[20px]">
              管理员
            </button>
          </Link>
          <div className="bg-[#1E1E1E] h-[1px] border-rounded border-[1px] w-[344px] mt-[20px]"></div>
        </div>
      </div>

      <div
        className=" bg-center bg-cover top-0 sticky h-1/2 mt-[50px]"
        style={{
          backgroundImage: `url("/assets/images/tongji-index-bg.jpg")`,
        }}
      ></div>
    </div>
  );
}
