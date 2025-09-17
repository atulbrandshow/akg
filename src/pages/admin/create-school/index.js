
import CreateSchoolPages from "../Components/CreateSchoolPages";
import Layout from "../Components/Layout";


export default function Home() {
  return (
    <>
      <Layout>
        <CreateSchoolPages type="School" componentType="school-details" parentId={0} />
      </Layout>
    </>
  );
}
