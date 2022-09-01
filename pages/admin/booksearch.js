import Layout from "../../src/components/layout/Layout";
import { Button, Radio } from "@mantine/core";
import { RadioGroup } from "@mantine/core";
import { Group } from "@mantine/core";
import { useEffect, useState } from "react";
import { Input } from "@mantine/core";
import { Modal } from "@mantine/core";
export default function BookSearch() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("bookid");

  const BOOKS = [
    {
      bookid: "101",
      isbn: "0101010101",
      bookname: "IKIGAI",
      author: "Francesc Miralles",
      publishinghouse: "Random House UK",
      bookdetail: "Ikigai 揭示了他们长寿和...",
    },
    {
      bookid: "102",
      isbn: "0202020202",
      bookname: "Fifty Shades",
      author: "George Micheal",
      publishinghouse: "Crismon Moon",
      bookdetail: "Fifty Shades 揭示了他们长寿和...",
    },
    {
      bookid: "103",
      isbn: "0303030303",
      bookname: "Twilight",
      author: "Tony Parker",
      publishinghouse: "San Antiono Spurs",
      bookdetail: "Twilight 揭示了他们长寿和...",
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
    <Layout>
      <div className="mx-[50px] mt-[50px] overflow-scroll">
        <h1 className="text-2xl font-bold">图书检索</h1>
        <RadioGroup
          value={value}
          onChange={setValue}
          color="dark"
          className="text-lg font-normal mt-[20px]"
        >
          <Radio value="bookid" label="图书编号" />
          <Radio value="isbn" label="ISBN" />
          <Radio value="bookname" label="图书名" />
          <Radio value="author" label="作者" />
          <Radio value="publishinghouse" label="出版社" />
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
          <div className="grid gap-5 grid-cols-7 grid-rows-1 text-xl font-bold mt-[30px]">
            <h1>图书编号</h1>
            <h2>ISBN</h2>
            <h3>书名</h3>
            <h4>作者</h4>
            <h5>出版社</h5>
            <h6>详情</h6>
            <h7 className="flex justify-end">编辑/删除</h7>
          </div>
          <div className="bg-[#1E1E1E] h-[1px] roundend-full w-full my-[18px]"></div>

          <div className="">
            {foundBooks && foundBooks.length > 0 ? (
              foundBooks.map((book, index) => (
                <div key={index}>
                  <li className="grid gap-5 grid-cols-7 grid-rows-1 text-xl ">
                    <span>
                      <button className=" text-[#0D409B]">{book.bookid}</button>
                    </span>
                    <span className=" max-w-[50px]">
                      <div className=" max-w-[50px]"> {book.isbn} </div>
                    </span>
                    <span className="">{book.bookname} </span>
                    <span className="">{book.author}</span>
                    <span className="">{book.publishinghouse}</span>
                    <span className="">{book.bookdetail}</span>
                    <div className="flex justify-end gap-2 ">
                      <button>
                        <img src="/assets/images/edit-icon.svg" />
                      </button>
                      <button onClick={() => setOpened(true)}>
                        <img src="/assets/images/delete-icon.svg" />
                      </button>
                      <Modal
                        overlayBlur={1}
                        overlayColor={"transparent"}
                        opened={opened}
                        onClose={() => setOpened(false)}
                        centered
                        withCloseButton={false}
                      >
                        <div className="flex flex-col gap-4">
                          <h1 className="text-center text-2xl font-bold flex">
                            您想删除{" "}
                            <div className="text-[#0D409B]">
                              {book.bookid} {book.bookname}
                            </div>{" "}
                            吗？
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
    </Layout>
  );
}
