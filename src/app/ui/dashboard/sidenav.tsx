"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/dashboard', icon: "/home.svg"},
    { name: 'Schedule', href: '/dashboard/schedule', icon: "/activity.svg"},
    { name: 'Analytics', href: '/dashboard/analytics', icon: "/analytics.svg"},

  ];
  

export default function SideNav(){
    const pathname = usePathname();
    return(
        <div className="flex h-full flex-col px-3 py-4">
            <div className= "flex h-52 items-center rounded-lg bg-blue-500 p-4">
                <Link href="/" className="flex h-20 items-center justify-center rounded-md">
                <Image
                    src="/logo.png"
                    width={250}
                    height={100}
                    className=""
                    alt=""
                />
                </Link>
            </div>
            <div className="h-auto w-full grow rounded-md bg-gray-50 mt-4">
                {links.map((link) => {
                    return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx (
                        'flex text-xl grow items-center justify-start bord rounded-t-md bg-gray-50 p-3 border-solid border-2 border-b-black hover:bg-sky-100 hover:text-blue-600',
                        {
                            'bg-sky-100 text-blue-600' : pathname == link.href,
                        },
                        )}
                    >
                        <Image
                            src={link.icon}
                            width={50}
                            height={0}
                            className=""
                            alt=""
                        />
                        <p className="ml-5">{link.name}</p>
                    </Link>
                    );
                })}
            </div>    
        </div>
    );
}