import UserLayout from "../../src/components/layout/UserLayout";
import { InputWrapper } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

import { Space } from "@mantine/core";

export default function SeatReservation() {
  return (
    <UserLayout>
      <div className="mx-[50px] mt-[50px] overflow-scroll">
        <div>
          <h1 className="text-2xl font-bold">座位预约</h1>
          <Space h={"lg"} />
          {/*   <InputWrapper
            label={
              <div className="text-lg pb-1 text-black font-normal ">日期</div>
            }
          >
            <DatePicker
              className="w-[344px] text-xl font-normal border-[1px] border-black rounded-[11px]"
              locale="zh-cn"
              size={"lg"}
              radius="10px"
              placeholder="选择日期"
              inputFormat="YYYY-MM-DD"
              labelFormat="YYYY-MM"
              defaultValue={new Date()}
            />
          </InputWrapper> */}
        </div>
      </div>
    </UserLayout>
  );
}
