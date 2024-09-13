// Landing Page
import CustomBento from "@/components/Custombento";
import FeatureIntro from "@/components/FeatureIntro";
import Abouthome from "@/components/HomeAbout";
import Navigation from "@/components/Navigation";
import Reviews from "@/components/Reviews";
import NewHeroSection from "./NewHeroSection";

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
                    <CustomBento />
                </div>
                {/* <div className="grid place-content-center">
                    <FeatureIntro />
                </div> */}
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