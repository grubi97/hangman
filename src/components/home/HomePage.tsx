import React from "react";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import ModalContainer from "../common/modal/ModalContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/state/reducers";
import { actionCreators } from "../../app/state";
import { bindActionCreators } from "redux";
import EnterUsername from "./EnterUsername";
import { useNavigate } from "react-router";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);

  let navigate = useNavigate();
  const { showModal } = bindActionCreators(actionCreators, dispatch);
  const onOpenClick = (body: JSX.Element) => {
    showModal({
      body: body,
      open: true,
    });
  };
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Welcome to <br />
            <Text as={"span"} color={"green.400"}>
              Hangman!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Hangman is a simple word guessing game. Players try to figure out an
            unknown word by guessing letters. If too many letters which do not
            appear in the word are guessed, the player is hanged (and loses).
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            {!userState.username ? (
              <Button
                onClick={() => onOpenClick(<EnterUsername />)}
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                Get Started
              </Button>
            ) : (
              <>
                <Text color={"gray.500"}>Hello {userState.username}</Text>
                <Button
                  onClick={() => navigate("/hangman")}
                  colorScheme={"green"}
                  bg={"green.400"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Play!
                </Button>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
