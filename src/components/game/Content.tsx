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
import { hideWord, imgArray } from "../../helpers/helper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/state/reducers";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../app/state";
import { Spinner } from "@chakra-ui/react";

const Content: React.FunctionComponent = () => {
  const [mistakes, setmistakes] = useState<number>(0);
  const [word, setWord] = useState<String[]>([]);
  const [maskedWord, setMaskedWord] = useState<String[]>([]);
  const letterref = useRef<HTMLInputElement | null>(null);
  const user = useSelector((state: RootState) => state.user);
  const randomWord = useSelector((state: RootState) => state.randomword);

  const dispatch = useDispatch();
  const colorTime = useColorModeValue("yellow.100", "yellow.900");
  const colorMistake = useColorModeValue("red.100", "red.900");
  const colorBorder = useColorModeValue("gray.100", "gray.700");
  const [isloading,setisloading]=useState(false)

  useEffect(() => {
  

  }, []);

  const onClickHandler = () => {
    setWord(randomWord.content.split(""))
    setMaskedWord(hideWord(randomWord.content));
    setmistakes(0);
  };
  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter" && letterref.current!.value != "") {
      if (
        word.some(
          (letter) =>
            letter.toLowerCase() == letterref.current!.value.toLowerCase()
        )
      ) {
        const updatedWord = [...maskedWord];
        word.map((letter, i) => {
          if (letter.toLowerCase() === letterref.current!.value.toLowerCase()) {
            updatedWord[i] = letter;
          }
        });
        setMaskedWord(updatedWord);
      } else {
        setmistakes(mistakes + 1);
      }
      letterref.current!.value = "";
    }
  };

  return isloading ? (
    <Spinner position="static" />
  ) : (
    
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 3, md: 1 }} spacing={15}>
        <Stack spacing={4}>

          <Feature
            icon={<Icon as={FcClock} w={5} h={5} />}
            iconBg={colorTime}
            text={"Business Planning"}
          />
          <Feature
            icon={<Icon as={BiError} w={5} h={5} />}
            iconBg={colorMistake}
            text={"Mistakes: " + mistakes.toString()}
          />
           <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={imgArray[mistakes]}
            objectFit={"cover"} 
            position='initial'
          />
        </Flex>

          <Heading>Guess the word {user.username}!</Heading>
          <Heading>Press enter to submit letter</Heading>
          <Text color={"black.800"} fontSize={"4xl"}>
            {maskedWord}
          </Text>
          {mistakes != 6 && maskedWord.includes("_") && (
            <Input
              id="enter"
              placeholder="Enter letter"
              borderColor="blackAlpha.900"
              maxLength={1}
              onKeyDown={handleInput}
              ref={letterref}
            />
          )}

          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
            width={200}
            onClick={onClickHandler}
          >
            Reset
          </Button>
          {mistakes === 6 && (
            <Text color={"red.500"} fontSize={"5xl"}>
              YOU LOST
            </Text>
          )}
          {!maskedWord.includes("_") && (
            <Text color={"green.500"} fontSize={"5xl"}>
              YOU WON
            </Text>
          )}
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={colorBorder} />}
          ></Stack>
        </Stack>
       
      </SimpleGrid>
    </Container>
  );
};

export default Content;
