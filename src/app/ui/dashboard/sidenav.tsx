import Image from "next/image";
import Link from "next/link";

export default function SideNav(){
    return(
        <div className="flex h-full flex-col px-3 py-4">
            <div className= "flex h-52 items-center rounded-lg bg-blue-500 p-4">
                <Link href="/" className="mb-2 flex h-20 items-center justify-center rounded-md">
                <Image
                    src="/logo.png"
                    width={250}
                    height={100}
                    className=""
                    alt=""
                />
                </Link>
            </div>
        </div>
    );
}