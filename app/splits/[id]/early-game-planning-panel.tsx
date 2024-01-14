import {
  Box,
  Heading,
  VStack,
  Text,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import ThreeStateSelection from "@/app/components/three-state-selection";

function EarlyGamePlanningPanel({
  earlyGamePlanning,
  onUpdate,
}: {
  earlyGamePlanning: EarlyGamePlanning;
  onUpdate: (earlyGamePlanning: EarlyGamePlanning) => void;
}) {
  function onWinUpdate(state: boolean | null, level: number) {
    onUpdate({ ...earlyGamePlanning, ["winlvl" + level]: state });
  }

  const levelChecks = [1, 2, 3, 6];

  return (
    <VStack spacing={2} alignItems="baseline">
      <Heading as="h3" size="sm" mb={1}>
        Early Game Planning
      </Heading>
      <Box>
        <Heading as="h4" size="sm" py={2}>
          Win-at...
        </Heading>
        {levelChecks.map((level) => (
          <Flex w="100%" pb={1}>
            <Text display="inline" pe={1}>
              Level {level}?{" "}
            </Text>
            <Spacer />
            <Box display="inline" px={2}>
              <ThreeStateSelection
                selection={
                  earlyGamePlanning[`winlvl${level}` as keyof EarlyGamePlanning]
                }
                onStateChange={(state) => {
                  onWinUpdate(state, level);
                }}
              />
            </Box>
          </Flex>
        ))}
      </Box>
    </VStack>
  );
}

export default EarlyGamePlanningPanel;
