import { Badge } from "@/components/ui/deco/badge";
import { Button } from "@/components/ui/form/button";
import { Input } from "@/components/ui/form/input";
import { Heading } from "@/components/ui/text/heading";
import { Text } from "@/components/ui/text/text";
import { Container, HStack, Stack } from "@styled-system/jsx";
import { IconSearch } from "@tabler/icons-react";

export default function Page() {
	return (
		<Container>
			<Stack maxW="lg">
				<Badge>dbots.fun is already live!</Badge>
				<Heading size="3xl">Find the perfect Discord bots</Heading>
				<Text>
					Explore our curated collection of powerful Discord bots to enhance your server experience. From moderation to music, we've got you covered.
				</Text>
				<HStack>
					<Input placeholder="Search bots" minW="sm" />
					<Button variant="secondary">
						<IconSearch size={16} />
						Search
					</Button>
				</HStack>
				<HStack>
					<Text>Popular tags:</Text>
					<Text variant="link">Moderation</Text>
					<Text variant="link">Music</Text>
					<Text variant="link">Utility</Text>
				</HStack>
			</Stack>
		</Container>
	);
}
