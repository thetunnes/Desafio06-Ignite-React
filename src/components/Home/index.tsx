import { Box, Flex, Image, Text, keyframes } from "@chakra-ui/react";
import Logo from "../../assets/Logo.svg";
import Banner from "../../assets/Banner.jpg";
import Airplane from "../../assets/Airplane.svg";

import Cocktail from "../../assets/cocktail.svg";
import Building from "../../assets/building.svg";
import Earth from "../../assets/earth.svg";
import Museum from "../../assets/museum.svg";
import Surf from "../../assets/surf.svg";

import allInfos from "../../api/infos-home.json";

import Swiper from 'swiper'

export default function Home() {
  const infos = Object.keys(allInfos);

  return (
    <Box w="100%" backgroundColor="gray.50">
      <Flex w="100%" align="center">
        <Image src={Logo} alt="World Trip" mx="auto" my="7" />
      </Flex>

      <Box
      w="100%"
        backgroundImage="url('/src/assets/Background.png')"
        backgroundPosition="top"
      >
        <Flex w="90%"  flexDir="row" align="baseline" mx="auto">
          <Flex flexDir="column" alignSelf="center" w="100%" px="32" py="5 0">
            <Text color="whiteAlpha.900" fontSize={36}>
              5 Continentes, <br /> infinitas possibilidades.
            </Text>
            <Text color="whiteAlpha.900" fontSize={20}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          <Image
            src={Airplane}
            alt="avião amarelo"
            alignSelf="flex-end"
            pos="relative"
            top="10"
          />
        </Flex>
      </Box>

      <Flex align="center" gap="32" justify="center" py="20">
        {infos.map((info, index) => (
          <Flex align="center" flexDir="column" gap="6" key={index}>
            <Image src={allInfos[info].icon} alt="cocktail" />
            <Text>{allInfos[info].title}</Text>
          </Flex>
        ))}
      </Flex>

      <Box w="100%">
        <Text
          w="90px"
          border="2px"
          borderColor="gray.900"
          mx="auto"
          my="4"
        ></Text>
      </Box>

      <Flex flexDir="column" align="center" justifyContent="center">
        <Text fontSize={36} color="#47585B">
          Vamos nessa?
        </Text>
        <Text fontSize={36} color="#47585B">
          Então escolha seu continente
        </Text>
      </Flex>
    </Box>
  );
}
