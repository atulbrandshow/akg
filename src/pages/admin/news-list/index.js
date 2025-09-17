import Layout from "../Components/Layout";
import TableList from "../Components/TableList";
export default function Home() {
  return (
    <>
      <Layout>
          <TableList type="News" title="News Management" subTitle="Manage your news here" />
      </Layout>
    </>
  );
}
