import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import classes from "../css/FindingStatus.module.css";
import Box from "./Box";

export default function FindingStatus({ statusInfo }) {
  const downloadPDF = () => {
    const input = document.getElementById("finding-status-table");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("finding-status.pdf");
    });
  };

  return (
    <Box
      title="Finding Status"
      downloadPDFHandler={downloadPDF}
      showDownload={true}
    >
      <table className={classes["styled-table"]} id="finding-status-table">
        <thead>
          <tr>
            <th></th>
            <th>Open</th>
            <th>Mitigated</th>
            <th>False +</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.critical}>Critical</td>
            {statusInfo.critical.map((info, index) => {
              return <td key={index}>{info}</td>;
            })}
          </tr>
          <tr>
            <td className={classes.high}>High</td>
            {statusInfo.high.map((info, index) => {
              return <td key={index}>{info}</td>;
            })}
          </tr>
          <tr>
            <td className={classes.medium}>Medium</td>
            {statusInfo.medium.map((info, index) => {
              return <td key={index}>{info}</td>;
            })}
          </tr>
          <tr>
            <td className={classes.low}>Low</td>
            {statusInfo.low.map((info, index) => {
              return <td key={index}>{info}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </Box>
  );
}
