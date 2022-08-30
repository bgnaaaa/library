import Layout from "../../src/components/layout/Layout";
import { Input, InputWrapper, Space } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useState } from "react";
import { useAuthContext } from "../../src/hooks";
import { Modal } from "@mantine/core";
export default function BookEntry(
  bookname,
  isbn,
  author,
  publishinghouse,
  publishingdate,
  bookdetail,
  bookprice
) {
  const { book, storeBook } = useAuthContext();
  const [opened, setOpened] = useState(false);

  {
    /*在到 API 连接后使用它来获取输入数据 */
  }
  /* const [bookname, setBookname] = useState(book.bookname);
  const [isbn, setIsbn] = useState(book.isbn);
  const [author, setAuthor] = useState(book.author);
  const [publishinghouse, setPublishinghouse] = useState(book.publishinghouse);
  const [publishingdate, setPublishingdate] = useState(book.publishingdate);
  const [bookdetail, setBookdetail] = useState(book.bookdetail);
  const [bookprice, setBookprice] = useState(book.bookprice); */

  const router = useRouter();

  const save = async () => {
    try {
      const { jwt } = parseCookies("jwt");
      const { data: bookdata } = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + `API`,
        {
          bookname,
          isbn,
          author,
          publishinghouse,
          publishingdate,
          bookdetail,
          bookprice,
        },
        { headers: { Authorization: "Bearer " + jwt } }
      );
      storeUser(data);
      router.push("/admin/bookentry");
    } catch (error) {
      alert("We're sorry. There was an error while saving the data!");
    }
  };

  return (
    <Layout>
      <div className="mx-[50px] mt-[50px] overflow-scroll">
        <h1 className="text-2xl font-bold">图书录入</h1>

        <div className="flex flex-col gap-[20px] mt-[40px]">
          {/*书名 */}
          <InputWrapper
            label={
              <div className="text-lg pb-1 text-black font-normal ">书名</div>
            }
          >
            <Input
              className=" w-[728px]"
              placeholder="请输入书名"
              /*   value={bookname} */
              /*   onChange={(e) => setBookname(e.target.value)} */
              radius="10px"
              size={"lg"}
              styles={{
                input: { fontSize: 14, fontWeight: 400 },
                filledVariant: { color: "black" },
                input: { color: "black" },
              }}
              classNames={{
                wrapper: "rounded-[12px] border-[2px] border-[#1E1E1E] ",
                defaultVariant: "defaultVariant-class",
                filledVariant: "bg-black placeholder-gray-600",
                unstyledVariant: "unstyledVariant-class",
              }}
            />
          </InputWrapper>
          <div className="flex flex-row gap-[40px]">
            {/* ISBN */}
            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">ISBN</div>
              }
            >
              <Input
                className=" w-[344px]"
                placeholder="请输入ISBN"
                /*   value={isbn} */
                /*   onChange={(e) => setIsbn(e.target.value)} */
                radius="10px"
                size={"lg"}
                styles={{
                  input: { fontSize: 14, fontWeight: 400 },
                  filledVariant: { color: "black" },
                  input: { color: "black" },
                }}
                classNames={{
                  wrapper: "rounded-[12px] border-[2px] border-[#1E1E1E] ",
                  defaultVariant: "defaultVariant-class",
                  filledVariant: "bg-black placeholder-gray-600",
                  unstyledVariant: "unstyledVariant-class",
                }}
              />
            </InputWrapper>

            {/* 作者 */}
            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">作者</div>
              }
            >
              <Input
                className=" w-[344px]"
                placeholder="请输入作者"
                /*   value={author} */
                /*   onChange={(e) => setAuthor(e.target.value)} */
                radius="10px"
                size={"lg"}
                styles={{
                  input: { fontSize: 14, fontWeight: 400 },
                  filledVariant: { color: "black" },
                  input: { color: "black" },
                }}
                classNames={{
                  wrapper: "rounded-[12px] border-[2px] border-[#1E1E1E] ",
                  defaultVariant: "defaultVariant-class",
                  filledVariant: "bg-black placeholder-gray-600",
                  unstyledVariant: "unstyledVariant-class",
                }}
              />
            </InputWrapper>
          </div>
          <div className="flex flex-row gap-[40px]">
            {/* 出版社 */}
            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">
                  出版社
                </div>
              }
            >
              <Input
                className=" w-[344px]"
                placeholder="请输入出版社"
                /*   value={publishinghouse} */
                /*   onChange={(e) => setPublishinghouse(e.target.value)} */
                radius="10px"
                size={"lg"}
                styles={{
                  input: { fontSize: 14, fontWeight: 400 },
                  filledVariant: { color: "black" },
                  input: { color: "black" },
                }}
                classNames={{
                  wrapper: "rounded-[12px] border-[2px] border-[#1E1E1E] ",
                  defaultVariant: "defaultVariant-class",
                  filledVariant: "bg-black placeholder-gray-600",
                  unstyledVariant: "unstyledVariant-class",
                }}
              />
            </InputWrapper>

            {/* 出版日期 */}
            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">
                  出版日期
                </div>
              }
            >
              <Input
                className=" w-[344px]"
                placeholder="请输入出版日期"
                /*   value={publishingdate} */
                /*   onChange={(e) => setPublishingdate(e.target.value)} */
                radius="10px"
                size={"lg"}
                styles={{
                  input: { fontSize: 14, fontWeight: 400 },
                  filledVariant: { color: "black" },
                  input: { color: "black" },
                }}
                classNames={{
                  wrapper: "rounded-[12px] border-[2px] border-[#1E1E1E] ",
                  defaultVariant: "defaultVariant-class",
                  filledVariant: "bg-black placeholder-gray-600",
                  unstyledVariant: "unstyledVariant-class",
                }}
              />
            </InputWrapper>
          </div>
          <div className="flex flex-row gap-[40px]">
            {/* 图书详情 */}
            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">
                  图书详情
                </div>
              }
            >
              <Input
                className=" w-[344px]"
                placeholder="请输入图书详情"
                /*   value={bookdetail} */
                /*   onChange={(e) => setBookdetail(e.target.value)} */
                radius="10px"
                size={"lg"}
                styles={{
                  input: { fontSize: 14, fontWeight: 400 },
                  filledVariant: { color: "black" },
                  input: { color: "black" },
                }}
                classNames={{
                  wrapper: "rounded-[12px] border-[2px] border-[#1E1E1E] ",
                  defaultVariant: "defaultVariant-class",
                  filledVariant: "bg-black placeholder-gray-600",
                  unstyledVariant: "unstyledVariant-class",
                }}
              />
            </InputWrapper>

            {/* 价格 */}
            <InputWrapper
              label={
                <div className="text-lg pb-1 text-black font-normal ">
                  {" "}
                  价格
                </div>
              }
            >
              <Input
                className=" w-[344px]"
                placeholder="请输入价格"
                /*   value={bookprice} */
                /*   onChange={(e) => setBookprice(e.target.value)} */
                radius="10px"
                size={"lg"}
                styles={{
                  input: { fontSize: 14, fontWeight: 400 },
                  filledVariant: { color: "black" },
                  input: { color: "black" },
                }}
                classNames={{
                  wrapper: "rounded-[12px] border-[2px] border-[#1E1E1E] ",
                  defaultVariant: "defaultVariant-class",
                  filledVariant: "bg-black placeholder-gray-600",
                  unstyledVariant: "unstyledVariant-class",
                }}
              />
            </InputWrapper>
          </div>
        </div>
        <button
          onClick={() => setOpened(true)}
          className="flex justify-end items-end absolute right-0 mr-[380px] text-xl font-bold bg-[#0D409B] text-white px-12 py-3 rounded-[10px] mt-[30px] hover:bg-[#859FCC]"
        >
          录入
        </button>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          centered
          withCloseButton={false}
        >
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center text-2xl font-bold">图书录入成功！</h1>
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
