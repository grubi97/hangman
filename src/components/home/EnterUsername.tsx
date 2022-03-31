import {
  FormControl,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../app/state";
import { ModalState } from "../../app/state/actions";
import { User } from "../../interfaces/user";

const EnterUsername: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const usernameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const { login, showModal } = bindActionCreators(actionCreators, dispatch);

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!usernameRef?.current?.value) {
      const payload: ModalState = {
        body: (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle  mr={2}>No username given!</AlertTitle>
          </Alert>
        ),
        open: true,
      };
      return showModal(payload);
    }
    const payload: User = {
      username: String(usernameRef?.current?.value),
    };
    login(payload);
    navigate("/hangman");
  };

  return (
    <form action="submit">
      <FormControl isRequired>
        <FormLabel htmlFor="username">Enter Username</FormLabel>
        <Input id="username" placeholder="Username" ref={usernameRef} />
      </FormControl>
      <Button onClick={(e: any) => submitHandler(e)} style={{ marginTop: 10 }}>
        Submit
      </Button>
    </form>
  );
};

export default EnterUsername;
