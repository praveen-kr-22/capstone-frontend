import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Box from "./Box";

import classes from "../css/NewFindings.module.css";

export default function NewFindings({ age }) {
  const downloadPDF = () => {
    const input = document.getElementById("new-finding-table");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("new-finding.pdf");
    });
  };

  return (
    <Box
      title="New Finding"
      downloadPDFHandler={downloadPDF}
      showDownload={true}
    >
      <table className={classes["styled-table"]} id="new-finding-table">
        <thead>
          <tr>
            <th></th>
            <th>Last 24 hours</th>
            <th>Last 7 days</th>
            <th>Last month</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.critical}>Critical</td>
            {age.critical.map((find) => {
              return <td>{find}</td>;
            })}
          </tr>
          <tr>
            <td className={classes.high}>High</td>
            {age.high.map((find) => {
              return <td>{find}</td>;
            })}
          </tr>
          <tr>
            <td className={classes.medium}>Medium</td>
            {age.medium.map((find) => {
              return <td>{find}</td>;
            })}
          </tr>
          <tr>
            <td className={classes.low}>Low</td>
            {age.low.map((find) => {
              return <td>{find}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </Box>
  );
}
