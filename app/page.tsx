// Landing Page
import CustomBento from "@/components/Custombento";
import FeatureIntro from "@/components/FeatureIntro";
import Abouthome from "@/components/HomeAbout";
import Navigation from "@/components/Navigation";
import Reviews from "@/components/Reviews";
import NewHeroSection from "./NewHeroSection";
import { MixIcon } from "@radix-ui/react-icons";

export default function Home() {
    return (
        <div>

            <div className="fixed top-0 w-full min-h-12 z-10 ">
                <Navigation />
            </div>
            <div>
                <NewHeroSection />
            </div>

            <div className="mt-[140vh] md:mt-0 grid place-content-center bg-[#dee9ee] px-60">
                <div className="p-10">
                    <div className="grid p-4 mt-5">
                        <div className="flex items-center gap-2 text-2xl md:text-3xl">
                            <MixIcon />
                            <p className="font-bold">Explore Features</p>
                        </div>
                        <div className="text-xl font-mono">
                            This are the Basic features that notehub allows out of the box,
                        </div>
                    </div>
                    <CustomBento />
                </div>
            </div>
            <div className="bg-[#f3f7f9] min-h-screen ">
                <Abouthome />
            </div>
            <div className="bg-[#dee9ee]">
                <Reviews />
            </div>

        </div>
    )
}