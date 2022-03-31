import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/state/reducers";
import NavBar from "../layouts/navbar/NavBar";
import Content from "./Content";

const Hangman: React.FunctionComponent = () => {
  const user = useSelector((state: RootState) => state.user);

  // if(user.username === null)
  // {
  //   return <p>sorry bruv</p>
  // }

  return (
    <>
      <NavBar />
      <Content />
    </>
  );
};

export default Hangman;
