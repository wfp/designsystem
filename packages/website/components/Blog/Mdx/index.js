import Flex from './Flex';
import Image from './Image';
import Link from './Link';
import Video from './Video';
import Wrapper from './Wrapper';
import Contact from './Contact';
import Colors from './Colors';
import Logos from './Logos';
import Figma from './Figma';
import { DoUse, DoNotUse } from './DoUse';
import FigmaImage from './FigmaImage';
import Storybook from './Storybook';
import { CodeBlock, Pre } from './CodeBlockLive';
import Typeset from './Typeset';
import Spacing from './Typeset/Spacing';
import { H1, H2, H3, H4, H5 } from './Headings';
import IconList from './Icons/IconListNew';
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
  a: Link,
  Figma,
  FigmaImage,
  Colors,
  Storybook,
  FaviconsGenerator: FaviconGenerator,
  Contact,
  //CodeBlockLive,
  DoUse,
  DoNotUse,
  //code: code,
  //pre: (e) => <CodeBlock {...e} OrginalCode={code} />,
  //code: CodeBlockLive,

  pre: Pre /*(props) => {
    console.log('ppppr', props);
    return <div {...props} />  */,
  code: code,

  Meta: Flex,
  Blockquote,
  BlockNotification,
  Button,
  CodeBlock,
  IconList,
  Link,
  Logos,
  TextInput,
  Spacing,
  Typeset,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  //wrapper: Wrapper,
};

export default components;
