import React from "react";
import { WithT } from "i18next";

import { Link } from "@/components";

interface Props extends WithT {
  user?: {
    id: string;
    username: string;
  };
}

const View: React.FC<Props> = ({ user, t }) => {
  return (
    <>
      {!user && <Link to="/auth/login">{t("auth-button.login")}</Link>}
      {user && <Link to="/auth/logout">{t("auth-button.logout")}</Link>}
    </>
  );
};

export default View;
