import { useEffect, useState } from "react";

import ChampCard from "./champ-card";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import useChampionsClient from "../_clients/champions-client/champions-client";

function ChampSelection({
  onChampSelection,
}: {
  onChampSelection: (championData: ChampionData) => void;
}) {
  const { champions, championSearchValue, setChampionSearchValue } =
    useChampionsClient();

  return (
    <span>
      <FormControl>
        <HStack my="2">
          <FormLabel>Champion: </FormLabel>
          <Input
            placeholder="Champion name"
            value={championSearchValue}
            onChange={(e) => setChampionSearchValue(e.target.value)}
          ></Input>
        </HStack>
      </FormControl>
      {champions.map((champion) => {
        return (
          <Box>
            <Button
              size="xl"
              variant="ghost"
              colorScheme="gray"
              p={2}
              onClick={() => onChampSelection(champion)}
            >
              <ChampCard championId={champion.id} key={champion.id} />
            </Button>
          </Box>
        );
      })}
    </span>
  );
}

export default ChampSelection;
