import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {ThemeContextProvider} from "@/context/ThemeContext";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "Next Blog",
	description: "A blog app created using Next Js",
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeContextProvider>
					<div className="h-screen bg-white">
						<div className="container mx-auto">
							<Navbar />
							{children}
							<Footer />
						</div>
					</div>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
