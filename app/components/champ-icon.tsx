import { Box, Image } from "@chakra-ui/react";

function ChampIcon({ champion }: { champion: string }) {
  const version = '13.24.1'; // Make environment variable or build configs
  const imageRoute = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion}.png`;

  return (
    <Box>
      {
        champion
        ? (
          <Image boxSize="60px" src={imageRoute} alt='Dan Abramov' />
        )
        : (
          <Box boxSize="60px" bgColor="gray700"></Box>
        )
      }
    </Box>
  );
}

export default ChampIcon;