import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import Link from 'next/link';
import { Link as LinkCore } from '@wfp/react';

interface MoreLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  legacyBehaviors?: boolean;
}

export default function MoreLink({ children, ...other }: MoreLinkProps) {
  return (
    <Link href={other.href} legacyBehavior>
      <LinkCore {...other}>
        {children} <FontAwesomeIcon icon={faArrowRight} />
      </LinkCore>
    </Link>
  );
}
