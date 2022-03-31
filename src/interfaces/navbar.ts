export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href:"/"
    
  },
  {
    label: "Scores Table",
    href:'/scores'
  },
  {
    label: "Game",
    href:'/hangman'
  },
];
