import Layout from "../../src/components/layout/Layout";
export default function Admin() {
  return (
    <Layout>
      <div className="flex h-full flex-col justify-center items-center">
        <img src="/assets/images/admin-home-bg.jpg" />
        <div className="flex flex-col">
          <h1 className="font-normal">
            “书是最安静、最不变的朋友，他们是最容易接近和最聪明的辅导员，也是最有耐心的老师。”
          </h1>
          <h2 className="flex justify-end">——查尔斯·W·艾略特</h2>
        </div>
      </div>
    </Layout>
  );
}
