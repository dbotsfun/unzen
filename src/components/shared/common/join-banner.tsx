import { Button } from "@/components/ui/form/button";
import DiscordIcon from "@/components/ui/icons/discord";
import GitHubIcon from "@/components/ui/icons/github";
import { Heading } from "@/components/ui/text/heading";
import { Text } from "@/components/ui/text/text";
import { Box, Container, HStack, VStack } from "@styled-system/jsx";
import Image from "next/image";

export default function JoinBanner() {
	return (
		<Box
			css={{ backgroundImage: "url('/assets/bg.png')" }}
			bgRepeat={"no-repeat"}
			bgSize={"cover"}
			bgPosition={"bottom"}
			bg="gray.900"
			w="full"
			px={5}
		>
			<Container>
				<HStack w="full" justifyContent={"space-between"}>
					<Image
						src="/assets/left.png"
						alt="banner left"
						width={500}
						height={500}
					/>
					<VStack w="full" textAlign={"center"} gap={3} py={20}>
						<Heading size="4xl">Join Our Community</Heading>
						<Text>
							Connect with bot developers and server owners to share ideas and
							get support
						</Text>
						<HStack>
							<Button>
								<DiscordIcon width={20} height={20} />
								Join our Discord
							</Button>
							<Button variant="link">
								<GitHubIcon width={20} height={20} /> GitHub
							</Button>
						</HStack>
					</VStack>
					<Image
						src="/assets/right.png"
						alt="banner right"
						width={500}
						height={500}
					/>
				</HStack>
			</Container>
		</Box>
	);
}
