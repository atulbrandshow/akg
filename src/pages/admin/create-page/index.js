import CreateDynamicPages from "../Components/CreateDynamicPages";
import Layout from "../Components/Layout";
import SideBar from "../Components/SideBar";

export default function Home() {
  return (
    <Layout>
      <CreateDynamicPages type="Page" componentType="DefaultPage" parentId={0} />
    </Layout>
  );
}