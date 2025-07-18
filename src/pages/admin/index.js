"use client";
import { useEffect, useState } from "react";
import Admin from "./Admin1";
import SideBar from "./Components/SideBar";
import Login from "./Components/login";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setLoading(true);
    const userData = JSON.parse(localStorage.getItem("user"));
    setUserData(userData);
    setLoading(false);
  }, [trigger]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img className="w-96" src="/image/svg/ripples.svg" alt="loader" />        
      </div>
    );
  }


  return (
    <>
      {userData ? (
        <div className="flex bg-gray-100">
          <SideBar />
          <div className="pt-16 px-10 overflow-x-auto w-full h-screen">
            <Admin />
          </div>
        </div>
      ) : (
        <Login setTrigger={setTrigger} />
      )}
    </>
  );
}
