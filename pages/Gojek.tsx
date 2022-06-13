import { Box, Flex, SkeletonText } from "@chakra-ui/react";
import {
  Autocomplete,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";
import MyGojek from "../component/myGojek/MyGojek";

export default function Gojek() {
  
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
    <Box height={"100vh"} width="100vw" position={"absolute"}>
      <Flex height={"100%"} position="relative">
        <Box flex={"2"} bgColor="blue.100">
        <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={8}
        center={center}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        <Marker position={center} />
      </GoogleMap>
        </Box>
        <MyGojek />
      </Flex>
    </Box>
  );
}
