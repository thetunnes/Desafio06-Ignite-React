import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Logo from "../../assets/Logo.svg";
import Banner from "../../assets/Banner.jpg";
import Airplane from "../../assets/Airplane.svg";

export default function Home() {
  return (
    <Box w="100%" backgroundColor="gray.50">
      <Flex w="100%" align="center">
        <Image src={Logo} alt="World Trip" mx="auto" my="7" />
      </Flex>

      <Flex
        w="100%"
        flexDir="row"
        align="baseline"
        backgroundImage="url('../../assets/Airplane.svg')"
        backgroundPosition="center"
      >
        <Flex flexDir="column" alignSelf="flex-start" w="100%" px="32" py="5 0">
          <Text color="blackAlpha.300" fontSize={40}>
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text color="blackAlpha.300" fontSize={16}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Image src={Airplane} alt="avião amarelo" alignSelf="flex-end" />
      </Flex>
    </Box>
  );
}
