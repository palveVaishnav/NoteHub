import CustomBento from "@/components/Custombento";
import FeatureIntro from "@/components/FeatureIntro";
import HeroSection from "@/components/HeroSection";
import Abouthome from "@/components/HomeAbout";
import Navigation from "@/components/Navigation";
import Reviews from "@/components/Reviews";

export default function Home() {
    return (
        <div>

            <div className="fixed top-0 w-full min-h-12 z-10 ">
                <Navigation />
            </div>
            <div>
                <HeroSection />
            </div>

            <div className="mt-[140vh] md:mt-0 flex flex-col-reverse md:grid md:place-content-center md:grid-cols-2 md:py-24">
                <div className="p-10">
                    <CustomBento />
                </div>
                <div className="grid place-content-center">
                    <FeatureIntro />
                </div>
            </div>
            <div className="min-h-[50vh]">
                <Abouthome />
            </div>
            <div>
                <Reviews />
            </div>

        </div>
    )
}