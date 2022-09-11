import { useRouter } from 'next/router';
import Link from 'next/link';
import { CSSProperties } from 'react';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface Props {
  text: string,
  href: string,
}

export const ActiveLink: React.FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  // console.log(`file: ActiveLink.jsx | line 11 | asPath`, asPath);

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
