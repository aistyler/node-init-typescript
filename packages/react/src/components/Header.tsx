import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {}

const Header: React.FC<Props> = ({ children, ...rest }) => {
  return <header {...rest}>{children}</header>;
};

export { Header };
