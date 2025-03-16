import BotCard from "@/components/shared/common/bot-card";
import Bots from "@/components/shared/common/bots";
import JoinBanner from "@/components/shared/common/join-banner";
import { Badge } from "@/components/ui/deco/badge";
import { Button } from "@/components/ui/form/button";
import { Input } from "@/components/ui/form/input";
import { Heading } from "@/components/ui/text/heading";
import { Text } from "@/components/ui/text/text";
import {
	Container,
	Flex,
	Grid,
	GridItem,
	HStack,
	Stack,
} from "@styled-system/jsx";
import { IconHash, IconSearch } from "@tabler/icons-react";
import { ChevronRightIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Page() {
	return (
		<Stack gap={10}>
			<Container w="full">
				<Flex justifyContent={"space-between"} w="full">
					<Stack maxW="lg">
						<Badge>dbots.fun is already live!</Badge>
						<Heading size="3xl">Find the perfect Discord bots</Heading>
						<Text>
							Explore our curated collection of powerful Discord bots to enhance
							your server experience. From moderation to music, we've got you
							covered.
						</Text>
						<HStack>
							<Input placeholder="Search bots" minW="sm" />
							<Button variant="secondary">
								Search
								<ChevronRightIcon size={16} />
							</Button>
						</HStack>
						<HStack>
							<Text>Popular tags:</Text>
							<Badge variant="secondary">
								<IconHash size={16} /> Moderation
							</Badge>
							<Badge variant="secondary">
								<IconHash size={16} /> Music
							</Badge>
						</HStack>
					</Stack>
					<Image
						src="/assets/hero.png"
						alt="hero image"
						quality={100}
						width={600}
						height={400}
					/>
				</Flex>
			</Container>
			<Bots title="Most popular bots">
				<Grid columns={4}>
					<GridItem>
						<BotCard name="I Run Code" />
					</GridItem>
					<GridItem>
						<BotCard name="I Run Code" />
					</GridItem>
					<GridItem>
						<BotCard name="I Run Code" />
					</GridItem>
					<GridItem>
						<BotCard name="I Run Code" />
					</GridItem>
					<GridItem>
						<BotCard name="I Run Code" />
					</GridItem>
					<GridItem>
						<BotCard name="I Run Code" />
					</GridItem>
				</Grid>
			</Bots>
			<JoinBanner />
		</Stack>
	);
}
