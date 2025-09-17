import { Suspense } from "react";
import EditSchoolPage from "../Components/EditSchoolPage";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <EditSchoolPage type="School" componentType="school-details" />
      </Suspense>
    </Layout>
  );
}


