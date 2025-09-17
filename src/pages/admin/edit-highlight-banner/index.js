import { Suspense } from "react";
import EditAnnouncement from "./EditHighlightBanner";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <EditAnnouncement />
        </Suspense>
      </Layout>
    </>
  );
}
