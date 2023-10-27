import {
	Chart as ChartJS,
	Tooltip,
	Legend,
	LinearScale,
	BarElement,
	CategoryScale,
} from 'chart.js';
ChartJS.register(Tooltip, Legend, LinearScale, BarElement, CategoryScale);
import { Bar } from 'react-chartjs-2';
import getMoviesPerMonth from '../../data/chartConfigs/monthBarConfig.js';

const MonthBar = () => {
	const options = {
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: 'Movies',
				},
			},
		},
	};

	const MonthBarConfig = getMoviesPerMonth();

	return (
		<section className='chart'>
			<Bar options={options} data={MonthBarConfig} />
		</section>
	);
};

export default MonthBar;
