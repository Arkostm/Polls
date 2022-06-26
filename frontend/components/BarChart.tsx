import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);

interface DatasetType {
  data: number[];
  backgroundColor: string[];
}

export const BarChart = () => {
  const today = new Date();
  const labels = [0, 1, 2, 3, 4, 5]
    .map((num) => today.getFullYear() - num)
    .reverse();
  const datasets: Array<DatasetType> = [
    {
      data: [0, 10, 20, 30, 40, 50],
      backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
    },
  ];

  return (
    <Bar
      data={{
        labels: labels,
        datasets: datasets,
      }}
    />
  );
};
