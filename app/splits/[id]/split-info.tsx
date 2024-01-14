import ChampIcon from "@/app/components/champ-icon";
import { Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import champions from "../../_data/champions";

function SplitInfo({ split }: { split: Split }) {
  return (
    <Flex w="full">
      <VStack spacing={1} alignItems="flex-start" justifyContent="center">
        { split.splitChamp && <Heading size="md">{champions.data[split.splitChamp].name}</Heading> }
        <Text>Practice: {split.splitGames.length}/{split.splitTarget}</Text>
      </VStack>
      <Spacer></Spacer>
      <ChampIcon championId={split.splitChamp} />
    </Flex>
  );
}

export default SplitInfo;