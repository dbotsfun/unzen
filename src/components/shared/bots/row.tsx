import { Grid, GridItem } from "@/styled-system/jsx";
import BotCard from "./card";

export interface BotsRowProps {
	/** Max bots per col */
	maxBots?: number;
}

export default function BotsRow({ maxBots = 4 }: BotsRowProps) {
	return (
		<Grid gridTemplateColumns={maxBots} w="full">
			{[...Array(10)].slice(0, maxBots).map((_, key) => (
				<GridItem w="full" key={key}>
					<BotCard />
				</GridItem>
			))}
		</Grid>
	);
}
