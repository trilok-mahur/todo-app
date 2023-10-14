import React from "react";
import { ColumnHeader } from "../columnHeader/columnHeader.component";
import { ColumnBody } from "../columnBody/columnBody.component";

import './column.css'

export function ColumnComponent(props) {
  return (
    <div className="columns-parent">
      <ColumnHeader {...props} />
      <ColumnBody {...props} />
    </div>
  );
}
