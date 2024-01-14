import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
} from "@chakra-ui/react";
import SplitGameSummary from "./split-game-summary";
import SplitGameDetails from "./split-game-details";

function SplitGameList({
  splitGames,
  onUpdate,
}: {
  splitGames: SplitGame[];
  onUpdate: (splitGames: SplitGame[]) => void;
}) {
  function UpdateSplitGameInfo(splitGame: SplitGame) {
    onUpdate(
      splitGames.toSpliced(
        splitGames.findIndex((sg) => sg.id == splitGame.id),
        1,
        splitGame,
      ),
    );
  }

  return (
    <Accordion w="full" allowMultiple={true}>
      {splitGames.map((sg) => {
        return (
          <AccordionItem key={sg.id}>
            <Heading as="h3">
              <AccordionButton>
                <SplitGameSummary splitGame={sg} />
                <AccordionIcon ms={1} />
              </AccordionButton>
            </Heading>
            <AccordionPanel>
              <SplitGameDetails
                splitGame={sg}
                onUpdate={(splitGame) => UpdateSplitGameInfo(splitGame)}
              />
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default SplitGameList;
