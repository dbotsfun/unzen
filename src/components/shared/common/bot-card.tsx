import { Heading } from "@/components/ui/text/heading";
import { Text } from "@/components/ui/text/text";
import { css } from "@styled-system/css";
import { Box, HStack, Stack } from "@styled-system/jsx";
import { IconAntennaBars5, IconChevronUp } from "@tabler/icons-react";
import Image from "next/image";

interface BotCardProps {
	name: string;
}

export default function BotCard({ name }: BotCardProps) {
	return (
		<Box
			userSelect={"none"}
			cursor="pointer"
			rounded="xl"
			bg={{ base: "slate.900", _hover: "slate.800" }}
			pos="relative"
		>
			<Box
				w="full"
				opacity={0.5}
				h={24}
				pos="absolute"
				css={{ backgroundImage: "url('/mocks/iruncode.png')" }}
				bgSize={"cover"}
				rounded="xl"
				className="mask"
			/>
			<Stack pos="relative" p={3} zIndex={10}>
				<HStack>
					<Image
						src="/mocks/iruncode.png"
						className={css({ rounded: "lg" })}
						width={70}
						height={70}
						alt="I Run Code discord bot"
					/>
					<Heading>{name}</Heading>
				</HStack>
				<Text minH="24" h="full">
					Run any code in any language
					ldcsgsbghdfbvsdbhfbhdsbhdshbdshdhdbhdshdsdsbdsbdsbh
				</Text>
				<HStack justifyContent={"space-between"}>
					<HStack>
						<IconAntennaBars5 size={20} />
						<Text>5,4M</Text>
					</HStack>
					<HStack>
						<IconChevronUp size={20} />
						<Text>1,4k</Text>
					</HStack>
				</HStack>
			</Stack>
		</Box>
	);
}
