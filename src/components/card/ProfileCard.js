import Link from "next/link";
export default function ProfileCard({ avatar, username, fullname }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center gap-3">
        <img src={avatar} alt="" className="rounded-full" />
        <button className="px-6 py-1 bg-[#9264F3] text-white font-medium text-md rounded-2xl  ">
          Change my profile
        </button>
      </div>
      <div className="flex gap-7 md:gap-14 lg:gap-24">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-[18px] font-bold">Name</h1>
          <h2 className="text-white text-[18px] font-bold">Username</h2>
          <h3 className="text-white text-[18px] font-bold">Password</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#9264F3] text-[18px] font-bold">{fullname}</h1>
          <h2 className="text-[#9264F3] text-[18px] font-bold">{username}</h2>
          <h3 className="text-[#9264F3] text-[18px] font-bold">****</h3>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/myprofile/editname">
            <button className="px-2 py-[2px] bg-[#9264F3] text-white font-medium text-md rounded-2xl ">
              Edit
            </button>
          </Link>
          <Link href="/myprofile/editusername">
            <button className="px-2 py-[2px] bg-[#9264F3] text-white font-medium text-md rounded-2xl ">
              Edit
            </button>
          </Link>
          <Link href="/myprofile/changepassword">
            <button className="px-2 py-[2px] bg-[#9264F3] text-white font-medium text-md rounded-2xl ">
              Change
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
