import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import First from "../component/first/First";
import Navbar from "../component/navbar/Navbar";
import Wave from "../component/wave/Wave";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Box className="base" margin={"0"} padding={"0"}>
      <Box
        className="selection"
        position={"relative"}
        width="100%"
        height={"100vh"}
        bgSize="cover"
        backgroundAttachment={"fixed"}
        bgColor="#A0CFF9"
      >
        <Flex flexDirection={"column"}>
          <Navbar />
          <First/>
          <Wave />
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
