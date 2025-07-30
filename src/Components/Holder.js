import { useEffect, useRef } from "react";
import Image from "next/image";
import Widget from "./Widget";
import HighlightBanner from "./HighLightBanner";

export default function Holder({ data, initialData }) {
    if (data.type === 'Widget') {
        return <Widget key={data?._id} type={data?.widgetType} stream={initialData?.stream} limit={10} />
    }

    if (data.type === 'Banner') {
        const tags = []
        if (initialData?.tag1 && initialData?.tag1 !== "") {
            tags.push(initialData?.tag1);
        }
        if (initialData?.tag2 && initialData?.tag2 !== "") {
            tags.push(initialData?.tag2);
        }
        if (initialData?.tag3 && initialData?.tag3 !== "") {
            tags.push(initialData?.tag3);
        }
        return <HighlightBanner stream={initialData?.stream} tags={tags || []} />
    }
    const descriptionRef = useRef(null);
    const cleanDescription = (html) => {
        if (!html) return "";
        return html.replace(/&nbsp;/g, " ").replace(/<p>\s*<\/p>/g, '<br />');
    };

    useEffect(() => {
        if (descriptionRef.current) {
            const links = descriptionRef.current.getElementsByTagName("a");
            for (let link of links) {
                link.classList.add("text-blue-900", "font-bold", "hover:text-red-500", "hover:underline");
            }

            const liTags = descriptionRef.current.getElementsByTagName("li");
            for (let li of liTags) {
                li.classList.add("list-disc", "mt-2", "ml-5");
            }

            const tables = descriptionRef.current.getElementsByTagName("table");
            for (let table of tables) {
                table.classList.add("w-full", "border-collapse", "mt-5", "mb-5");
            }

            const ths = descriptionRef.current.getElementsByTagName("th");
            for (let th of ths) {
                th.classList.add("border", "p-2", "bg-gray-200", "text-left");
            }

            const tds = descriptionRef.current.getElementsByTagName("td");
            for (let td of tds) {
                td.classList.add("border", "text-center", "p-2");
            }

            const styledDivs = descriptionRef.current.querySelectorAll('div[style]');
            styledDivs.forEach(div => {
                div.classList.add("bg-yellow-50", "border", "rounded-md", "shadow-md", "p-4", "my-4", "text-sm", "text-yellow-700");
            });
        }
    }, [data]);

    if (!data) return null;
    const cleanedDescription = cleanDescription(data.paramDesc || "");

    return (

        <div className={`rounded-xl shadow-md w-full overflow-hidden`}>
            {data.param && (
                <div className="w-full bg-gradient-to-r from-blue-600 to-purple-800 py-4 px-5 shadow-lg">
                    <h2 className="text-2xl font-serif text-white tracking-wide">{data.param}</h2>
                </div>
            )}

            {data.paramImg && (
                <Image src={data.paramImg} alt={data.param} width={1200} height={300} className="w-full object-cover" />
            )}

            {cleanedDescription && (
                <div
                    ref={descriptionRef}
                    className="p-5 text-base text-justify text-gray-800 prose prose-sm md:prose-base max-w-none"
                    dangerouslySetInnerHTML={{ __html: cleanedDescription }}
                />
            )}

            {data.paramUrl && (
                <div className="px-5 pb-5">
                    <a
                        href={data.paramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black text-white px-6 py-2 rounded-xl hover:bg-white hover:text-black hover:border hover:border-gray-300 transition duration-200"
                    >
                        Learn More
                    </a>
                </div>
            )}
        </div>
    );
}
