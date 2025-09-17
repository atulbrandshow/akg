import { useRouter } from "next/router";
import EditPath from "./EditPath"; // adjust path if needed
import Layout from "../../Components/Layout";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
        {/* Wait for id to be available */}
        {id && <EditPath pageId={id} />}
      </Layout>
  );
}
