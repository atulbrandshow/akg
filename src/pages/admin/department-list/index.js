import Layout from "../Components/Layout";
import TableList from "../Components/TableList";

export default function Home() {
  return (
   <Layout>
     <TableList type="Department" title="School Department Management" subTitle="Manage your department page here" />
   </Layout>
  );
}
