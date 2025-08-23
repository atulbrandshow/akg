import Link from "next/link";

export default function Breadcrumb({ data }) {
  return (
    <ul className='flex justify-start gap-2'>
      <li className='uppercase text-xs sm:text-sm cursor-pointer font-novaReg'>
        <Link href="/"
          className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
        >Home</Link>
      </li>
      {data?.map((item, index) => (
        <li key={index} className={`before:content-['/'] before:pr-2 cursor-pointer uppercase text-xs sm:text-sm ${index === data.length - 1 ? 'font-novaBold' : 'font-novaReg'
          }`}>
          <Link
            href={item.Link}
            className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}