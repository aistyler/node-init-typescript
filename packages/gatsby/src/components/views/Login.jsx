/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

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
    <label>
      {t("login.email")}:
      <input value={identifier} onChange={onChangeIdentifier} type="input" disabled={loading} />
    </label>
    <br />
    <label>
      {t("login.password")}:
      <input value={password} onChange={onChangePassword} type="password" disabled={loading} />
    </label>
    <br />
    <button type="button" onClick={onSubmit}  disabled={loading}>
      {t("login.submit")}
    </button>
    {loading && <p>Loading...</p>}
    {error && <p> {error} </p>}
  </>
);

export default View;
