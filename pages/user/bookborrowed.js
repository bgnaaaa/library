import UserLayout from "../../src/components/layout/UserLayout";
export default function BookBorrowed() {
  return (
    <UserLayout>
      <div className="mx-[50px] mt-[50px] overflow-scroll">
        <h1 className="text-2xl font-bold">已借阅图书</h1>
      </div>
    </UserLayout>
  );
}
