import { useParams } from "react-router-dom";
import infosContinents from "../../api/infos-continent.json";
import Header from "../../components/Header";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import EuropeBanner from "../../assets/banners/europe-banner.png";
import AmericaBanner from "../../assets/banners/americaBanner.png";
import AsiaBanner from "../../assets/banners/asia.jpg";
import { useEffect } from "react";

interface SingleContinent {
  chosenContinent: string;
}

let bannerMain: String

export default function Continent() {
  const { chosenContinent } = useParams();

  let continent = infosContinents.continents[chosenContinent];

  console.log(continent);


  function mainBannerContinent() {
    console.log(chosenContinent)
    switch (chosenContinent) {
      case 'europe': bannerMain = "../../assets/banners/europe-banner.png";
      case 'asia': bannerMain = "../../assets/banners/asia.jpg";
      case 'america': bannerMain = "../../assets/banners/americaBanner.png";
      default:
        break;
    }
  }

  useEffect(() => {
    mainBannerContinent()
  }, [])

  useEffect(() => {
    
    console.log(bannerMain)
  }, [bannerMain])

  return (
    <Box w="100%" bgColor="#F5F8FA" mx="auto">
      <Header />

      <Flex
        w="100%"
        h="400px"
        bgImage={continent.img || bannerMain}
        backgroundPosition="top"
        bgSize="cover"
        objectFit="fill"
        bgRepeat="no-repeat"
        flexDir="column"
        alignItems={{ md: "baseline", xs: "center" }}
        justifyContent={{ md: "flex-end", xs: "center" }}
        px={{ md: "20", xs: "0" }}
        py={{ md: "10", xs: "0" }}
      >
        <Text color="#F5F8FA" fontSize="48">
          {continent.title}
        </Text>
      </Flex>

      <Flex
        alignItems="center"
        flexDir={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        justifyContent="space-between"
        gap="4"
        px={{ md: "20", xs: "5" }}
        py="10"
      >
        <Text maxW={{ md: "50%", xs: "unset" }} fontSize={{ lg: "24", md: "18", xs: "14" }}>{continent.description}</Text>
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-evenly"
          gap="4"
        >
          {continent.numbers && Object.keys(continent.numbers).map((numberInfo) => (
            <Box textAlign="center">
              <Text color="yellow.900" fontWeight="semibold" fontSize={{ lg: "48", md: "48", sm: "24", xs: "24" }} textAlign="center">{continent.numbers[numberInfo]}</Text>
              <Text fontWeight="semibold" fontSize={{ lg: "24", md: "24", sm: "18", xs: "18" }} textAlign="center">
                {numberInfo === "countries"
                  ? "Países"
                  : numberInfo === "lang"
                    ? "línguas"
                    : "cidades +100"}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>

      {continent.citiesInCountry && (
        <Box
          px={{ md: "20", xs: "5" }}
          py="10"
        >
          <Text fontWeight="medium" fontSize="36">Cidades +100</Text>

          <Flex
            w="100%"
            alignItems="center"
            justifyContent={{ md: "flex-start", xs: "center" }}
            gap="8"
            flexWrap="wrap"
            py="8"
          >
            {continent.citiesInCountry && Object.keys(continent.citiesInCountry).map((city, index) => (
              <Box flex="1" maxW="260px" minW="210px" border="1px" borderColor="yellow.700" borderRadius="4" key={index}>
                <Image w="100%" src={continent.citiesInCountry[city].bg} />
                <Flex

                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Box py="4">
                    <Text fontWeight="semibold" fontSize="20" textTransform="capitalize">{city}</Text>
                    <Text fontWeight="medium" fontSize="16" color="gray.200">{continent.citiesInCountry[city].country}</Text>
                  </Box>
                  <Image w="30px" whiteSpace="nowrap" borderRadius="full" src={continent.citiesInCountry[city].flag} />
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      )}
    </Box>
  );
}
