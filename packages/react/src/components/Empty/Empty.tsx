import React from 'react';
import type { PropsWithChildren } from 'react';
import classnames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import { IIcon } from '../../typesLegacy/utils';

type EmptyProps = PropsWithChildren<{
  title: React.ReactNode;
  kind?: 'undefined' | 'large';
  icon?: IIcon | React.ReactNode;
  button?: React.ReactNode;
  className?: Argument;
  components?: { Icon: React.ReactNode; Text: React.ReactNode };
}>;

const Icon: React.FC<EmptyProps> = ({ icon }) => {
  const { prefix } = useSettings();
  return <div className={`${prefix}--empty__icon`}>{icon}</div>;
};

const Text: React.FC<EmptyProps> = ({ title, children }) => {
  const { prefix } = useSettings();
  return (
    <div className={`${prefix}--empty__text`}>
      {title && <h2>{title}</h2>}
      <p>{children}</p>
    </div>
  );
};

/** The Empty component can be used whenever a section should indicate that there is no content available. This can be the case for a empty list table or search results. */
const Empty: React.FC<EmptyProps> = ({
  button,
  children,
  className,
  components = {},
  icon,
  title,
  kind = 'large',
  ...other
}) => {
  const { prefix } = useSettings();

  const classNames = classnames(
    {
      [`${prefix}--empty`]: true,
      [`${prefix}--empty--${kind}`]: kind,
    },
    className
  );

  const defaultComponents = { Icon, Text };

  const allComponents = {
    ...defaultComponents,
    ...components,
  };

  return (
    <div className={classNames} {...other}>
      <allComponents.Icon icon={icon} />
      <allComponents.Text title={title} children={children} />
      <div className={`${prefix}--empty__button`}>{button}</div>
    </div>
  );
};

export default Empty;
