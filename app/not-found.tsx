// app/not-found.tsx

import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-tr to-[#0ccef5] from-[#15218b]">
            <Image
                src="./sorry-arnab.gif" // Ensure this path is correct, typically inside the public folder
                alt="Not Found GIF"
                width={1000}
                height={1000}
                unoptimized // Disable optimization for animated GIFs
                className='rounded-3xl backdrop-blur-md'
            />
            <p className='text-xl p-2 px-4 font-mono'>
                Working on the page
            </p>
            <a href="/profile" className="">
                {'Go to --  '}
                <span className='border p-2 px-4 rounded-md border-black hover:text-white hover:bg-black mt-6'>
                    profile
                </span>
            </a>
        </div>
    );
}
