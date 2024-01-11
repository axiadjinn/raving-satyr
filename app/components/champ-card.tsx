import { Center, Flex, Heading } from "@chakra-ui/react";
import ChampIcon from "./champ-icon";
import champions from "../_data/champions";

function ChampCard({ championId }: { championId: string }) {
  return (
    <Flex>
      <Center pe={2}>
        <ChampIcon champion={championId} />
      </Center>
      <Center>
        <Heading size="md">
          {championId ? champions.data[championId].name : '-'}
        </Heading>
      </Center>
    </Flex>
  );
}

export default ChampCard;