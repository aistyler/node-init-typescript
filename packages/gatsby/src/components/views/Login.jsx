/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { withTranslation } from "react-i18next";

const View = ({
  identifier,
  onChangeIdentifier,
  password,
  onChangePassword,
  onSubmit,
  loading,
  error,
  t,
}) => (
  <>
    {loading && <p>Loading...</p>}
    {error && <p> {error} </p>}
    <label>
      {t("login.email")}:
      <input value={identifier} onChange={onChangeIdentifier} type="input" />
    </label>
    <br />
    <label>
      {t("login.password")}:
      <input value={password} onChange={onChangePassword} type="password" />
    </label>
    <br />
    <button type="button" onClick={onSubmit}>
      {t("login.submit")}
    </button>
  </>
);

export default withTranslation("common")(View);
