import { Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, ArcElement } from 'chart.js';
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(ArcElement);

interface DatasetType {
  data: number[];
  backgroundColor: string[];
}

export const PieChart = () => {
  const labels = ['2010', '2012', '2014', '2016', '2018'];
  const datasets: Array<DatasetType> = [
    {
      data: [2000, 4000, 2300, 2222, 3333],
      backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
    },
  ];
  return (
    <Pie
      data={{
        labels: labels,
        datasets: datasets,
      }}
    />
  );
};
