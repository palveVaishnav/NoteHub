import { CornersSVG } from "@/components/corners";
import { Separator } from "@/components/ui/separator";
import { CurvedLines } from "@/components/CurvedLines";
import { File, FileHeart } from "lucide-react";

export default function NewHeroSection() {
    return (
        <div className="relative overflow-hidden min-h-screen">
            <CornersSVG />
            {/* <Wave /> */}
            <div className="px-10">
                {/* <NavigationBar /> */}
                <HeroText />
                <HeroCards />
            </div>
        </div>
    );
}

function HeroCards() {
    return (
        <div className="flex justify-center items-start gap-4">

            <div className=" p-4 rounded-3xl grid gap-2 bg-white shadow-xl shadow-[--fourth] h-auto max-w-60 hover:shadow-none hover:scale-105">
                <span className="bg-[--fourth] w-fit h-fit rounded-3xl px-2">Best</span>
                <div className="p-2 relative h-40">
                    <div>
                        <div className="flex items-center text-3xl font-bold">
                            <File />
                            {'400+'}
                        </div>
                    </div>
                    <span>Collections to </span>
                    <span>Select From</span>
                    <div className="absolute bottom-0 right-2">
                        <CurvedLines />
                    </div>
                </div>
            </div>

            <div className=" p-4 rounded-3xl grid gap-2 bg-white shadow-xl shadow-[--fourth] h-auto hover:shadow-none hover:scale-105">
                <span className="bg-[--fourth] w-fit h-fit rounded-3xl px-2">Easy</span>
                <div className="p-2">
                    <div className="flex items-center text-3xl font-bold">
                        {'Share with Friends'}
                    </div>
                    <div>
                        <Socials />
                    </div>
                    <div className="">
                        {'Help Your Friends wiht no efforts'}
                    </div>
                </div>
            </div>

            <div className=" p-4 rounded-3xl grid gap-2 bg-white shadow-xl shadow-[--fourth] h-auto max-w-60 hover:shadow-none hover:scale-105">
                <span className="bg-[--fourth] w-fit h-fit rounded-3xl px-2">Organised</span>
                <div className="relative">
                    <div className="">
                        <CollectionCard />
                    </div>
                </div>
                <div className="mt-40">
                    <div className="flex items-center">
                        <span>Pick Whats Best and create your own Collection. </span>
                    </div>
                </div>
            </div>

        </div >
    )
}

function CollectionCard() {
    return (
        <div className="relative w-full">
            <div className="rounded-2xl absolute top-10 right-10 collectionCard grid place-content-center"></div>
            <div className="rounded-2xl absolute top-5 right-5 collectionCard grid place-content-center"></div>
            <div className="rounded-2xl absolute top-1 right-0 collectionCard grid place-content-center"></div>
        </div>
    )
}

function Socials() {
    return (
        <div className="min-h-40">
            <div className="socialIconsContainer">
                <svg className="socialIcons top-4 left-5" width={40} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
                <svg className="socialIcons top-10 right-5" width={40} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
                <svg className="socialIcons top-1 left-15" width={40} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            </div>
            <div className="socialIconsContainer">
                <svg className="socialIcons top-20 right-14" width={40} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube Kids</title><path d="m23.99 13.543-.007-.288c-.015-1.122-.645-6.495-.999-7.457-.41-1.111-.974-1.945-1.675-2.48-1.143-.873-2.115-1.063-3.313-1.087h-.03c-.51 0-3.848.415-6.642.801-2.797.387-6.303.915-7.14 1.227-1.153.432-2.07.997-2.796 1.728C.05 7.332-.113 8.731.054 10.553c.13 1.412.875 6.975 1.302 8.248.574 1.717 1.694 2.75 3.154 2.909.36.039.704.059 1.045.059 1.28 0 2.295-.278 3.47-.598 1.848-.505 4.147-1.13 8.893-1.13h.14c1.162 0 4.008-.263 5.303-2.687.693-1.297.652-2.87.629-3.811zm-7.719-1.67-.105.066c-.274.185-.547.373-.819.563l-4.298 2.975c-.27.21-.748.521-1.016.521a.236.236 0 0 1-.107-.024c-.226-.12-.303-.94-.356-1.34l-.011-.087c-.065-.478-.594-5.035-.654-5.535-.017-.142-.105-.663.055-.781.05-.037.12-.05.2-.05.195 0 .442.083.549.118.845.272 5.083 1.774 6.4 2.448.038.02.079.04.122.057.188.08.446.192.452.51.004.304-.225.446-.412.56z" /></svg>
                <svg className="socialIcons top-16 left-20" width={40} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
            </div>
            <div className="socialIconsContainer">
                <svg className="socialIcons top-24 left-10" width={40} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
            </div>
        </div>
    )
}

function HeroText() {
    return (
        <div className="grid place-content-center py-10 gap-2">
            <div className="text-[4em] font-bold font-sans p-10">
                <span>Discover.</span>
                <span> Share.</span>
                <span> Manage</span>
            </div>
            <div className="flex justify-center text-xl font-light font-mono">
                <span>All your study material at One Place</span>
            </div>
            <div className="flex justify-center gap-2 items-center">
                {/* Circle */}
                <div className="circle bg-[#dee9ee] p-0.5 h-fit text-sm">
                    <div className="circle bg-gray-100 p-0.5 h-fit text-sm">
                    </div>
                </div>
                <div className="flex items-center w-10">
                    <Separator />
                </div>

                <div className="circle bg-[#dee9ee] p-1.5 h-fit text-sm">
                    <div className="circle bg-gray-100 p-0.5 h-fit text-sm">
                    </div>
                </div>
                <div className="flex items-center w-10">
                    <Separator />
                </div>
                {/* Center Circle  */}
                <div className="circle bg-gray-100 p-2 h-fit text-sm shadow-lg shadow-gray-300">
                    <FileHeart />
                </div>
                <div className="flex items-center w-10">
                    <Separator />
                </div>
                <div className="circle bg-[#dee9ee] p-1.5 h-fit text-sm">
                    <div className="circle bg-gray-100 p-0.5 h-fit text-sm">
                    </div>
                </div>
                <div className="flex items-center w-10">
                    <Separator />
                </div>
                <div className="circle bg-[#dee9ee] p-0.5 h-fit text-sm">
                    <div className="circle bg-gray-100 p-0.5 h-fit text-sm">
                    </div>
                </div>
            </div>
        </div>
    )
}


function NavigationBar() {
    return (

        <div className="flex border-b border-gray-300 justify-between mx-28 p-2">
            <div className="flex items-center">
                <img src="./logo.png" className="w-10" />
                <span
                    className="font-semibold text-xl"
                >NoteHub</span>
            </div>
            <div className="flex items-center">
                <a href="/home"
                    className="px-2 py-4"
                >Home</a>
                <a href="/dashboard"
                    className="px-2 py-4"
                >Dashbaord</a>
                <a href="/about"
                    className="px-2 py-4"
                >About</a>
                <a href="/contact"
                    className="px-2 py-4"
                >Contact</a>
            </div>
            <div className="flex items-center">
                <button className="border h-fit flex items-center p-1 px-4 rounded-2xl font-semibold shadow-lg shadow-slate-200">
                    Sign in
                </button>
            </div>
        </div>

    )
}

