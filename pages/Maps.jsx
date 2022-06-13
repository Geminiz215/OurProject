import {
  Box,
  Button,
  ButtonGroup,
  Input,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import {
  Autocomplete,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";

export default function Maps() {
  const [Map, setMap] = useState({});
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `AIzaSyAbvNP_ZE4XnstCh1MvXPZ0hLMr8irGMuY`,
    libraries: ["places"]
  });

  const center = { lat: 48.8584, lng: 2.2945 };

  if (!isLoaded) {
    return <SkeletonText />;
  }

  return (
    // <Box height={"50vh"} width="100vw">
    //   <GoogleMap
    //     mapContainerStyle={{ width: "100%", height: "100%" }}
    //     zoom={8}
    //     center={center}
    //     //jika ingin menonaktifkan fitur2 maps
    //     // options={{
    //     //   zoomControl: false,
    //     //   streetViewControl: false,
    //     //   mapTypeControl: false,
    //     //   fullscreenControl: false
    //     // }}
    //     onLoad={(map) => setMap(map)}
    //   >
    //     <Marker position={center} />
    //     <Marker position={center} />
    //   </GoogleMap>
    //   <ButtonGroup paddingLeft="7" paddingTop={"5"} gap="2" size={"lg"}>
    //     <Button
    //       colorScheme="twitter"
    //       variant={"solid"}
    //       onClick={() => Map.panTo(center)}
    //     >
    //       Focus
    //     </Button>
    //     <Button colorScheme="twitter">Gofood</Button>
    //   </ButtonGroup>
    //   <Stack spacing={3} paddingTop="5" maxW={"50vw"} paddingLeft={5}>
    //     <Autocomplete>
    //       <Input placeholder="hallo gess" size={"md"} />
    //     </Autocomplete>
    //     <Autocomplete>
    //       <Input placeholder="hallo lagi gess" size={"md"} />
    //     </Autocomplete>
    //   </Stack>
    // </Box>
    <Box>
      hallo
    </Box>
  );
}
