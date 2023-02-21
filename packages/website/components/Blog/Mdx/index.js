import Flex from './Flex';
import Image from './Image';
import Link from './Link';
import Video from './Video';
import Wrapper from './Wrapper';
import Contact from './Contact';
import CodeBlock from './CodeBlock';
import Colors from './Colors';
import Logos from './Logos';
import Figma from './Figma';
import FigmaImage from './FigmaImage';
import Storybook from './Storybook';
import Typeset from './Typeset';

import {
  Button,
  MdxComponents,
  BlockNotification,
  Blockquote,
  TextInput,
} from '@un/react';

import FaviconGenerator from '../../../_posts/Favicons/FaviconGenerator';

const { code, /*pre,*/ ...mdxComponentsWithoutCode } = MdxComponents;
const components = {
  ...mdxComponentsWithoutCode,
  Video,
  Flex,
  img: Image,
  //a: Link,
  Figma,
  FigmaImage,
  Colors,
  Storybook,
  FaviconsGenerator: FaviconGenerator,
  Contact,
  code: code,
  pre: (e) => <CodeBlock {...e} OrginalCode={code} />,
  Meta: Flex,
  Blockquote,
  BlockNotification,
  Button,
  Link,
  Logos,
  TextInput,
  Typeset,
  //wrapper: Wrapper,
};

export default components;
