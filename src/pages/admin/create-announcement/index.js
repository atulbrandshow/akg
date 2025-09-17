import CreateDynamicPages from "../Components/CreateDynamicPages";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
      <Layout>
        <CreateDynamicPages type="Announcement" componentType="announcement-details" />
      </Layout>
    </>
  );
}
