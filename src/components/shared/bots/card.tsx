import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { StyledBox } from "@/components/ui/styles/box";
import { Text } from "@/components/ui/text";
import { HStack, VStack } from "@/styled-system/jsx";
import { ChartBarIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function BotCard() {
	return (
		<StyledBox
			_hover={{ bg: "bg.700" }}
			cursor="pointer"
			transitionDuration={"fast"}
			w="full"
			maxW="full"
			minH="250px"
			h="full"
		>
			<VStack justifyContent={"space-between"} h="full">
				<VStack alignItems={"start"}>
					<HStack>
						<Avatar
							src="https://cdn.discordapp.com/avatars/1076700780175831100/143b2c5506c53b40978b485954e4612c"
							alt="xd"
						/>
						<VStack gap={0} alignItems={"start"}>
							<Heading>Bot Name</Heading>
							<Text>tags tags tags</Text>
						</VStack>
					</HStack>
					<Text>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum
						dolor, sit amet consectetur adipisicing elit.
					</Text>
				</VStack>

				<HStack w="full" justifyContent={"space-between"}>
					<Badge color="gray">
						123
						<ChevronUpIcon />
					</Badge>
					<Badge color="gray">
						123
						<ChartBarIcon />
					</Badge>
				</HStack>
			</VStack>
		</StyledBox>
	);
}
