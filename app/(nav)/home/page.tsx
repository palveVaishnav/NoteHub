import CustomBento from "@/components/Custombento";
import FeatureIntro from "@/components/FeatureIntro";
import HeroSection from "@/components/HeroSection";
import { MixIcon } from "@radix-ui/react-icons";

export default function Home() {
    return (
        <div className="">
            <div>
                <HeroSection />
            </div>
            <div className="mt-[140vh] md:mt-0 grid md:grid-cols-2 place-content-center">
                <div className="p-10">
                    <div className="p-4 flex items-center gap-2 text-2xl md:text-3xl">
                        <MixIcon />
                        <p className="font-bold">Explore Features</p>
                    </div>
                    <CustomBento />
                </div>
                <div className="grid place-content-center border">
                    <FeatureIntro />
                </div>
            </div>
        </div>
    )
}