import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import Link from 'next/link';
import { Link as LinkCore } from '@un/react';

export default function MoreLink({ children, ...other }) {
  return (
    <Link href={other.href}>
      <LinkCore {...other}>
        {children} <FontAwesomeIcon icon={faArrowRight} />
      </LinkCore>
    </Link>
  );
}
