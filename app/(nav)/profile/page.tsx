"use client"
import { BookmarkCheck, BookmarkPlus, FilesIcon, PlusSquareIcon, Users2 } from "lucide-react";
export default function Profile() {
    return (
        <div className="w-full grid">
            <ProfileData />
            <AddSection />
            {/* < */}
        </div>
    )
}


function AddSection() {
    return (
        <section className="flex ml-8 text-white gap-4">
            <a href={'/upload'} className="grid border w-fit  MainGrad p-2 rounded-xl cursor-pointer">
                <div className="w-full flex justify-center">
                    <PlusSquareIcon />
                </div>
                {'Add File'}
            </a>
            <a href={'/saved'} className="grid border w-fit MainGrad  p-2 rounded-xl cursor-pointer">
                <div className="w-full flex justify-center">
                    <BookmarkPlus />
                </div>
                {'Add Hub'}
            </a>
        </section>
    )
}

function ProfileData() {
    return (
        <div className="flex m-8 border rounded-md md:rounded-lg shadow-sm p-4 gap-4">
            <div className="grid w-fit">
                <img
                    src="https://avatar.iran.liara.run/public/30"
                    className="w-44 h-44"
                />
            </div>
            <div className="p-2 pl-8">
                <div className="gap-2 p-4 w-fit">
                    <div className="flex items-center gap-8">
                        <div className="font-semibold md:text-xl">
                            {'Name '}
                        </div>
                    </div>
                    <div>
                        <div className="font-light">
                            {"@" + 'userid'}
                        </div>
                    </div>
                    <div className="flex space-x-8 justify-evenly m-2">
                        <div className="flex px-4">
                            <FilesIcon />
                            {'12'}
                        </div>
                        <div className="flex px-4">
                            <BookmarkCheck />
                            {'13'}
                        </div>
                        <div className="flex px-4">
                            <Users2 />
                            {'17'}
                        </div>
                    </div>
                    <div className="mt-2 w-full">
                        <div className="font-normal md:w-2/5">
                            {"Bio Here h ofhsf foff fsh if fisfs"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
