import Layout from "../../src/components/layout/Layout";
import "dayjs/locale/zh-cn";
import {
  Input,
  InputWrapper,
  MultiSelect,
  NumberInput,
  Space,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useAuthContext } from "../../src/hooks";
import { Modal } from "@mantine/core";
import { Autocomplete } from "@mantine/core";
export default function BookBorrow(bookid, userid) {
  const { borrow, storeBorrow } = useAuthContext();
  const [opened, setOpened] = useState(false);

  {
    /*在到 API 连接后使用它来获取输入数据 */
  }
  /*    const [bookid, setUserid] = useState(report.bookid);
  const [userid, setUserid] = useState(report.userid);
 */

  const router = useRouter();

  const save = async () => {
    try {
      const { jwt } = parseCookies("jwt");
      const { data: bookdata } = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + `API`,
        {
          bookid,
          userid,
        },
        { headers: { Authorization: "Bearer " + jwt } }
      );
      storeUser(data);
      router.push("/admin/lossreport");
    } catch (error) {
      alert("We're sorry. There was an error while saving the data!");
    }
  };

  return (
    <Layout>
      <div className="mx-[50px] mt-[50px] overflow-scroll">
        <h1 className="text-2xl font-bold">挂失受理</h1>

        <div className="flex flex-col gap-[20px] mt-[40px]">
          <InputWrapper
            label={
              <div className="text-lg pb-1 text-black font-normal ">读者号</div>
            }
          >
            <Autocomplete
              className="border-[1px] border-black rounded-[11px] w-[728px]"
              data={["1956226 阿塔", "1956225 特古斯", "1956224 成龙"]}
              placeholder="请输入读者号"
              /*   value={userid} */
              /*   onChange={(e) => setUserid(e.target.value)} */
              radius="10px"
              size={"lg"}
              styles={{
                input: { fontSize: 14, fontWeight: 400 },
                filledVariant: { color: "black" },
                input: { color: "black" },
              }}
              classNames={{
                wrapper: " ",
                defaultVariant: "defaultVariant-class",
                filledVariant: "bg-black placeholder-gray-600",
                unstyledVariant: "unstyledVariant-class",
              }}
            />
          </InputWrapper>
          <InputWrapper
            label={
              <div className="text-lg pb-1 text-black font-normal ">
                图书编号
              </div>
            }
          >
            <MultiSelect
              className="border-[1px] border-black rounded-[11px] w-[728px]"
              data={[
                "901191109 IKIGAI",
                "901191110 Fifty Shades ",
                "901191111 Twilight",
                "901191112 Attack on Titan",
              ]}
              placeholder="请输入图书编号"
              /*   value={bookid} */
              /*   onChange={(e) => setBookid(e.target.value)} */
              radius="10px"
              size={"lg"}
              styles={{
                input: { fontSize: 14, fontWeight: 400 },
                filledVariant: { color: "black" },
                input: { color: "black" },
              }}
              classNames={{
                wrapper: "",
                defaultVariant: "defaultVariant-class",
                filledVariant: "bg-black placeholder-gray-600",
                unstyledVariant: "unstyledVariant-class",
              }}
            />
          </InputWrapper>
          <div className="flex gap-10">
            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">
                  开始日期
                </div>
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
            </InputWrapper>

            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">
                  结束日期
                </div>
              }
            >
              <DatePicker
                className="w-[344px] text-xl font-normal border-[1px] border-black rounded-[11px]"
                locale="zh-cn"
                placeholder="选择日期"
                size={"lg"}
                radius="10px"
                inputFormat="YYYY-MM-DD"
                labelFormat="YYYY-MM"
                defaultValue={new Date()}
              />
            </InputWrapper>
          </div>
        </div>
        <button
          onClick={() => setOpened(true)}
          className="flex justify-end items-end absolute right-0 mr-[380px] text-xl font-bold bg-[#0D409B] text-white px-12 py-3 rounded-[10px] mt-[30px] hover:bg-[#859FCC]"
        >
          受理
        </button>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          centered
          withCloseButton={false}
        >
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center text-2xl font-bold">借书受理成功！</h1>
            <div className="flex items-center">
              <button
                onClick={() => setOpened(false)}
                className="text-white w-[200px] h-[50px] bg-[#0D409B] hover:bg-[#859FCC] text-xl font-bold rounded-[10px]"
              >
                返回
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}

/* export async function getServerSideProps(ctx) {
  const { jwt } = parseCookies(ctx);

  if (jwt) {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "API",
        { headers: { Authorization: "Bearer " + jwt } }
      );
      return { props: { userData: data } };
    } catch (e) {
      return { redirect: { destination: "/admin" } };
    }
  }
  return { redirect: { destination: "/admin/bookentry" } };
} */
