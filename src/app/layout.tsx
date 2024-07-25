import Header from "@/components/shared/header";
import { Container } from "@/styled-system/jsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "dbots.fun | Discord botlist",
	description: "Find bots that match your interests",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<Container py={5}>{children}</Container>
			</body>
		</html>
	);
}
