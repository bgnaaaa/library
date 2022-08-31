import Layout from "../../src/components/layout/Layout";
import { useState } from "react";
import { Modal } from "@mantine/core";

import { InputWrapper } from "@mantine/core";
import { Autocomplete } from "@mantine/core";
export default function BookCancellation({ bookid, bookname }) {
  const [opened, setOpened] = useState(false);
  const books = [
    {
      bookid: 901191109,
      isbn: "0143130722",
      bookname: "IKIGAI",
      author: "Francesc Miralles",
      publishinghouse: "Random House UK",
      bookdetail: "Ikigai 揭示了他们长寿和...",
    },
    {
      bookid: 901191109,
      isbn: "0143130722",
      bookname: "Fifty Shades",
      author: "Francesc Miralles",
      publishinghouse: "Random House UK",
      bookdetail: "Ikigai 揭示了他们长寿和...",
    },
    {
      bookid: 901191109,
      isbn: "0143130722",
      bookname: "Twilight",
      author: "Francesc Miralles",
      publishinghouse: "Random House UK",
      bookdetail: "Ikigai 揭示了他们长寿和...",
    },
  ];
  return (
    <Layout>
      <div className="mx-[50px] mt-[50px] overflow-scroll">
        <h1 className="text-2xl font-bold">图书注销</h1>

        <InputWrapper
          label={
            <div className="text-lg pb-1 text-black font-normal mt-[40px]">
              书名
            </div>
          }
        >
          <div className="flex gap-[30px]">
            <Autocomplete
              className=" w-[460px] border-[1px] border-black rounded-[11px]"
              placeholder="请输入书名"
              radius="10px"
              size={"lg"}
              /*数据会放在这里 */
              data={[
                "99009901 IKIGAI",
                "99009902 Fifty Shades",
                "99009903 Twilight",
              ]}
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
            <button
              onClick={() => setOpened(true)}
              className="px-3 py-2 bg-[#0D409B] rounded-[10px] hover:bg-[#859FCC]"
            >
              <div className="flex gap-1 ">
                <img src="/assets/images/cancel-icon.svg" className="w-5" />
                <h1 className="text-lg text-white font-normal">注销</h1>
              </div>
            </button>
            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              centered
              withCloseButton={false}
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-center text-2xl font-bold">
                  您想注销 "BOOK NAME" 吗？
                </h1>
                <div className="flex gap-4">
                  <button
                    onClick={() => setOpened(false)}
                    className="text-white w-[200px] h-[50px] bg-[#8F8F8F] hover:bg-[#C7C7C7] text-xl font-bold rounded-[10px]"
                  >
                    取消
                  </button>

                  <button className="text-white w-[200px] h-[50px] bg-[#0D409B] hover:bg-[#859FCC] text-xl font-bold rounded-[10px]">
                    确认
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </InputWrapper>
      </div>
    </Layout>
  );
}
