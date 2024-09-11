import { Skeleton } from '@/components/ui/skeleton';
import { FileGrid } from '../../components/FileGrid';
export default function Loading() {
    return (
        <div className='h-screen w-screen p-40'>
            <Skeleton className=' bg-gray-400 w-full h-full' />
        </div>
    )
}