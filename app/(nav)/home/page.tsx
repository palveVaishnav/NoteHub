import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export default function Home() {
    return (
        <div className="h-[90vh] w-full -flex flex-row hidden">
            {/* Dark Background */}
            <div
                className="absolute top-0 
                            grid items-center w-3/5 
                            border p-20 rounded-br-[4em] 
                            bg-[#333] text-white
                              h-[90vh] -z-10"
            >
            </div>
            {/* The outline on Home Page */}
            <div
                className="absolute w-3/5 ml-12 mt-12 rounded-br-[4em] h-[90vh] overflow-hidden -z-10 shadow-xl rounded-tr-xl rounded-bl-xl"
            >
            </div>
            {/* Displayed text */}
            <div
                className="grid h-full place-content-center Gborder z-6 md:pl-[10em] md:pr-[16em] text-white hidden"
            >
                <div className="flex flex-col md:flex-row">
                    <div className="">
                        <div className="p-2 font-mono mr-20">

                            <div className="text-sm text-orange-400 flex gap-2 items-center">
                                <PaperPlaneIcon className="-rotate-45" />
                                Best, Latest,
                            </div>
                            <div className="text-[3em]">
                                Share,Organise, Optimize
                            </div>
                            <div className="text-[1.4em]">
                                Using Notehub
                            </div>
                            <div className="text-[#ffffff85] mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae consectetur, sequi itaque quia eos at qui incidunt cum minus voluptates, blanditiis, numquam sit velit nemo! Minima iure ex velit?
                            </div>
                            <div>
                                <Button
                                    variant={'outline'}
                                    className="rounded-full text-black mt-10"
                                >
                                    join Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="grid place-content-center">
                        <div className="flex">
                            <div className="-rotate-12 w-[16em]">
                                <div className="p-4 rounded-xl shadow-xl border  bg-[#eee] text-black 
                                                hover:scale-105 transform transition ease-in-out duration-100 hover:z-10
                                                "
                                >
                                    <p className="text-xl">
                                        Create Structured Folders
                                    </p>
                                    <img src={'./1.png'} />
                                    <div>
                                        Save Your Notes. The Way you Want !!
                                    </div>
                                </div>
                            </div>
                            <div className="rotate-[10deg] w-[16em] mt-16">
                                <div className="p-4 rounded-xl shadow-lg bg-[#333] border
                                                hover:scale-105 transform transition ease-in-out duration-100 hover:z-10
                                                "
                                >
                                    <p className="text-xl">
                                        Share Files and folders
                                    </p>
                                    <img src={'./2.png'} />
                                    <div>
                                        Share Your Notes. The Way you Want !!
                                    </div>
                                </div>

                            </div>
                            <div className="-rotate-[6deg] w-[16em]">
                                <div className="p-4 rounded-xl shadow-lg bg-[#333] border mt-10
                                                hover:scale-105 transform transition ease-in-out duration-100 hover:z-10
                                                "
                                >
                                    <p className="text-xl">
                                        Download Notes
                                    </p>
                                    <img src={'./4.png'} />
                                    <div>
                                        Download the highest rated notes
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


/**
 * 
 */