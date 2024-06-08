"use client";

import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import SplitGameList from "./split-game-list";
import SplitInfo from "./split-info";

async function getSplit(_id: string): Promise<Split> {
  return {
    splitChamp: "Mordekaiser",
    splitTarget: 20,
    id: "001",
    splitGames: [
      {
        id: "1",
        opponent: "Kayle",
        opponentChampionId: "Kayle",
        win: false,
        earlyGamePlanning: {
          winlvl1: false,
          winlvl2: true,
          winlvl3: true,
          winlvl6: false,
        },
      },
      {
        id: "2",
        opponent: "Chogath",
        opponentChampionId: "Chogath",
        win: true,
        earlyGamePlanning: {
          winlvl1: false,
          winlvl2: true,
          winlvl3: true,
          winlvl6: false,
        },
      },
      {
        id: "3",
        opponent: "Kayle",
        opponentChampionId: "Chogath",
        win: null,
        earlyGamePlanning: {
          winlvl1: null,
          winlvl2: null,
          winlvl3: null,
          winlvl6: null,
        },
      },
      {
        id: "4",
        opponent: "Illaoi",
        opponentChampionId: "",
        win: null,
        earlyGamePlanning: {
          winlvl1: null,
          winlvl2: null,
          winlvl3: null,
          winlvl6: null,
        },
      },
    ],
  };
}

async function updateSplit(id: string, split: Split): Promise<Split> {
  console.log("Trying to update split " + id + ".");

  return split;
}

function ChampPracticeSplit({ params }: { params: { id: string } }) {
  const [split, setSplit] = useState<Split>({
    id: "",
    splitChamp: "",
    splitGames: [],
    splitTarget: 0,
  });
  const [changesPending, setChangesPending] = useState(false);
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  useEffect(() => {
    getSplit(params.id).then((split) => {
      setSplit(split);
    });
  }, [params]);

  function onSplitGamesUpdate(splitGames: SplitGame[]) {
    setSplit({
      ...split,
      splitGames: splitGames,
    });

    setChangesPending(true);
  }

  function onSplitSave() {
    updateSplit(params.id, split)
      .then((_) => {
        setShowSaveNotification(true);
        setChangesPending(false);

        return new Promise((resolve) => setTimeout(resolve, 5000));
      })
      .then((_) => {
        setShowSaveNotification(false);
      });
  }

  return (
    <Container maxW="container.lg" p={0}>
      {showSaveNotification && (
        <Alert status="success">
          <AlertIcon />
          Split saved
        </Alert>
      )}
      <Flex h="100xh" py={4}>
        <VStack
          w="full"
          h="full"
          p={5}
          spacing={2}
          alignItems="flex-start"
          bg="gray.50"
          boxShadow="md"
        >
          <Box w="full">
            <SplitInfo split={split} />
            {changesPending && <Button onClick={onSplitSave}>Save</Button>}
          </Box>
          <Divider borderColor="gray.500"></Divider>
          <SplitGameList
            splitGames={split.splitGames}
            onUpdate={onSplitGamesUpdate}
          />
        </VStack>
      </Flex>
    </Container>
  );
}

export default ChampPracticeSplit;
