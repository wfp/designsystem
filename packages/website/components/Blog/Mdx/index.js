import Flex from './Flex';
import Image from './Image';
import Link from './Link';
import Video from './Video';
import Wrapper from './Wrapper';
import AnaboxSmart from './Buttons/AnaboxSmart';
import BigButton from './Buttons/BigButton';
import Tray from './Buttons/Tray';
import ColorLed from './Buttons/ColorLed';
import Contact from './Contact';
import CodeBlock from './CodeBlock';
import UsbcConnector from './Buttons/UsbcConnector';
import ResetButton from './Buttons/ResetButton';
import Logos from './Logos';
import {
  Button,
  MdxComponents,
  BlockNotification,
  Blockquote,
} from '@un/react';

import FaviconGenerator from '../../../_posts/Favicons/FaviconGenerator';

const { code, /*pre,*/ ...mdxComponentsWithoutCode } = MdxComponents;
const components = {
  ...mdxComponentsWithoutCode,
  Video,
  Flex,
  img: Image,
  //a: Link,
  FaviconsGenerator: FaviconGenerator,
  AnaboxSmart,
  Contact,
  code: code,
  pre: (e) => <CodeBlock {...e} OrginalCode={code} />,
  Meta: Flex,
  BigButton,
  Blockquote,
  Button,
  Link,
  ResetButton,
  Logos,
  UsbcConnector,
  ColorLed,
  Tray,
  //wrapper: Wrapper,
};

export default components;
