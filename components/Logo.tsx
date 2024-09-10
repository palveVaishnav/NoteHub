import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Logo() {
    const router = useRouter();
    return (
        <div className="font-mono font-bold text-xl md:text-2xl rounded-md overflow-hidden p-1 px-2 text-orange-300 max-h-16 max-w-16 cursor-pointer"
            onClick={() => router.push("/")}
        >
            <Image src="/logo.png" alt="Logo" width={64} height={64} />
        </div>
    );
}
