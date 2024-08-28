import { Button } from "@/components/ui/button";
import { PaperPlaneIcon, Share1Icon } from "@radix-ui/react-icons";
import Image from "next/image";

function MainSection() {
    return (
        <div
            className="grid md:place-content-center z-6 md:px-[10em]  p-2 text-white mt-20"
        >
            <div className="flex flex-col md:flex-row">
                <div className="">
                    <div className="p-2 font-mono mr-10 md:mr-20">
                        <div className="text-sm text-orange-400 flex gap-2 items-center">
                            <PaperPlaneIcon className="-rotate-45" />
                            Choose whats best for you,
                        </div>
                        <div className="text-[2em] md:text-[3em] ">
                            Welcome to NoteHub
                        </div>
                        <div className="md:text-[1.4em]">
                            Your Ultimate Hub for Sharing Knowledge and Resources.
                        </div>
                        <div className="text-[#ffffff85] mt-4 ">
                            At NoteHub, we believe that learning is a collaborative journey.
                            Whether youre a student striving for excellence or a passionate educator, our platform empowers you to share, discover,
                            and grow through a vibrant community of note-sharing enthusiasts.
                        </div>
                        <div>
                            <Button
                                variant={'outline'}
                                className="rounded-full text-black mt-10 bg-orange-400 font-bold font-mono"
                            >
                                join Now
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid place-content-center">
                    <div className="grid mt-5 md:flex">
                        <div className="-rotate-12 w-[14em] md:w-[16em]">
                            <div className="p-2 md:p-4 rounded-xl shadow-xl border bg-gradient-to-br from-[#eee] to-[#644161] text-black 
                                                transform transition ease-in-out duration-100 hover:z-10
                                                hover:shadow-xl
                                                "
                            >
                                <div className="text-xl flex items-center">
                                    <Share1Icon />
                                    <p>Share Your Expertise</p>
                                </div>
                                <div>
                                    <img src={'./1.png'} />
                                </div>
                                <div>
                                    Have notes that could help others? Upload them to NoteHub and contribute to the community.
                                </div>
                            </div>
                        </div>
                        <div className="rotate-[10deg] mt-8 w-[14em] md:w-[16em]">
                            <div className="p-2 md:p-4 rounded-xl shadow-lg 
                                                bg-gradient-to-br from-[#2d2c2c] to-[#644161]
                                                transform transition ease-in-out duration-100 hover:z-10
                                                "
                            >
                                <p className="text-xl">
                                    Personalize Your Learning
                                </p>
                                <img src={'./2.png'} />
                                <div>
                                    Save your favorite notes, organize them into folders, and build your own library of knowledge
                                </div>
                            </div>

                        </div>
                        <div className="-rotate-[6deg] w-[14em] md:w-[16em]">
                            <div className="p-2 md:p-4 rounded-xl shadow-lg mt-10 bg-gradient-to-br from-[#2d2c2c] to-[#644161]
                                                transform transition ease-in-out duration-100 hover:z-10
                                                "
                            >
                                <p className="text-xl">
                                    Discover Quality Notes
                                </p>
                                <img src={'./4.png'} />
                                <div>
                                    Access a treasure trove of notes on a variety of subjects, meticulously curated by your peers
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default function HeroSection() {
    return (
        <div className="h-[90vh] w-full -flex flex-row">
            {/* Dark Background */}
            <div
                className="absolute top-0 
                            grid items-center w-full md:w-3/5 
                            border p-20 rounded-br-[4em] 
                            text-white
                            bg-gradient-to-br from-slate-700 to-slate-950
                            h-[90vh] -z-10"
            >
            </div>
            {/* The outline on Home Page */}
            <div
                className="bg-red-0 absolute top-0 w-full  md:w-3/5 md:ml-10 mt-12 
                            rounded-br-[4em] rounded-tr-xl rounded-bl-xl
                            h-[90vh] overflow-hidden -z-10 shadow-xl 
                            "
            >
            </div>
            {/* Displayed text */}
            <div>
                <MainSection />
            </div>
        </div>
    )
}


/**
 * 
 */