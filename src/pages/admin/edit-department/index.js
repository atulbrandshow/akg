import { Suspense } from "react";
import EditDepartmentPage from "../Components/EditDepartmentPage";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <EditDepartmentPage type="Department" componentType="department-details" />
        </Suspense>
      </Layout>
    </>
  );
}

