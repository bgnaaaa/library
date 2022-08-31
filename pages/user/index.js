import UserLayout from "../../src/components/layout/UserLayout";
export default function User() {
  return (
    <UserLayout>
      <div className="flex h-full flex-col justify-center items-center">
        <img src="/assets/images/user-home-bg.jpg" className="w-[600px]" />
        <div className="flex flex-col">
          <h1 className="font-normal">
            “书是最安静、最不变的朋友，他们是最容易接近和最聪明的辅导员，也是最有耐心的老师。”
          </h1>
          <h2 className="flex justify-end">——查尔斯·W·艾略特</h2>
        </div>
      </div>
    </UserLayout>
  );
}
