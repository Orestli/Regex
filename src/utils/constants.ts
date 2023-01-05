interface HeaderNavProps {
  text: string;
}

interface FooterNavProps {
  text: string;
  link: string;
}

export const headerNavList: HeaderNavProps[] = [
  { text: 'Email' },
  { text: 'Number' },
  { text: 'String' },
  { text: 'Time' },
  { text: 'URL' },
  { text: 'Other' },
];

export const footerNavList: FooterNavProps[] = [
  { text: 'Questions', link: 'https://github.com/Orestli/regex/issues' },
  { text: 'Contribute', link: 'https://github.com/Orestli/regex/pulls' },
  { text: 'GitHub', link: 'https://github.com/Orestli/regex' },
  { text: 'Author', link: 'https://github.com/Orestli' },
];
