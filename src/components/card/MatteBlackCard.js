import ReactCardFlip from "react-card-flip";

import React, { useState } from "react";

const MatteBlackCard = ({
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
          <div className="bg-[#28282B] w-[360px] h-[210px] mt-[50px] p-[10px] rounded-lg">
            <div className="flex gap-[10px]">
              {/*Name and Picture */}
              <div className="flex flex-col basis-2/5 text-white justify-center gap-[10px]">
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
                <div className="bg-white h-[190px] w-[1px] rounded-lg"></div>
              </div>
              {/* Information */}
              <div className="flex flex-col basis-3/5 text-white justify-center gap-[10px]">
                <div className="flex items-center gap-1">
                  <img src="/img/phone-icon-white.svg" alt="" className="" />
                  <h1 className="text-[11px] leading-[11px] font-mono">
                    {phonenumber}
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/img/envelope-icon-white.svg" alt="" className="" />
                  <h1 className="text-[11px] leading-[11px] font-mono">
                    {email}
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/img/globe-icon-white.svg" alt="" className="" />
                  <h1 className="text-[12px] leading-[12px] font-mono">
                    {website}
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <img src="/img/location-icon-white.svg" alt="" className="" />
                  <h1 className="text-[12px] leading-[12px] font-mono">
                    {address}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#28282B] w-[360px] h-[210px] mt-[50px] rounded-lg">
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
          className="text-white text-[16px] font-mono font-bold bg-[#28282B] rounded-lg border-[2px] border-gray-700 p-[4px] hover:border-[#9264F3]"
          onClick={handleClick}
        >
          {" "}
          FLIP{" "}
        </button>
      </div>
    </div>
  );
};
/* ReactDOM.render(<StandardCard />, document.querySelector("#root")); */
export default MatteBlackCard;
