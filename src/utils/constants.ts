interface HeaderNavProps {
  text: string;
}

interface FooterNavProps {
  text: string;
  link: string;
}

export const headerNavList: HeaderNavProps[] = [
  { text: "Email" },
  { text: "Number" },
  { text: "String" },
  { text: "Time" },
  { text: "URL" },
  { text: "Other" },
];

export const footerNavList: FooterNavProps[] = [
  { text: "Questions", link: "#" },
  { text: "Contribute", link: "#" },
  { text: "GitHub", link: "#" },
  { text: "Author", link: "#" },
];
