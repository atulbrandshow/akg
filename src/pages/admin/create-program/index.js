import CreateDynamicProgram from "../Components/CreateDynamicProgram";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
      <Layout>
        <CreateDynamicProgram type="Program" componentType="program-details" />
      </Layout>
    </>
  );
}
