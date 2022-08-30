import Link from "next/link";
import { Input, InputWrapper, Space } from "@mantine/core";
export default function MeetingCard({
  day_num,
  weekday_name,
  time,
  meeting_name,
  username,
  meeting_location,
  meeting_status,
  className,
  meeting_type_link,
  meeting_settings_hidden,
}) {
  return (
    <div className="flex gap-3 text-white">
      <div className="flex flex-col ">
        <h1 className="text-[18px] font-bold "> {day_num}</h1>
        <h2 className="text-[18px] font-bold leading-[12px]">
          {" "}
          {weekday_name}
        </h2>
      </div>
      <div className="flex flex-col" style={{width: '100%'}}>
        <div className="bg-[#9264F3] border-t-[3px] border-l-[3px] border-r-[3px] rounded-tl-3xl rounded-tr-3xl border-white py-2 px-3 ">
          <div className="flex items-start justify-between ">
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-start ">
                <img
                  src="/assets/images/calendar-icon-solid.svg"
                  alt=" "
                  className="w-[14px] h-[14px] mt-1"
                />
                <h1 className="text-[14px] font-bold">{time}</h1>
              </div>
              <div className="flex gap-1 items-start">
                <img
                  src="/assets/images/alarm-icon-solid.svg"
                  alt=" "
                  className="w-[14px] h-[14px] mt-1"
                />
                <h1 className="text-[14px] font-bold">{meeting_name}</h1>
              </div>
              <div className="flex gap-1 items-start">
                <img
                  src="/assets/images/user-icon-solid.svg"
                  alt=" "
                  className="w-[14px] h-[14px] mt-1"
                />
                <h1 className="text-[14px] font-bold">{username}</h1>
              </div>
              <div className="flex gap-1 items-start">
                <img
                  src="/assets/images/location-icon-solid.svg"
                  alt=" "
                  className="w-[14px] h-[14px] mt-1"
                />
                <h1 className="text-[14px] font-bold">{meeting_location}</h1>
              </div>
            </div>
            <Link href={`/meetings/${meeting_type_link}`}>
              <button className={`${meeting_settings_hidden}`}>
                <img
                  src="/assets/images/settings-icon.svg"
                  alt=""
                  className="w-10 h-10 "
                />
              </button>
            </Link>
          </div>
        </div>
        {/* Status */}
        <div
          className={`text-white text-center py-2 border-[3px] rounded-bl-3xl rounded-br-3xl border-white font-bold text-[16px] ${className}`}
        >
          {meeting_status}
        </div>
      </div>
    </div>
  );
}
