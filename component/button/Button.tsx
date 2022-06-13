import { Fragment } from "react";
import { Button, Fade, Box, useDisclosure } from "@chakra-ui/react";

export default function MyButton() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Fragment>
      <Button onClick={onToggle} colorScheme="blue" size={"lg"}>Click Me</Button>
      <Fade in={isOpen}>
        <Box
          p="30px"
          color="white"
          mt="1"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Fade
        </Box>
      </Fade>
    </Fragment>
  );
}
