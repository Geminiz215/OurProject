import {
  Box,
  Center,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import MyButton from "../button/Button";

export default function MyGojek() {
  return (
    <Box maxWidth={"30vw"} bgImage={"url('bg2.jpg')"} bgSize="cover">
      <Box margin="7" marginTop={"3"} >
        <Flex flexDirection={"column"}>
          <Center>
            <Image
              src="Gojek.png"
              alt="Dan Abramov"
              boxSize="150px"
              objectFit="cover"
              marginTop={"10"}
            />
          </Center>
          <FormControl >
            {/* <Heading as="h1" textAlign={"center"} size={"2xl"}>
              Gojek
            </Heading> */}
            <Stack spacing={5} padding="3" marginTop={"5"}>
              <Input variant="filled" placeholder="Outline" />
              <Input variant="filled" placeholder="Filled" />
              <Text textAlign={"center"} >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quo maiores eligendi nam placeat sunt vel odit. Iusto,
                saepe cumque? Veritatis iste cupiditate adipisci molestias odit
                excepturi magni praesentium sed!
              </Text>
              <MyButton />
            </Stack>
          </FormControl>
        </Flex>
      </Box>
    </Box>
  );
}
