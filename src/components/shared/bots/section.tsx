import { Heading } from "@/components/ui/heading";
import { VStack } from "@/styled-system/jsx";
import BotsRow, { type BotsRowProps } from "./row";

interface BotsSectionProps {
	title: string;
	rowProps?: BotsRowProps;
}

export default function BotsSection({ title, rowProps }: BotsSectionProps) {
	return (
		<VStack alignItems={"start"}>
			<Heading size="3xl">{title}</Heading>
			<BotsRow {...rowProps} />
		</VStack>
	);
}
