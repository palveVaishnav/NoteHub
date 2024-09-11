'use Client'
import { CloudUpload, File, FileUp } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function FileUpload() {
    return (
        <section className="w-full flex justify-center">
            <div className="min-h-[60vh] border border-dashed border-black grid place-content-center mx-32 my-10 rounded-3xl relative w-fit p-20 shadow-2xl">
                <div className="w-full flex justify-center">
                    <div
                        className="max-w-fit relative p-2 "
                    >
                        <File size={64} className="" />
                        <div className="absolute bottom-0 right-0 text-blue-300 p-1 bg-black rounded-full">
                            <CloudUpload size={32} />
                        </div>

                    </div>
                </div>

                <div className="font-semibold grid place-content-center p-2 mt-4">
                    {'Drag & Drop File'}
                </div>
                <div className="font-semibold grid place-content-center p-2">
                    <Input type="file" className="w-fit" />
                </div>

                <div className="absolute bottom-2 w-full flex justify-center gap-4 p-2">
                    <Button
                        variant={'outline'}
                        className="px-12 border-black"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="px-12"
                    >
                        Upload
                    </Button>
                </div>

            </div>
        </section>
    )
}