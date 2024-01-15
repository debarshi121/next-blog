import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "Next Blog",
	description: "A blog app created using Next Js",
};

export default function RootLayout({children}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider>
					<div className="h-screen bg-white dark:bg-gray-900">
						<div className="container mx-auto px-5">
							<Navbar />
							{children}
							<Footer />
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
