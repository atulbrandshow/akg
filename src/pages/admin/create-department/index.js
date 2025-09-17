import CreateDynamicDepartment from "../Components/CreateDynamicDepartment";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
      <Layout>
        <CreateDynamicDepartment type="Department" componentType="department-details"  />
      </Layout>
    </>
  );
}
