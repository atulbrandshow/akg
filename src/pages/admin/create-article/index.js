import CreateDynamicPages from "../Components/CreateDynamicPages";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
      <Layout>
        <CreateDynamicPages type="Article" componentType="article-details" parentId={696085} />
      </Layout>
    </>
  );
}
