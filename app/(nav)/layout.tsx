import Navigation from "@/components/Navigation";

export default function NavLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {/* Same Navigation bar on all pages */}
                <div className="absolute top-0 w-full min-h-12 z-10">
                    <Navigation />
                </div>
                <div>
                    {children}
                </div>
                {/* For Footer on every page */}
                <div>

                </div>
            </body>
        </html>
    );
}
