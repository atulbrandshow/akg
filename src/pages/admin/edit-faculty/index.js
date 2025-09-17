import CreateFacultyForm from "../Components/CreateDynamicFaculty";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
     <Layout>
       <CreateFacultyForm type="Faculty" componentType="FacultyComponent" />
     </Layout>
    </>
  );
}
