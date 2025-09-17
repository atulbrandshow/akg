import Layout from "../Components/Layout";
import TableList from "../Components/TableList";

export default function Home() {
  return (
    <Layout>
      <TableList type="Event" title="Event Management" subTitle="Manage your event here" />
    </Layout>
  );
}
