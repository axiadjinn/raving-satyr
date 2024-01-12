import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import ChampIcon from "./champ-icon";
import champions from "../_data/champions";

function ChampCard({ championId }: { championId: string }) {
  return (
    <Flex>
      {
        championId
          ? (
            <>
              < Center pe={2} >
                <ChampIcon championId={championId} />
              </Center >
              <Center>
                <Heading size="md">
                  {championId ? champions.data[championId].name : '-'}
                </Heading>
              </Center>
            </>
          )
          : (
            <>
              < Center pe={2} >
                <Box boxSize="60px" bgColor="gray700"></Box>
              </Center >
              <Center>
                <Heading size="md">-</Heading>
              </Center>
            </>
          )
      }
    </Flex >
  );
}

export default ChampCard;