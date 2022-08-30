export default function Recom({ avatar, username }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <img src={avatar} alt="" className="rounded-full w-16" />
      <div className="text-sm text-white bg-black py-3 px-7 border-[#9264F3] border-[3px] rounded-3xl">
        {username}
      </div>
    </div>
  );
}
