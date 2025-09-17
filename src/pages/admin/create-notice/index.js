import CreateDynamicPages from "../Components/CreateDynamicPages";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
       <CreateDynamicPages type="Notice" componentType="circular-details" parentId={864268} />
     </Layout>
    </>
  );
}
