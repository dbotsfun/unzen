import BotsSection from "@/components/shared/bots/section";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/styled-system/jsx";
import { ClockIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Page() {
	return (
		<VStack alignItems={"start"} gap={10}>
			<VStack alignItems={"start"} w="full">
				<Badge color="primary">
					Coming soon <ClockIcon />
				</Badge>
				<Heading size="5xl">dbots.fun</Heading>
				<Text>
					All data is mocked for now!!!!!!!!!!!!All data is mocked for
					now!!!!!!!!!!!!
				</Text>
				<Input placeholder="Search bots" />
			</VStack>
			<BotsSection rowProps={{ maxBots: 4 }} title="Test" />
		</VStack>
	);
}
