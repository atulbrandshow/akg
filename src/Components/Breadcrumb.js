import Link from "next/link";

export default function Breadcrumb({data}) {
    return (
        <ul className='flex justify-start gap-2'>
          <li className='uppercase text-xs cursor-pointer font-novaReg'>
            <Link href="/">Home</Link>
          </li>
          {data?.map((item, index)=>(
            <li key={index}  className={`before:content-['/'] before:pr-2 cursor-pointer uppercase text-xs ${
              index === data.length - 1 ? 'font-novaSemi' : ''
            }`}>
              <Link href={item.Link}>{item.name}</Link>
            </li>
          ))}
        </ul>
    );
}