import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import classes from "../css/FindingsOverTime.module.css";
import ShowDeatilLogo from "../../../UI/ShowDetailLogo";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "left",
      align: "center",
      labels: {
        boxWidth: 0,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Date",
        color: "black",
        font: {
          weight: "bold",
          style: "italic",
          size: 16,
        },
      },
    },
    y: {
      title: {
        display: true,
        text: "Findings",
        color: "black",
        font: {
          weight: "bold",
          style: "italic",
          size: 16,
        },
      },
    },
  },
};

export default function FindingsOverTime({ findingsOverTime }) {
  const labels = [
    "Aug 2023",
    "Sep 2023",
    "Oct 2023",
    "Nov 2023",
    "Dec 2023",
    "Jan 2024",
    "Feb 2024",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "",
        data: labels.map((key) => findingsOverTime[key][0]),
        borderColor: "rgb(185, 71, 0)",
        backgroundColor: "rgba(255, 98, 0, 0.6)",
      },
    ],
  };
  return (
    <main className={classes.main}>
      <div className={classes.upper}>
        <h3 className={classes.title}>Findings Over Time</h3>
        <ShowDeatilLogo />
      </div>
      <Line options={options} data={data} />
    </main>
  );
}
