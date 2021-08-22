import React from "react";
import { WithT } from "i18next";

import View from "@/component-views/AuthButton";

interface Props extends WithT {
  user?: {
    id: string;
    username: string;
  };
}

const AuthButton: React.FC<Props> = ({ user, t }) => {
  return <View user={user} t={t} />;
};

export { AuthButton };
