import { Box, keyframes, position, usePrefersReducedMotion } from "@chakra-ui/react";

export default function Wave() {

  const spin = keyframes`
  from { background-position: 0px; }
  to { background-position: 1360px;; }
  `;
  const spinback = keyframes`
  from { background-position: 1360px; }
  to { background-position: 0px; }
  `
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 10s linear`

  const animationback = prefersReducedMotion
    ? undefined
    : `${spinback} infinite 10s linear`


  return (
    <Box
      className="wave"
      position={"absolute"}
      width="100%"
      height={"143px"}
      bottom="0"
      left={"0"}
      bgImage="url('wave.png')"
      animation={animation}
      _before={{
        content : `""`,
        width : "100%",
        height: "143",
        backgroundImage: "url('wave.png')",
        position: "absolute",
        top: "0",
        left: "0",
        opacity: "0.4",
        animation : animationback
      }}
    ></Box>
    
  );
}
