import Footer from "@/components/Footer";
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
                <div className="mt-12">
                    {children}
                </div>
                <div className="min-h-60 w-full">
                    <Footer />
                </div>
            </body>
        </html>
    );
}
