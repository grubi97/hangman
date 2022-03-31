import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

export default function NavBar(props:any) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
