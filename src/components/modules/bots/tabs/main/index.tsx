"use client";

import { tab, tabGroup, tabList } from "@/components/ui/styles/tab";
import type { SingleBotQuery } from "@/lib/graphql/apollo";
import { Divider } from "@/styled-system/jsx";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import {
	ChatBubbleBottomCenterIcon,
	Cog6ToothIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BotTabManage from "./manage";
import BotTabOverview from "./overview";
import BotTabReviews from "./reviews";

type BotTabsMainProps = Pick<SingleBotQuery["getBot"], "description" | "id"> & {
	userCanManage?: boolean;
};

const tabs = ["overview", "reviews", "manage"];

export default function BotTabsMain({
	description,
	id,
	userCanManage,
}: BotTabsMainProps) {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState(
		useSearchParams().get("activeTab") ?? tabs[0],
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: just stfu pls
	useEffect(() => {
		router.replace(`/bot/${id}?activeTab=${activeTab}`);
	}, [activeTab]);

	return (
		<TabGroup
			selectedIndex={tabs.indexOf(activeTab)}
			onChange={(i) => setActiveTab(tabs[i])}
			className={tabGroup}
		>
			<TabList className={tabList}>
				<Tab className={tab}>
					<InformationCircleIcon />
					Overview
				</Tab>
				<Tab className={tab}>
					<ChatBubbleBottomCenterIcon />
					Reviews
				</Tab>
				{userCanManage && (
					<Tab className={tab}>
						<Cog6ToothIcon />
						Manage
					</Tab>
				)}
			</TabList>
			<Divider my={3} borderColor={"background.700"} />
			<TabPanels>
				<BotTabOverview description={description} />
				<BotTabReviews />
				{userCanManage && <BotTabManage id={id} />}
			</TabPanels>
		</TabGroup>
	);
}
