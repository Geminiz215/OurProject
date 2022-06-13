import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";

export default function Navbar (){
    return(
        <Flex minWidth="max-content" alignItems="center" gap="2" paddingTop={"10px"} paddingRight="5px">
          <Spacer />
          <ButtonGroup gap="2" size={"lg"}>
            <Button colorScheme="teal">Sign Up</Button>
            <Button colorScheme="teal">Log in</Button>
          </ButtonGroup>
        </Flex>
    )
}