import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Holder({ data, extra, allData }) {

    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);
    const BannerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [readMore, setReadMore] = useState(true);

    const [ReadFunc, setReadFunc] = useState(true);
    // Function to clean up the description HTML content
    const cleanDescription = (html) => {
        if (!html) return "";
        return html.replace(/&nbsp;/g, " ");
    };

    useEffect(() => {
        if (descriptionRef.current) {
            const links = descriptionRef.current.getElementsByTagName("a");
            for (let link of links) {
                link.classList.add(
                    "text-blue-900",
                    "active:text-red-700",
                    "font-bold",
                    "hover:text-red-500",
                    "hover:underline"
                );
            }
            const liTags = descriptionRef.current.getElementsByTagName("li");
            for (let li of liTags) {
                li.classList.add("list-disc", "mt-5", "ml-5");
            }

            // Add classes to <table>, <th>, and <td> tags
            const tables = descriptionRef.current.getElementsByTagName("table");
            for (let table of tables) {
                table.classList.add("w-full", "border-collapse", "mt-5", "mb-5", "MyClass");
            }
            const tableHeaders = descriptionRef.current.getElementsByTagName("th");
            for (let th of tableHeaders) {
                th.classList.add("border", "p-2", "bg-gray-200", "text-left");
            }
            const tableCells = descriptionRef.current.getElementsByTagName("td");
            for (let td of tableCells) {
                td.classList.add("border", "text-center", "p-2");
            }

        }
    }, [data]);

    useEffect(() => {
        if (buttonRef.current) {
            const links = buttonRef.current.getElementsByTagName("a");
            for (let link of links) {
                link.classList.add(
                    "mt-3",
                    "bg-black",
                    "px-6",
                    "py-1.5",
                    "rounded-xl",
                    "text-white",
                    "font-normal",
                    "block",
                    "w-fit",
                    "mx-auto",
                    "hover:bg-gray-100",
                    "hover:text-black",
                    "hover:border",
                    "hover:border-gray-300",
                    "hover:scale-105",
                    "transition",
                    "duration-200",
                    "ease-in-out",
                );
            }
        }

    }, [data])

    useEffect(() => {
        if (descriptionRef.current) {
            const styledDivs = descriptionRef.current.querySelectorAll('div[style]');
            styledDivs.forEach((div) => {
                div.classList.add(
                    'bg-yellow-50',
                    'border',
                    'rounded-md',
                    'shadow-md',
                    'p-4',
                    'my-4',
                    'text-sm',
                    'text-yellow-700',
                    'font-normal'
                );
            });
        }
    }, [data]);

    useEffect(() => {
        if (BannerRef.current) {
            const links = BannerRef.current.getElementsByTagName("a");
            for (let link of links) {
                link.classList.add(
                    "mt-3",
                    "bg-black",
                    "px-6",
                    "py-1.5",
                    "rounded-xl",
                    "text-white",
                    "font-semibold",
                    "block",
                    "w-fit",
                    "hover:bg-gray-100",
                    "hover:text-black",
                    "hover:border",
                    "hover:border-gray-300",
                    "transition",
                    "duration-200",
                    "ease-in-out",
                );
            }
        }

    }, [data])


    // Ensure data is available before rendering
    if (!data) return null;

    // Determine the tag dynamically
    let Tag = "h3";
    switch (data.titleTag) {
        case "H1":
            Tag = "h1";
            break;
        case "H2":
            Tag = "h2";
            break;
        case "H3":
            Tag = "h3";
            break;

        case "H4":
            Tag = "h4";
            break;
        case "H5":
            Tag = "h5";
            break;
        case "H6":
            Tag = "h6";
            break;
        default:
            Tag = "h3";
    }


    // Clean the description HTML content
    const description = data.description
        ? cleanDescription(String(data.description).replace(/\\r\\n/g, "<br/>"))
        : "";


    const faqData = [
        {
            question: 'What is your return policy?',
            answer: 'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.',
        },
        {
            question: 'What is your return policy?',
            answer: 'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.',
        },
        {
            question: 'What is your return policy?',
            answer: 'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.',
        },
        {
            question: 'What is your return policy?',
            answer: 'Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.',
        },
    ];

    const collapsibleDescription = typeof data?.description === 'string' ? data.description : '';
    const cleanedDescription = collapsibleDescription.replace(/<p>\s*<\/p>/g, '<br />');

    return (
        <>
            {data ? (
                <>
                    {(data?.titleTag === "H1" ||
                        data?.titleTag === "H2" ||
                        data?.titleTag === "H3" ||
                        data?.titleTag === "H4" ||
                        data?.titleTag === "H5" ||
                        data?.titleTag === "H6") ? (
                        <div className={`rounded-xl shadow-md w-full overflow-hidden ${extra ? extra : "mt-5 bg-white"}`}>
                            {data.title && (
                                <div className="w-full bg-gradient-to-r from-blue-600 to-purple-800 py-4 px-5 shadow-lg">
                                    <div className="flex items-center justify-between">
                                        <div className="flex text-white items-center justify-start w-full space-x-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg>
                                            <h2 className=" font-serif text-2xl max-sm:text-base text-white tracking-wide">{data?.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* {data.title ? <Tag className="text-lg md:text-xl lg:text-2xl font-bold mb-5 break-words">{data.title}</Tag> : null} */}
                            {data.image ? <Image src={data.image} width={1200} height={300} /> : null}
                            {description ? (
                                <div
                                    ref={descriptionRef}
                                    className="p-3 sm:p-5 text-base text-justify ifInsideH3tag prose prose-sm md:prose-base lg:prose-lg max-w-none text-gray-800 prose-a:text-blue-800 prose-a:no-underline prose-a:hover:text-blue-700 prose-a:bg-blue-100 prose-a:px-2 prose-a:rounded-xl prose-a:text-sm hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-strong:font-semibold prose-p:my-1 prose-p:text-sm sm:prose-p:text-base prose-p:font-semibold prose-li:marker:text-blue-500 prose-li:marker:text-lg prose-ul:list-disc prose-li:font-semibold sm:prose-li:font-semibold prose-li:mb-2"
                                    dangerouslySetInnerHTML={{ __html: description.replace(/<p>(&nbsp;|\s)*<\/p>/g, '<br />') }}
                                />
                            ) : null}
                        </div>
                    ) : null}


                    {data?.titleTag === "Banner" ? <>
                        <a href={data.url} className="mx-auto mt-16 grid w-full shadow-lg p-2 border border-gray-200 rounded-2xl">
                            <article className="flex flex-col items-start justify-between">
                                <div className="relative w-full">
                                    <img
                                        alt={data.title}
                                        src={data.image}
                                        className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/1]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div className="w-full bg-white p-5 pt-0">
                                    <div className="group relative">
                                        <h3 className="mt-4 text-2xl max-md:text-lg font-semibold leading-6 text-gray-900 ">
                                            {data.title}
                                        </h3>
                                        <p ref={BannerRef} className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                                    </div>
                                </div>
                            </article>
                        </a>
                    </> : null}

                    {data?.titleTag === "CTA" ? <>
                        <div className="my-5 relative bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#a08bff] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">
                            <div className="absolute inset-2 rounded-3xl bg-white/80"></div>
                            <div className="relative text-center px-4 py-4">
                                <hgroup>
                                    <h2 className="font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">{data.subHeading}</h2>
                                    <p className="max-w-xl mx-auto text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">{data.title}</p>
                                </hgroup>
                                <p ref={buttonRef} className="mb-5 mx-auto max-w-xl text-sm/6 text-gray-700" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                            </div>
                        </div>
                    </> : null}

                    {data?.titleTag === "Widget" ? <>
                        <div className={`rounded-lg bg-white shadow-lg w-full ${extra ? extra : "p-5 mt-5 bg-white"}`}>
                            {data.title ? <Tag className="text-lg md:text-xl lg:text-2xl font-bold mb-5 break-words">{data.title}</Tag> : null}
                            {data.image ? <Image src={data.image} width={1200} height={300} /> : null}
                            {description ? (
                                <div

                                    className="text-base text-gray-900 text-justify ifInsideAtag"
                                    dangerouslySetInnerHTML={{ __html: description.replace(/<p>\s*<\/p>/g, '<br />') }}
                                />
                            ) : null}
                        </div>
                    </> : null}

                    {data?.titleTag === "Footer" ? <></> : null}

                    {data?.titleTag === "Collapsible" && (
                        <div className={`rounded-lg shadow-lg w-full ${extra ? extra : "p-5 mt-5 bg-white"}`}>
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <p className="text-lg md:text-xl font-semibold break-words text-left">
                                    {data?.title}
                                </p>
                                {/* SVG Icon */}
                                <svg
                                    className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Description section */}
                            {isOpen && (
                                <div className="mt-4 bg-green-100 p-2 rounded-lg flex gap-1 items-start font-semibold">
                                    Answer:
                                    <div
                                        className="text-base text-green-900 font-semibold text-justify AtagClasses"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                collapsibleDescription.length > 400 && readMore
                                                    ? cleanedDescription.slice(0, 400).replace(/<p>\s*<\/p>/g, '<br />') + '...'
                                                    : cleanedDescription.replace(/<p>\s*<\/p>/g, '<br />'),
                                        }}
                                    />

                                    {/* Read More / Read Less */}
                                    {data.description.length > 400 && (
                                        <div className="flex justify-end">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // prevent accordion toggle
                                                    setReadMore(!readMore);
                                                }}
                                                className="bg-orange-500 text-sm text-white mt-4 p-2 py-1 rounded-sm"
                                            >
                                                {readMore ? 'Read More' : 'Read Less'}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </>
            ) : null}
        </>
    );
}
