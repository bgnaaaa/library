import UserLayout from "../../src/components/layout/UserLayout";
import { Button, Radio } from "@mantine/core";
import { RadioGroup } from "@mantine/core";
import { Group } from "@mantine/core";
import { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { Modal } from "@mantine/core";
export default function BookBorrowed() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("bookid");

  const BOOKS = [
    {
      bookid: "101",
      bookname: "IKIGAI",
      borrowingdate: "21/08/2022",
      latestreturndate: "31/08/2022",
      returndate: "24/08/2022",
      situation: "正在借",
    },
    {
      bookid: "102",
      bookname: "Fifty Shades",
      borrowingdate: "21/08/2022",
      latestreturndate: "31/08/2022",
      returndate: "24/08/2022",
      situation: "已经还",
    },
    {
      bookid: "103",
      bookname: "Twilight",
      borrowingdate: "21/08/2022",
      latestreturndate: "31/08/2022",
      returndate: "24/08/2022",
      situation: "超过日",
    },
  ];

  // the value of the search field
  const [bookname, setBookname] = useState("");

  // the search result
  const [foundBooks, setFoundBooks] = useState(BOOKS);

  const filter = (e) => {
    const keyword = e.target.value;
    let results;

    if (keyword !== "") {
      results = BOOKS.filter((book) => {
        return book.bookname.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundBooks(results);
    } else {
      setFoundBooks(BOOKS);
    }
    // If the text field is empty, show all users
    if (value === "bookid") {
      results = BOOKS.filter((book) => {
        return book.bookid.startsWith(keyword);
      });
      setFoundBooks(results);
    }

    if (value === "isbn") {
      results = BOOKS.filter((book) => {
        return book.isbn.startsWith(keyword);
      });
      setFoundBooks(results);
    }

    if (value === "bookname") {
      results = BOOKS.filter((book) => {
        return book.bookname.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundBooks(results);
    }

    if (value === "author") {
      results = BOOKS.filter((book) => {
        return book.author.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundBooks(results);
    }

    if (value === "publishinghouse") {
      results = BOOKS.filter((book) => {
        return book.publishinghouse
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });
      setFoundBooks(results);
    }

    setBookname(keyword);
  };

  return (
    <UserLayout>
      <div className="mx-[50px] mt-[50px] overflow-scroll">
        <h1 className="text-2xl font-bold">图书检索</h1>
        <RadioGroup
          value={value}
          onChange={setValue}
          color="dark"
          className="text-lg font-normal mt-[20px]"
        >
          <Radio value="bookid" label="图书编号" />

          <Radio value="bookname" label="图书名" />
        </RadioGroup>
        <div className="mt-[20px]">
          <div className="flex gap-3">
            <Input
              className=" w-[300px]"
              placeholder="索搜"
              value={bookname}
              onChange={filter}
              radius="10px"
              size={"md"}
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
            <button className="px-3 py-2 bg-[#0D409B] rounded-[10px] hover:bg-[#859FCC]">
              <div className="flex gap-1 ">
                <img src="/assets/images/search-icon.svg" className="w-5" />
                <h1 className="text-lg text-white font-normal">索搜</h1>
              </div>
            </button>
          </div>
          <div className="grid gap-6 grid-cols-6 grid-rows-1 text-xl font-bold mt-[30px]">
            <h1>图书编号</h1>
            <h3>书名</h3>
            <h4>借书日期</h4>
            <h5>最晚还书日期</h5>
            <h6>还书日期</h6>
            <h7 className="flex justify-end">状况</h7>
          </div>
          <div className="bg-[#1E1E1E] h-[1px] roundend-full w-full my-[18px]"></div>

          <div className="">
            {foundBooks && foundBooks.length > 0 ? (
              foundBooks.map((book, index) => (
                <div key={index}>
                  <li className="grid gap-6 grid-cols-6 grid-rows-1 text-xl ">
                    <span>
                      <button className=" text-[#0D409B]">{book.bookid}</button>
                    </span>

                    <span className="">{book.bookname} </span>
                    <span className="">{book.borrowingdate}</span>
                    <span className="">{book.latestreturndate}</span>
                    <span className="">{book.returndate}</span>
                    <div className="flex justify-end gap-2 ">
                      {" "}
                      {book.situation}
                    </div>
                  </li>
                  <div className="bg-[#1E1E1E] h-[1px] roundend-full w-full my-[18px]"></div>
                </div>
              ))
            ) : (
              <h1 className="text-2xl font-bold text-center">未找到结果</h1>
            )}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
