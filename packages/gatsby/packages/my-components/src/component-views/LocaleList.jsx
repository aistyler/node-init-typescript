/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/display-name */
import React from "react";

import "./locale-list.scss";

export default ({ items, defaultValue, onChange }) => (
  <select onChange={onChange} defaultValue={defaultValue} className="form-select-sm locale-select">
    {items.map((e) => (
      <option key={e.code} value={e.code}>
        {e.localName}
      </option>
    ))}
  </select>
);
