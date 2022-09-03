import UserLayout from "../../src/components/layout/UserLayout";
import { Button, Radio } from "@mantine/core";
import { RadioGroup } from "@mantine/core";
import { Group } from "@mantine/core";
import { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { Modal } from "@mantine/core";
export default function BookReservation() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("bookid");

  const BOOKS = [
    {
      bookid: "101",
      bookname: "IKIGAI",
      reservationnumber: "9909",
      reservationdate: "21/08/2022",
      reservationexpirationdate: "31/08/2022",
    },
    {
      bookid: "102",
      bookname: "Fifty Shades",
      reservationnumber: "9910",
      reservationdate: "21/08/2022",
      reservationexpirationdate: "31/08/2022",
    },
    {
      bookid: "103",
      bookname: "Twilight",
      reservationnumber: "9911",
      reservationdate: "21/08/2022",
      reservationexpirationdate: "31/08/2022",
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
          <div className="grid gap-7 grid-cols-5 grid-rows-1 text-xl font-bold mt-[30px]">
            <h1>预约编号</h1>
            <h3>图书编号</h3>
            <h4>书名</h4>
            <h5>图书预约时间</h5>
            <h6>图书预约到期时间</h6>
          </div>
          <div className="bg-[#1E1E1E] h-[1px] roundend-full w-full my-[18px]"></div>

          <div className="">
            {foundBooks && foundBooks.length > 0 ? (
              foundBooks.map((book, index) => (
                <div key={index}>
                  <li className="grid gap-7 grid-cols-5 grid-rows-1 text-xl ">
                    <span>
                      <button className=" text-[#0D409B]">
                        {book.reservationnumber}
                      </button>
                    </span>

                    <span className="">{book.bookid} </span>
                    <span className="">{book.bookname}</span>
                    <span className="">{book.reservationdate}</span>
                    <span className="">{book.reservationexpirationdate}</span>
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
