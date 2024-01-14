import ChampCard from "@/app/components/champ-card";

import { Center, Flex, Spacer, Text } from "@chakra-ui/react";

function getWinStatus(win: boolean | null) {
  if (win == true) {
    return (
      <Text fontSize="xl" color="green.500">
        Won
      </Text>
    );
  }

  if (win == false) {
    return (
      <Text fontSize="xl" color="red.500">
        Lost
      </Text>
    );
  }

  return (
    <Text fontSize="xl" color="gray.500">
      -
    </Text>
  );
}

function SplitGameSummary({ splitGame }: { splitGame: SplitGame }) {
  return (
    <Flex w="full">
      <ChampCard championId={splitGame.opponentChampionId} />
      <Spacer></Spacer>
      <Center>{getWinStatus(splitGame.win)}</Center>
    </Flex>
  );
}

export default SplitGameSummary;
