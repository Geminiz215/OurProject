import {
  Box,
  Button,
  Fade,
  Image,
  ScaleFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { SliderData } from "./SliderData";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(1);
  const length = slides.length;
  const { isOpen, onToggle } = useDisclosure()

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Box
      className="slider"
      position={"relative"}
      height="100vh"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
    >
      <Button
        className="left-arrow"
        bgColor={"red.100"}
        paddingLeft={"15"}
        paddingRight="15"
        onClick={nextSlide}
        size="md"
        position={"absolute"}
        top="50%"
        right={"32px"}
        fontSize="lg"
        color={"black"}
        zIndex="10"
        cursor={"pointer"}
        userSelect="none"
      >
        left arrow
      </Button>
      <Button
        className="Right-arrow"
        bgColor="red.100"
        paddingLeft={"15"}
        paddingRight="15"
        onClick={prevSlide}
        size="md"
        position={"absolute"}
        top="50%"
        left={"32px"}
        fontSize="lg"
        color={"black"}
        zIndex="10"
        cursor={"pointer"}
        userSelect="none"
      >
        Right-arrow
      </Button>
      {SliderData.map((slide, index) => {
        return (
          <Box
            className={index === current ? "slideActive" : "slide"}
            key={index}
          >
            <ScaleFade initialScale={0.9} in={true}>
              {index === current && (
                <Image
                  src={slide.image}
                  alt="image visit"
                  className="image"
                  width={"1000px"}
                  height="600px"
                  borderRadius={"10px"}
                />
              )}
            </ScaleFade>
          </Box>
        );
      })}
    </Box>
  );
}
