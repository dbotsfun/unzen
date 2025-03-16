import { Button } from "@/components/ui/form/button";
import DiscordIcon from "@/components/ui/icons/discord";
import { Box, Container, HStack } from "@styled-system/jsx";
import Image from "next/image";
import { Heading } from "../../ui/text/heading";

export default function Header() {
	return (
		<Box
			py={4}
			top={0}
			mb={10}
			pos={"sticky"}
			bg="slate.900/50"
			backdropFilter={"auto"}
			backdropBlur={"lg"}
			zIndex={100}
			w="full"
		>
			<Container w={"full"}>
				<HStack justifyContent={"space-between"}>
					<HStack>
						<Image
							src="/assets/logo.png"
							alt="dbots.fun logo"
							width={40}
							height={40}
						/>
						<Heading>dbots</Heading>
					</HStack>
					<HStack>
						<Button>
							<DiscordIcon width={20} height={20} /> Login with Discord
						</Button>
					</HStack>
				</HStack>
			</Container>
		</Box>
	);
}
