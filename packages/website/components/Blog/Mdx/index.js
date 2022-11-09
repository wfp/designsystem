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
import Colors from './Colors';
import UsbcConnector from './Buttons/UsbcConnector';
import ResetButton from './Buttons/ResetButton';
import Logos from './Logos';
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
  Colors,
  FaviconsGenerator: FaviconGenerator,
  AnaboxSmart,
  Contact,
  code: code,
  pre: (e) => <CodeBlock {...e} OrginalCode={code} />,
  Meta: Flex,
  BigButton,
  Blockquote,
  BlockNotification,
  Button,
  Link,
  ResetButton,
  Logos,
  UsbcConnector,
  TextInput,
  Typeset,
  ColorLed,
  Tray,
  //wrapper: Wrapper,
};

export default components;
