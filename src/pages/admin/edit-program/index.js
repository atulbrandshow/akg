import { Suspense } from "react";
import EditProgramPage from "../Components/EditProgramPage";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <EditProgramPage type="Program" componentType="program-details" />
          </Suspense>
      </Layout>
    </>
  );
}
