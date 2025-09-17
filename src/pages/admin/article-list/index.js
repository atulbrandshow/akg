import Layout from "../Components/Layout";
import TableList from "../Components/TableList";

export default function Home() {
  return (
    <Layout>
      <TableList type="Article" title="Article Management" subTitle="Manage your article here" />
    </Layout>
  );
}
