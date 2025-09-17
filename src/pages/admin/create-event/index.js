import CreateDynamicPages from "../Components/CreateDynamicPages";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
      <Layout>
        <CreateDynamicPages type="Event" componentType="event-details" parentId={122156} />
      </Layout>
    </>
  );
}
