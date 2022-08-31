import UserLayout from "../../src/components/layout/UserLayout";
export default function PersonalInfo() {
  return (
    <UserLayout>
      <div className="mx-[50px] mt-[50px] overflow-scroll">
        <h1 className="text-2xl font-bold">个人信息</h1>
      </div>
    </UserLayout>
  );
}
