import CreateDynamicPages from "../Components/CreateDynamicPages";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <Layout>
      <CreateDynamicPages type="Page" componentType="DefaultPage" parentId={0} />
    </Layout>
  );
}