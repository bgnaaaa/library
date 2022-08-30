import Link from "next/link";
export default function SearchCard({ avatar, username, fullname }) {
  return (
    <div className="flex items-center gap-4">
      <Link href="/myprofile">
        <a>
          <img
            src={avatar}
            alt=""
            className="w-14 h-14 rounded-full border-white border-[3px] hover:border-[3px] hover:border-[#9264F3] "
          />
        </a>
      </Link>
      <div className="flex flex-col ">
        <h1 className="text-white font-bold text-[16px]">{username}</h1>
        <h2 className="text-[#979797] font-bold text-[16px]">{fullname}</h2>
      </div>
    </div>
  );
}
