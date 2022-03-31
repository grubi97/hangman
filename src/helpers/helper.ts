import step0 from "../images/0.jpg";
import step1 from "../images/1.jpg";
import step2 from "../images/2.jpg";
import step3 from "../images/3.jpg";
import step4 from "../images/4.jpg";
import step5 from "../images/5.jpg";
import step6 from "../images/6.jpg";

const programming_languages = [
  "Pyt,hon",
  "Java,script",
  "Mon,godb",
  "Jso,n",
  "Jav,a",
  "Htm,l",
  "Cs,s",
  "C",
  "Cs,harp",
  "Gol,ang",
  "Kot,lin",
  "P,hp",
  "S,ql",
  "R,uby",
  "Fo,rtran",
];

function randomWord() {
  return programming_languages[
    Math.floor(Math.random() * programming_languages.length)
  ];
}

function hideWord(word: String): String[] {
  const wordArray = word.split("");
  for (var i in wordArray) {
    if (wordArray[i].match(/[a-z]/i)) wordArray[i] = "_";
  }

  return wordArray;
}

const imgArray = [step0, step1, step2, step3, step4, step5, step6];

export { randomWord, imgArray, hideWord };
