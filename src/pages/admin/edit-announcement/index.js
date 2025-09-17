import { Suspense } from "react";
import EditDynamicPages from "../Components/EditDynamicPages";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <>
    <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <EditDynamicPages type="Announcement" componentType="announcement-details" />
          </Suspense>
       </Layout>
    </>
  );
}
