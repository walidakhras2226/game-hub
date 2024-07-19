import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box>
        <Heading>Oops..</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist!"
            : "Unexpected Error!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
