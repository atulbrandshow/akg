import { useSearchParams } from "next/navigation";
import SideBar from "../Components/SideBar";

export default function Home() {
    const searchParams = useSearchParams()
    const page_id = searchParams.get("page_id")

    return (
        <div className="flex bg-gray-100">
            <SideBar />
            <div className="pt-10 px-10 overflow-x-auto w-full h-screen">
                <h1>Add FAQ - PAGE ID: {page_id}</h1>
            </div>
        </div>
    );
}
