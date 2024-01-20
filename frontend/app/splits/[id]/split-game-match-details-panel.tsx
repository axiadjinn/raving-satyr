import ChampCard from "@/app/components/champ-card";
import ChampSelection from "@/app/components/champ-selection";
import ThreeStateSelection from "@/app/components/three-state-selection";
import {
  Box,
  Button,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function SplitGameMatchDetailsPanel({
  splitGame,
  onUpdate: handleUpdate,
}: {
  splitGame: SplitGame;
  onUpdate: (splitGame: SplitGame) => void;
}) {
  const {
    isOpen: isChampionSelectionModalOpen,
    onOpen: onChampionSelectionModalOpen,
    onClose: onChampionSelectionModalClose,
  } = useDisclosure();

  function onWinChanged(win: boolean | null) {
    handleUpdate({
      ...splitGame,
      win: win,
    });
  }

  function onOppositeChampionSelected(championData: ChampionData) {
    handleUpdate({
      ...splitGame,
      opponentChampionId: championData.id,
    });

    onChampionSelectionModalClose();
  }

  return (
    <>
      <VStack alignItems="flex-end">
        <Box>
          <Text display="inline" pe={2}>
            Won the match?
          </Text>
          <ThreeStateSelection
            selection={splitGame.win}
            onStateChange={onWinChanged}
          />
        </Box>
        <Box>
          <Text display="inline-block" pe={2}>
            Opponent champion:
          </Text>
          <Button
            size="xl"
            variant="outline"
            colorScheme="red"
            p={2}
            onClick={onChampionSelectionModalOpen}
          >
            <Box verticalAlign="middle" display="inline-block">
              <ChampCard championId={splitGame.opponentChampionId}></ChampCard>
            </Box>
          </Button>
        </Box>
      </VStack>
      <Modal
        isOpen={isChampionSelectionModalOpen}
        onClose={onChampionSelectionModalClose}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <ChampSelection onChampSelection={onOppositeChampionSelected} />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}

export default SplitGameMatchDetailsPanel;
