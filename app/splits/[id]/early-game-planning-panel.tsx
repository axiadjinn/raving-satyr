import { Box, Heading, VStack, Text, Divider, Flex, Spacer } from "@chakra-ui/react";
import ThreeStateSelection from "@/app/components/three-state-selection";

function EarlyGamePlanningPanel({ earlyGamePlanning, onUpdate }: { earlyGamePlanning: EarlyGamePlanning, onUpdate: (earlyGamePlanning: EarlyGamePlanning) => void }) {
  function onWinLevel1Update(state: boolean | null) {
    onUpdate({
      ...earlyGamePlanning,
      winlvl1: state
    });
  }

  function onWinLevel2Update(state: boolean | null) {
    onUpdate({
      ...earlyGamePlanning,
      winlvl2: state
    });
  }

  function onWinLevel3Update(state: boolean | null) {
    onUpdate({
      ...earlyGamePlanning,
      winlvl3: state
    });
  }

  function onWinLevel6Update(state: boolean | null) {
    onUpdate({
      ...earlyGamePlanning,
      winlvl6: state
    });
  }

  return (
    <VStack spacing={2} alignItems="baseline">
      <Heading as="h3" size="sm" mb={1}>Early Game Planning</Heading>
      <Box>
        <Heading as="h4" size="sm" py={2}>Win-at...</Heading>
        <Flex w="100%" pb={1}>
          <Text display="inline" pe={1}>Level 1? </Text>
          <Spacer />
          <Box display="inline" px={2}>
            <ThreeStateSelection selection={earlyGamePlanning.winlvl1} onStateChange={(state) => { onWinLevel1Update(state) }} />
          </Box>
        </Flex>
        <Flex w="100%" pb={1}>
          <Text display="inline" pe={1}>Level 2? </Text>
          <Spacer />
          <Box display="inline" px={2}>
            <ThreeStateSelection selection={earlyGamePlanning.winlvl2} onStateChange={(state) => { onWinLevel2Update(state) }} />
          </Box>
        </Flex>
        <Flex w="100%" pb={1}>
          <Text display="inline" pe={1}>Level 3? </Text>
          <Spacer />
          <Box display="inline" px={2}>
            <ThreeStateSelection selection={earlyGamePlanning.winlvl3} onStateChange={(state) => { onWinLevel3Update(state) }} />
          </Box>
        </Flex>
        <Flex w="100%">
          <Text display="inline" pe={1}>Level 6? </Text>
          <Spacer />
          <Box display="inline" px={2}>
            <ThreeStateSelection selection={earlyGamePlanning.winlvl6} onStateChange={(state) => { onWinLevel6Update(state) }} />
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
}

export default EarlyGamePlanningPanel;