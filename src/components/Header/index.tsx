import { Flex, Image, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

export default function Header() {

    const location = useLocation()

    console.log(location)
  return (
    <Flex w="100%" align="center">
      <Link href="/" mx="auto" my="7"><Image src={Logo} alt="World Trip" /></Link>
    </Flex>
  );
}
