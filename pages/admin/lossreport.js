import Layout from "../../src/components/layout/Layout";
import { Input, InputWrapper, NumberInput, Space } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useAuthContext } from "../../src/hooks";
import { Modal } from "@mantine/core";
import { Autocomplete } from "@mantine/core";
export default function LossReport(bookid, userid, fine) {
  const { report, storeReport } = useAuthContext();
  const [opened, setOpened] = useState(false);

  {
    /*在到 API 连接后使用它来获取输入数据 */
  }
  /*    const [bookid, setUserid] = useState(report.bookid);
  const [userid, setUserid] = useState(report.userid);
  const [fine, setFine] = useState(report.fine); */

  const router = useRouter();

  const save = async () => {
    try {
      const { jwt } = parseCookies("jwt");
      const { data: bookdata } = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + `API`,
        {
          bookid,
          userid,
          fine,
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
          {/*书名 */}
          <InputWrapper
            label={
              <div className="text-lg pb-1 text-black font-normal ">
                图书编号
              </div>
            }
          >
            <Autocomplete
              className="border-[1px] border-black rounded-[11px] w-[728px]"
              data={[
                "901191109 IKIGAI",
                "901191110 Fifty Shades ",
                "901191111 Twilight",
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
              <div className="text-lg pb-1 text-black font-normal ">罚金</div>
            }
          >
            <NumberInput
              className="border-[1px] border-black rounded-[11px] w-[728px]"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-currency-yen"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 19v-7l-5 -7m10 0l-5 7" />
                  <line x1="8" y1="17" x2="16" y2="17" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                </svg>
              }
              placeholder="请输入罚金"
              /*   value={fine} */
              /*   onChange={(e) => setFine(e.target.value)} */
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
            <h1 className="text-center text-2xl font-bold">挂失受理成功！</h1>
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
