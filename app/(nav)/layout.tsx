import LeftPanel from "@/components/LeftPanel";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>
                <div className="flex max-w-screen relative min-h-screen">
                    <div className="w-1/6 top-0 left-0 sticky max-h-screen bg-[--first] text-[--fourth]  flex flex-col justify-between p-2">
                        <LeftPanel />
                    </div>
                    <div className="ml-auto w-5/6 p-4 bg-[#f3f7f9]">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}




