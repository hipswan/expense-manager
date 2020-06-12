import React from "react";
import Update from "./Update";
import Delete from "./Delete";


function TableRow(props) {
  console.log(props);
  return (
    <tr>
      <td className="counterCell"></td>
      <td className="desc-col">{props.record.description}</td>
      <td className="button-col">{props.record.amount}</td>
      <td className="button-col">{props.record.month}</td>
      <td className="button-col">{props.record.year}</td>
      <td className="button-col"><Update expense={props.record} /></td>
      <td className="button-col"><Delete expense={props.record} /></td>
    </tr>
  );
}

export default TableRow;