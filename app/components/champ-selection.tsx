import { useEffect, useState } from "react";
import ChampionsClient from "../_clients/champions-client/champions-client";
import ChampCard from "./champ-card";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";

function ChampSelection({
  onChampSelection,
}: {
  onChampSelection: (championData: ChampionData) => void;
}) {
  const [champions, setChampions] = useState<ChampionData[]>(
    ChampionsClient.getChampionsArray(),
  );

  const [champSearchValue, setChampionSearchValue] = useState<string>("");

  useEffect(() => {
    setChampions(ChampionsClient.searchChampions(champSearchValue));
  }, [champSearchValue]);

  return (
    <span>
      <FormControl>
        <HStack my="2">
          <FormLabel>Champion: </FormLabel>
          <Input
            placeholder="Champion name"
            value={champSearchValue}
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
