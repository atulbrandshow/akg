
import Layout from "../Components/Layout";
import TableList from "../Components/TableList";

export default function Home() {
  return (
    <>
      <Layout>
          <TableList type="Page" title="Page Management" subTitle="Manage your pages here" />
      </Layout>
    </>
  );
}
