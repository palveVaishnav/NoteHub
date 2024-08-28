import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <div className="w-full bg-gradient-to-br from-[#0f1629dd] to-[#0f1629]">
            <footer className="text-white">
                <div className="mx-auto w-full p-8 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">

                        <div className="mb-6 md:mb-0 w-7/12">
                            <a href="/home" className="flex items-center">
                                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" /> */}
                                <span className="self-center text-2xl font-semibold whitespace-nowrap">NoteHub</span>
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 w-5/12">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase">Users</h2>
                                <ul className="font-medium">
                                    <li>
                                        <a href="/dashboard" className="hover:underline text-slate-500">Dashboard</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="/profile" className="hover:underline text-slate-500">Profile</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase">Follow us</h2>
                                <ul className="font-medium">
                                    <li>
                                        <a href="https://github.com/palvevaishnav" className="hover:underline text-slate-500 ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/vaishnavpalve/" className="hover:underline text-slate-500">LinkedIn</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="https://x.com/palve_vaishnav" className="hover:underline text-slate-500">Twitter/X</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase">Pages</h2>
                                <ul className="font-medium">
                                    <li>
                                        <a href="#" className="hover:underline text-slate-500">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline text-slate-500">Contact Us</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline text-slate-500">Trendings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm  sm:text-center">© 2024 <a href="/home" className="hover:underline">NoteHub™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0 gap-4">
                            <a href="#" className=" ">
                                <DiscordLogoIcon />
                            </a>
                            <a href="#" className=" ">
                                <TwitterLogoIcon />
                            </a>
                            <a href="#" className=" ">
                                <GitHubLogoIcon />
                            </a>
                            <a className="">
                                <InstagramLogoIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}