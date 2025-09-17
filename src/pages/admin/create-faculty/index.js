import CreateDynamicFaculty from "../Components/CreateDynamicFaculty";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
     <Layout>
       <CreateDynamicFaculty type="Faculty" componentType="FacultyComponent" />
     </Layout>
    </>
  );
}
