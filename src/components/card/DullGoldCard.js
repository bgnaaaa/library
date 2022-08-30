import ReactCardFlip from "react-card-flip";

import React, { useState } from "react";

const DullGoldCard = ({
  avatar,
  name,
  profession,
  phonenumber,
  email,
  website,
  address,
  companylogo,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className=" ">
      <div className="flex flex-col items-center gap-[20px]">
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="vertical"
          flipSpeedBackToFront="0.4"
          flipSpeedFrontToBack="0.4"
        >
          <div className="bg-[#BBA14F] w-[360px] h-[210px] mt-[50px] p-[10px] rounded-lg">
            <div className="flex gap-[10px]">
              {/*Name and Picture */}
              <div className="flex flex-col basis-1/2 text-black justify-center gap-[10px]">
                <img
                  src={avatar}
                  alt=""
                  className="w-[120px] h-[120px] rounded-md"
                />
                <h1 className="text-[14px] leading-[16px] font-mono font-bold">
                  {name}
                </h1>
                <h2 className="text-[12px] leading-[12px] font-mono">
                  {profession}
                </h2>
              </div>
              {/*Line */}
              <div className="justify-center items-center">
                <div className="bg-black h-[190px] w-[1px] rounded-lg"></div>
              </div>
              {/* Information */}
              <div className="flex flex-col basis-1/2 text-black justify-center gap-[10px]">
                <div className="flex items-center gap-1">
                  <img src="/img/phone-icon.svg" alt="" className="" />
                  <h1 className="text-[11px] leading-[12px] font-mono font-bold">
                    {phonenumber}
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/img/envelope-icon.svg" alt="" className="" />
                  <h1 className="text-[11px] leading-[12px] font-mono font-bold">
                    {email}
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/img/globe-icon.svg" alt="" className="" />
                  <h1 className="text-[12px] leading-[12px] font-mono font-bold">
                    {website}
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/img/location-icon.svg" alt="" className="" />
                  <h1 className="text-[12px] leading-[12px] font-mono font-bold">
                    {address}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#BBA14F] w-[360px] h-[210px] mt-[50px] rounded-lg">
            <div className="flex justify-center ">
              <img
                src={companylogo}
                alt=""
                className="w-[160px] h-[160px] mt-[30px]"
              />
            </div>
          </div>
        </ReactCardFlip>
        <button
          className="text-black text-[16px] font-mono font-bold bg-[#BBA14F] rounded-lg border-[2px] border-[#BBA14F] p-[4px] hover:border-[#9264F3]"
          onClick={handleClick}
        >
          {" "}
          FLIP{" "}
        </button>
      </div>
    </div>
  );
};
export default DullGoldCard;
