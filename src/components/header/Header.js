import { useState } from "react";
import Link from "next/link";
import { useEffect } from "react";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`fixed w-screen bg-black/70 lg:hidden backdrop-blur-xl transform ${
        open ? "-translate-y-0 " : "-translate-y-full "
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex items-center h-screen">
        {" "}
        <a className="text-xl font-semibold" href="/">
          <img src="/img/qard-logo.png" alt="" className="h-5 " />
        </a>
      </div>
      <div className="flex flex-col h-screen w-full gap-8 text-white items-center justify-center">
        <Link href="/home">
          <a
            className="text-[18px] leading-[18px] border-[2px] px-8 py-4 bg-white/10 border-white/20 rounded-[46px] font-medium"
            onClick={() =>
              setTimeout(() => {
                document.body.style.overflow = "unset";
                setOpen(!open);
              }, 100)
            }
          >
            HOME
          </a>
        </Link>
        <Link href="/myprofile">
          <a
            className="text-[18px] leading-[18px] border-[2px] px-8 py-4 bg-white/10 border-white/20 rounded-[46px] font-medium"
            onClick={() =>
              setTimeout(() => {
                document.body.style.overflow = "unset";
                setOpen(!open);
              }, 100)
            }
          >
            MY PROFILE
          </a>
        </Link>
        <Link href="/search">
          <a
            className="text-[18px] leading-[18px] border-[2px] px-8 py-4 bg-white/10 border-white/20 rounded-[46px] font-medium"
            onClick={() =>
              setTimeout(() => {
                document.body.style.overflow = "unset";
                setOpen(!open);
              }, 100)
            }
          >
            SEARCH
          </a>
        </Link>
        <Link href="/meetings">
          <a
            className="text-[18px] leading-[18px] border-[2px] px-8 py-4 bg-white/10 border-white/20 rounded-[46px] font-medium"
            onClick={() =>
              setTimeout(() => {
                document.body.style.overflow = "unset";
                setOpen(!open);
              }, 100)
            }
          >
            MEETINGS
          </a>
        </Link>
        <Link href="/mytracks">
          <a
            className="text-[18px] leading-[18px] border-[2px] px-8 py-4 bg-white/10 border-white/20 rounded-[46px] font-medium"
            onClick={() =>
              setTimeout(() => {
                document.body.style.overflow = "unset";
                setOpen(!open);
              }, 100)
            }
          >
            MY TRACKS
          </a>
        </Link>
        <Link href="/signout">
          <a
            className="text-[18px] leading-[18px] border-[2px] px-8 py-4 bg-white/10 border-white/20 rounded-[46px] font-medium"
            onClick={() =>
              setTimeout(() => {
                document.body.style.overflow = "unset";
                setOpen(!open);
              }, 100)
            }
          >
            SIGN OUT
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed z-50 w-screen justify-between flex bg-[#9264F3] lg:px-10 pt-4 pb-2 items-center ${
        open ? "" : "backdrop-blur-xl"
      }`}
    >
      <MobileNav open={open} setOpen={setOpen} />
      <Link href="/home">
        <a className="flex items-center z-50 pl-4 md:pl-6 md:py-2">
          <img
            src="assets/images/qard-logo-white.svg"
            alt="logo"
            className="h-11 md:h-14"
          />
        </a>
      </Link>
      <div className="flex justify-end items-center">
        <div
          className="z-50 flex flex-col space-y-1.5 md:space-y-2 pr-4 md:pr-6 md:py-3 cursor-pointer justify-between items-center lg:hidden"
          onClick={() => {
            setOpen(
              !open
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "")
            );
          }}
        >
          <span
            className={`h-0.5 w-6 md:h-1 md:w-8 bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2 md:translate-y-3 " : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 md:h-1 md:w-8 bg-white rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0 md:w-0" : "w-full"
            }`}
          />
          <span
            className={`h-0.5 w-6 md:h-1 md:w-8 bg-white rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2 md:-translate-y-3" : ""
            }`}
          />
        </div>

        <div className="hidden lg:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/home">
              <a className="text-white text-sm font-medium bg-white/10 border-2 border-white/20 border-solid rounded-3xl px-7 py-2.5 transition ease-in duration-200 hover:bg-white hover:bg-opacity-50 focus:outline-none">
                HOME
              </a>
            </Link>
            <Link href="/myprofile">
              <a className="text-white text-sm font-medium bg-white/10 border-2 border-white/20 border-solid rounded-3xl px-7 py-2.5 transition ease-in duration-200 hover:bg-white hover:bg-opacity-50 focus:outline-none">
                MY PROFILE
              </a>
            </Link>
            <Link href="/search">
              <a className="text-white text-sm font-medium bg-white/10 border-2 border-white/20 border-solid rounded-3xl px-7 py-2.5 transition ease-in duration-200 hover:bg-white hover:bg-opacity-50 focus:outline-none">
                SEARCH
              </a>
            </Link>
            <Link href="/meetings">
              <a className="text-white text-sm font-medium bg-white/10 border-2 border-white/20 border-solid rounded-3xl px-7 py-2.5 transition ease-in duration-200 hover:bg-white hover:bg-opacity-50 focus:outline-none">
                MEETINGS
              </a>
            </Link>
            <Link href="/mytracks">
              <a className="text-white text-sm font-medium bg-white/10 border-2 border-white/20 border-solid rounded-3xl px-7 py-2.5 transition ease-in duration-200 hover:bg-white hover:bg-opacity-50 focus:outline-none">
                MY TRACKS
              </a>
            </Link>
            <Link href="/signout">
              <a className="text-white text-sm font-medium bg-white/10 border-2 border-white/20 border-solid rounded-3xl px-7 py-2.5 transition ease-in duration-200 hover:bg-white hover:bg-opacity-50 focus:outline-none">
                SIGN OUT
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
