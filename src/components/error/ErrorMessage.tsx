import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/alert";
import { CloseButton } from "@chakra-ui/close-button";

const ErrorMessage = () => {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>No username given!</AlertTitle>
        <AlertDescription>
          You need a username to enter the game!
        </AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    </>
  );
};

export default ErrorMessage;
