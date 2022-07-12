import {
  Box,
  Flex,
  Image,
  Text,
  extendTheme,
  useBreakpointValue,
} from "@chakra-ui/react";

import allInfos from "../../api/infos-home.json";

import Airplane from "../../assets/Airplane.svg";

import SlideSwiper from "../../components/Slide";
import Header from "../../components/Header";

export default function Home() {
  const infos = Object.keys(allInfos);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box w="100%" backgroundColor="#F5F8FA">
      <Header />

      <Box
        w={["100%"]}
        backgroundImage="url('/src/assets/Background.png')"
        backgroundPosition="top"
        bgSize="cover"
        bgRepeat="no-repeat"
        mx="auto"
      >
        <Flex w="90%" flexDir="row" align="baseline" mx="auto">
          <Flex
            flexDir="column"
            alignSelf="center"
            w="100%"
            px={{ xl: "20", md: "8", sm: "4" }}
            py={{ base: "5", lg: "25" }}
          >
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
            display={{ md: "block", sm: "none", xs: "none" }}
          />
        </Flex>
      </Box>

      <Flex
        align="center"
        gap={{ lg: "32", md: "24", sm: "16", xs: "16" }}
        wrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", xs: "wrap" }}
        justify="center"
        py="20"
      >
        {infos.map((info, index) => (
          <Flex
            align="center"
            flexDir={{ lg: "column", md: "column", sm: "row" }}
            gap="6"
            key={index}
          >
            {isWideVersion ? (
              <Image src={allInfos[info].icon} alt="cocktail" />
            ) : (
              <Image src={"/src/assets/Ellipse.svg"} alt="cocktail" />
            )}
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
          my="8"
        ></Text>
      </Box>

      <Flex flexDir="column" align="center" justifyContent="center">
        <Text fontSize={{base: 36, md: 32, sm: 24, xs: 24}} textAlign="center" fontWeight="medium" color="#47585B">
          Vamos nessa?
        </Text>
        <Text fontSize={{base: 36, md: 32, sm: 24, xs: 24}} textAlign="center" fontWeight="medium" color="#47585B">
          Então escolha seu continente
        </Text>
      </Flex>

      <Flex w={{ base: "90%", md: "90%", sm: "100%", xs: "100%" }} mx="auto" my="8">
        <SlideSwiper />
      </Flex>
    </Box>
  );
}
