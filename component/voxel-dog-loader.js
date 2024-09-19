import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const DogContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#F1E6DB",
    }}
    m="auto"
    w={[350, 600, 800]}
    h={[350, 600, 800]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  );
};

export default Loader;
