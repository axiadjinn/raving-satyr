import ChampCard from "@/app/components/champ-card";
import ThreeStateSelection from "@/app/components/three-state-selection";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

function SplitGameMatchDetailsPanel({ splitGame, onUpdate }: { splitGame: SplitGame, onUpdate: (splitGame: SplitGame) => void }) {
  function onWinChanged(win: boolean | null) {
    onUpdate({
      ...splitGame,
      win: win
    });
  }

  function onOpponentClick() {
    console.log("Opponent clicked");
  }

  return (
    <VStack alignItems="flex-end">
      <Box>
        <Text display="inline" pe={2}>Won the match?</Text>
        <ThreeStateSelection selection={splitGame.win} onStateChange={onWinChanged} />
      </Box>
      <Box>
        <Text display="inline-block" pe={2}>Opponent champion:</Text>
        <Button size="xl" variant="outline" colorScheme="red" p={2} onClick={onOpponentClick}>
          <Box verticalAlign="middle" display="inline-block">
            <ChampCard championId={splitGame.opponentChampionId}></ChampCard>
          </Box>
        </Button>
      </Box>
    </VStack>
  );
}

export default SplitGameMatchDetailsPanel;