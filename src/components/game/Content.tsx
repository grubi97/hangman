import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Input,
  Button,
} from "@chakra-ui/react";
import Feature from "./Feature";
import { FcClock } from "react-icons/fc";
import { BiError } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { hideWord, imgArray, randomWord } from "../../helpers/helper";
import { useSelector } from "react-redux";
import { RootState } from "../../app/state/reducers";

const Content: React.FunctionComponent = () => {
  const [mistakes, setmistakes] = useState<number>(0);
  const [word, setWord] = useState<String[]>([]);
  const [maskedWord, setMaskedWord] = useState<String[]>([]);
  const letterref = useRef<HTMLInputElement | null>(null);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const currentWord: String = randomWord();
    setWord(currentWord.split(""));
    setMaskedWord(hideWord(currentWord));
  }, []);

  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // event.preventDefault()
    if (event.code === "Enter") {
      if (word.includes(letterref.current?.value!)) {
        const updatedWord = [...maskedWord];
        word.map((letter, i) => {
          if (letter === letterref.current?.value!) {
            updatedWord[i] = letterref.current?.value!;
          }
        });
        setMaskedWord(updatedWord);
      } else {
        setmistakes(mistakes + 1);
      }
    }
  };

  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Feature
            icon={<Icon as={FcClock} w={5} h={5} />}
            iconBg={useColorModeValue("yellow.100", "yellow.900")}
            text={"Business Planning"}
          />
          <Feature
            icon={<Icon as={BiError} w={5} h={5} />}
            iconBg={useColorModeValue("red.100", "red.900")}
            text={"Mistakes: " + mistakes.toString()}
          />

          <Heading>Guess the word {user.username}!</Heading>
          <Heading>Press enter to submit letter</Heading>
          <Text color={"black.800"} fontSize={"5xl"}>
            {maskedWord}
          </Text>
          <Input
            id="enter"
            placeholder="Enter letter"
            borderColor="blackAlpha.900"
            maxLength={1}
            onKeyDown={handleInput}
            ref={letterref}
          />

          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
            width={200}
          >
            Reset
          </Button>
          {mistakes === 6 && (
            <Button
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
          )}
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          ></Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={imgArray[mistakes]}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Content;
