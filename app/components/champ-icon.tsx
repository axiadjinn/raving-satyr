import { Box, Image } from "@chakra-ui/react";
import championsData from "../_data/champions";

function ChampIcon({ championId }: { championId: string }) {
  const version = '13.24.1'; // Make environment variable or build configs
  const champion = championsData.data[championId];
  const imageRoute = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`;

  return (
    <Box>
      {
        champion
        ? (
          <Image boxSize="60px" src={imageRoute} alt={champion.name} />
        )
        : (
          <Box boxSize="60px" bgColor="gray700"></Box>
        )
      }
    </Box>
  );
}

export default ChampIcon;