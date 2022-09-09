import { useRouter } from 'next/router';
import Link from 'next/link';

const style = {
  color: '#0070f3',
  TextDecoration: 'underline',
};

export const ActiveLink = ({ text, href }) => {
  const { asPath } = useRouter();
  // console.log(`file: ActiveLink.jsx | line 11 | asPath`, asPath);

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  );
};
