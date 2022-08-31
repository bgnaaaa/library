import Layout from "../../src/components/layout/Layout";
import { Button, Radio } from "@mantine/core";
import { RadioGroup } from "@mantine/core";
import { Group } from "@mantine/core";
import { useState } from "react";
import { Input } from "@mantine/core";
import { Modal } from "@mantine/core";
export default function UserSearch() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("react");

  const USERS = [
    {
      id: 1956226,
      name: "阿塔",
      phonenumber: +97699198282,
      identitynumber: 1919190,
    },
    {
      id: 1956225,
      name: "特古斯",
      phonenumber: +97699119911,
      identitynumber: 1919021,
    },
    {
      id: 1956224,
      name: "成龙",
      phonenumber: +97699990908,
      identitynumber: 19190876,
    },
  ];

  // the value of the search field
  const [name, setName] = useState("");

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <Layout>
      <div className="mx-[50px] mt-[50px] overflow-scroll">
        <h1 className="text-2xl font-bold">索搜账户</h1>
        <RadioGroup
          value={value}
          onChange={setValue}
          color="dark"
          className="text-lg font-normal mt-[20px]"
        >
          <Radio value="userID" label="账户号" />
          <Radio value="username" label="用户名" />
          <Radio value="phonenumber" label="电话号码" />
          <Radio value="identitynumber" label="身份证号" />
        </RadioGroup>
        <div className="mt-[20px]">
          <div className="flex gap-3">
            <Input
              className=" w-[300px]"
              placeholder="索搜"
              value={name}
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
          <div className="grid gap-7 grid-cols-5 text-xl font-bold mt-[30px]">
            <h1 className="justify-start">用户ID</h1>
            <h2>用户名</h2>
            <h3>电话号码</h3>
            <h4>身份证号</h4>
            <h5 className="flex justify-end">编辑/删除</h5>
          </div>
          <div className="bg-[#1E1E1E] h-[1px] roundend-full w-full my-[18px]"></div>

          <div className="">
            {foundUsers && foundUsers.length > 0 ? (
              foundUsers.map((user) => (
                <div className="">
                  <li
                    key={user.id}
                    className="grid gap-7 grid-cols-5 grid-rows-1 text-xl  "
                  >
                    <span className="">
                      <button className="text-xl text-[#0D409B]">
                        {user.id}{" "}
                      </button>
                    </span>
                    <span className="">{user.name}</span>
                    <span className="">{user.phonenumber} </span>
                    <span className="">{user.identitynumber} </span>
                    <div className="flex justify-end items-center gap-2 ">
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
                          <h1 className="text-center text-2xl font-bold">
                            您想删除 {user.id} {user.name} 帐户吗？
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
              <h1>未找到结果</h1>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
