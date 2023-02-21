import Link from 'next/link';
import { useRouter } from 'next/router';

const LinkBack = ({ children, href, hasBack }) => {
  const router = useRouter();

  if (hasBack && React.isValidElement(children))
    return React.cloneElement(children, {
      href,
      onClick: (e) => {
        e.preventDefault();
        router.back();
      },
    });

  return (
    <Link href={process.env.NEXT_PUBLIC_BLOG_FOLDER} legacyBehavior>
      {children}
    </Link>
  );
};

export default LinkBack;
