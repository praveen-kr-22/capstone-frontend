import { Bar } from "react-chartjs-2";
import Box from "./Box";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
    },
  },
};

export default function FindingByApp({ findingsApp }) {
  const labels = Object.keys(findingsApp);

  const data = {
    labels,
    datasets: [
      {
        label: "Critical",
        data: labels.map((key) => findingsApp[key][0]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "High",
        data: labels.map((key) => findingsApp[key][1]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Box title="Finding By Application" showDetail={true}>
      <Bar options={options} data={data} height={250} />
    </Box>
  );
}
