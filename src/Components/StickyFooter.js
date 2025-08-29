"use client";

import Link from "next/link";
import { socialMediaLinks } from "@/Json/socialMediaLinks"
import { useCallback, useEffect, useRef, useState } from "react";
import { API_NODE_URL } from "@/configs/config";

const StickyFooter = ({ streamId, ShowState }) => {
  const marqueeRef = useRef(null);
  const [announcements, setAnnouncements] = useState([]);

  const fetchAnnouncements = useCallback(async () => {
    try {
      const url = streamId
        ? `${API_NODE_URL}announcement/get-by-stream?stream=${streamId}`
        : `${API_NODE_URL}announcement/get-by-stream`;

      const response = await fetch(url,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const responseData = await response.json();
      if (responseData?.status && Array.isArray(responseData.data)) {
        setAnnouncements(responseData.data);
      } else {
        setAnnouncements([]);
      }
    } catch (err) {
      setAnnouncements([]);
      console.error("Fetch error:", err);
    }
  }, [streamId]);

  useEffect(() => {
    fetchAnnouncements();
  }, [streamId, fetchAnnouncements]);

  return (
    <>
      <section className="transition-all overflow-hidden z-50 fixed bottom-[50%] -right-7 flex justify-end items-center max-md:gap-2 gap-5 px-5 max-md:flex-col-reverse">
        <div className="flex items-center justify-end gap-5 px-2 py-3 max-md:flex-col fixed">
          <div className="max-md:hidden">
            <div className="flex flex-col items-end text-white max-md:p-2 justify-center overflow-hidden">
              {socialMediaLinks?.map((link, index) => (
                <div key={index} className="relative group">
                  <Link href={link.url} target="_blank" className="bg-blue-700 flex items-center">
                    <span className="w-0 transition-all whitespace-nowrap group-hover:w-20 overflow-hidden group-hover:px-4 group-hover:py-1.5 rounded-lg text-xs duration-300">
                      {link.name}
                    </span>
                    <span className="flex w-10 border-b border-b-gray-50/20 h-10 items-center justify-center p-1 gap-2">
                      {link.icon}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Marquee Footer */}
      <section className="max-w-screen-2xl mx-auto w-full duration-500">
        <div className={`transition-all overflow-hidden ${ShowState ? "h-0" : "max-md:h-10"} z-50 fixed bottom-0 left-0 w-full flex justify-center items-center max-md:gap-2 gap-5 max-[400px]:px-2 max-md:flex-col-reverse`}>
          <div className="flex-1 max-md:flex max-md:items-center bg-btn-gradient animate-gradient text-white rounded-lg pt-2 pb-1 overflow-hidden w-full px-2">
            <marquee
              ref={marqueeRef}
              className="font-novaBold max-[400px]:text-sm whitespace-nowrap"
              onMouseEnter={() => marqueeRef.current?.stop?.()}
              onMouseLeave={() => marqueeRef.current?.start?.()}
            >
              {announcements.length > 0 ? (
                announcements.map((announcement, index) => (
                  <span key={index} className="mr-10">
                    {announcement.link ? (
                      <Link href={announcement.link} className="cursor-pointer text-white">
                        {announcement.title}
                      </Link>
                    ) : (
                      announcement.title
                    )}
                  </span>
                ))
              ) : (
                "APPLY NOW for Ajay Kumar Garg University"
              )}
            </marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default StickyFooter;
