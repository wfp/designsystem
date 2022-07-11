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
import { MdxComponents, BlockNotification } from '@un/react';

const { code, pre, ...mdxComponentsWithoutCode } = MdxComponents;
const components = {
  ...mdxComponentsWithoutCode,
  Video,
  Flex,
  img: Image,
  //a: Link,
  AnaboxSmart,
  Contact,
  pre: CodeBlock,
  Meta: Flex,
  BigButton,
  BlockNotification,
  ResetButton,
  UsbcConnector,
  ColorLed,
  Tray,
  //wrapper: Wrapper,
};

export default components;
