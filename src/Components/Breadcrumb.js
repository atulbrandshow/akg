import Link from "next/link";

export default function Breadcrumb({data}) {
    return (
        <ul className='flex justify-start gap-2'>
          <li className='uppercase text-xs sm:text-sm cursor-pointer font-novaReg'>
            <Link href="/">Home</Link>
          </li>
          {data?.map((item, index)=>(
            <li key={index}  className={`before:content-['/'] before:pr-2 cursor-pointer uppercase text-xs sm:text-sm ${
              index === data.length - 1 ? 'font-novaBold' : ''
            }`}>
              <Link href={item.Link}>{item.name}</Link>
            </li>
          ))}
        </ul>
    );
}