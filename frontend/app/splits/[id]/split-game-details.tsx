import { Box, Flex, Spacer } from "@chakra-ui/react";
import EarlyGamePlanningPanel from "./early-game-planning-panel";
import SplitGameMatchDetailsPanel from "./split-game-match-details-panel";

function SplitGameDetails({
  splitGame,
  onUpdate,
}: {
  splitGame: SplitGame;
  onUpdate: (splitGame: SplitGame) => void;
}) {
  function onEarlyGamePlanningUpdate(earlyGamePlanning: EarlyGamePlanning) {
    onUpdate({
      ...splitGame,
      earlyGamePlanning: earlyGamePlanning,
    });
  }

  return (
    <Flex>
      <Box flexGrow={1}>
        <EarlyGamePlanningPanel
          earlyGamePlanning={splitGame.earlyGamePlanning}
          onUpdate={(earlyGamePlanning) =>
            onEarlyGamePlanningUpdate(earlyGamePlanning)
          }
        />
      </Box>
      <Spacer />
      <Flex justifyContent="end" flexGrow={1}>
        <Box>
          <SplitGameMatchDetailsPanel
            splitGame={splitGame}
            onUpdate={onUpdate}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default SplitGameDetails;
