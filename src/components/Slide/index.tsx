import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"

import EuropeBanner from "../../assets/banners/europe-banner.png";
import AmericaBanner from "../../assets/banners/americaBanner.png";
import AsiaBanner from "../../assets/banners/asia.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

export default function SlideSwiper() {

  let styleSwiper = {"--swiper-navigation-color": "#FFBA08", "--swiper-pagination-color": "#FFBA08"}
  
  return (
    <Swiper navigation pagination modules={[Navigation]} style={styleSwiper}>
      <SwiperSlide>
        <Link to="/continent/europe">
          <Flex
            w="100%"
            h="100%"
            bgImage={EuropeBanner}
            bgPos="center"
            bgRepeat="no-repeat"
            objectFit="fill"
            flexDir="column"
            align="center"
            justifyContent="center"
          >
            <Text
              color="whiteAlpha.900"
              fontSize={40}
              fontWeight="bold"
              textAlign="center"
            >
              Europa
            </Text>
            <Text color="whiteAlpha.900" fontWeight="bold" fontSize={24} textAlign="center">
              O Continente mais antigo.
            </Text>
          </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link to="/continent/asia">
          <Flex
            w="100%"
            h="430px"
            objectFit={{ lg: "cover", md: "fill", sm: "fill", xs: "fill"}}
            flexDir="column"
            bgImage={AsiaBanner}
            bgPos="center"
            bgSize={{lg: "100% 100%", md: "100%"}}
            bgRepeat="no-repeat"
            alignItems="center"
            justifyContent="center"
            filter="auto"
            brightness="80%"
          >
            <Text
              color="whiteAlpha.900"
              fontSize={40}
              fontWeight="bold"
              textAlign="center"
            >
              Ásia
            </Text>
            <Text color="whiteAlpha.900" fontWeight="bold" fontSize={24} textAlign="center">
              O Continente mais populoso.
            </Text>
          </Flex>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link to="/continent/america">
          <Flex
            w="100%"
            h="430px"
            objectFit="fill"
            flexDir="column"
            bgImage={AmericaBanner}
            bgPos="center"
            bgRepeat="no-repeat"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              color="whiteAlpha.900"
              fontSize={40}
              fontWeight="bold"
              textAlign="center"
              filter="auto"
              brightness="100%"
            >
              América do Sul
            </Text>
            <Text color="whiteAlpha.900" fontWeight="bold" fontSize={24} textAlign="center">
              O Continente mais lindo.
            </Text>
          </Flex>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
