import CreateDynamicPages from "../Components/CreateDynamicPages";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
      <Layout>
        <CreateDynamicPages type="News" componentType="news-details" parentId={989951} />
      </Layout>
    </>
  );
}
