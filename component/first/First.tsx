import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import MyButton from "../button/Button";

export default function First() {
  return (

    <Box>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@50&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@30&family=Rubik:ital,wght@1,300&display=swap"
          rel="stylesheet"
        ></link>
         {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3mpu2x01VJqe6jiPZwdvNYd1GuK8nkns&callback=initMap"></script> */}
      </Head>
      <Flex height={"70vh"}>
        <Box margin="auto" flexDirection="column" flex={"2"}>
          <Heading
            as="h1"
            size={"3xl"}
            paddingLeft="7"
            fontFamily={"'Inter', sans-serif"}
            fontWeight="bold"
            color={"white"}
            
          >
            {" "}
            Welcome to GojekLite
          </Heading>
          <Heading
            as="h4"
            size={"md"}
            paddingLeft="7"
            fontFamily={"'Rubik', sans-serif"}
            fontWeight="bold"
            color={"white"}
          >
            hallo farhat
          </Heading>
          <Text paddingLeft={"7"} marginTop="5" maxWidth={"50vw"} fontSize="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            saepe eos assumenda. Facilis cumque, blanditiis earum magnam quae
            magni! Saepe modi deserunt quis tenetur nostrum dolorem
            exercitationem voluptas, voluptatum quaerat! consequuntur. Quam,
            inventore sapiente!
          </Text>
          <ButtonGroup paddingLeft="7" paddingTop={"5"} gap="2" size={"lg"}>
            <Link href={"/Gojek"}>
            <Button colorScheme="twitter" variant={"solid"} >Gojek</Button>
            </Link>
            <Button colorScheme="twitter">Gofood</Button>
          </ButtonGroup>
        </Box>

        <Center flex={"1"} >
          <Image src="icon2.jpg" paddingTop={"5"} boxSize="400px" />
        </Center>
      </Flex>
    </Box>
  );
}
