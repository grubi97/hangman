import { Button } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Stack } from "@chakra-ui/layout";
import MobileNavItem from "./MobileNavItem";
import { NAV_ITEMS } from "../../../../interfaces/navbar";

export default function MobileNav() {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
