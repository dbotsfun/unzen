import HomeBots from "@/components/modules/home/bots";
import HomeSearch from "@/components/modules/home/search";
import {
	Alert,
	AlertContent,
	AlertIcon,
	AlertTitle,
} from "@/components/ui/alert";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { apolloClient } from "@/lib/constants/apollo/client-rsc";
import { HomeBotsDocument, type HomeBotsQuery } from "@/lib/graphql/apollo";
import { Flex } from "@/styled-system/jsx";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

export default async function Page() {
	const { data, error } = await apolloClient.query<HomeBotsQuery>({
		query: HomeBotsDocument,
	});

	if (error) {
		throw new Error(error.message);
	}

	return (
		<React.Fragment>
			<Flex flexDir={"column"} gap={3}>
				<Alert>
					<AlertIcon>
						<ExclamationCircleIcon />
					</AlertIcon>
					<AlertContent>
						<AlertTitle>Incoming API rewrite (in rust btw)</AlertTitle>
						<AlertContent>
							So Chiko is rewriting the API in Rust so it goes fast and simple!
							(We also switching to REST since GQL sucks)
						</AlertContent>
						<AlertContent>(no, you can't discard this alert)</AlertContent>
					</AlertContent>
				</Alert>
				<Heading size="4xl">Search for bots</Heading>
				<Text>
					A new way to discover new Discord bots, dbots.fun is the brand-new
					Discord botlist!
				</Text>
				<HomeSearch />
			</Flex>
			<HomeBots
				mostBigBots={data.mostBig}
				mostRecentBots={data.mostRecent}
				mostVotedBots={data.mostVoted}
			/>
		</React.Fragment>
	);
}
