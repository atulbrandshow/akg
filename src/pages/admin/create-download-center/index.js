import CreateDynamicPages from "../Components/CreateDynamicPages";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
      <Layout>
        <CreateDynamicPages type="Download Center" componentType="download-center-details" />
      </Layout>
    </>
  );
}
