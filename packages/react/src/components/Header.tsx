import React from "react";

import s from "./header.module.css";

interface Props extends React.HTMLProps<HTMLDivElement> {}

const Header: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <header className={s.header} {...rest}>
      {children}
    </header>
  );
};

export { Header };
