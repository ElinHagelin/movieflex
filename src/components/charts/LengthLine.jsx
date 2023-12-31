import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import getMovieRuntime from '../../data/chartConfigs/lengthLineConfig.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LengthLine = () => {
	const lengthLineConfig = getMovieRuntime();

	const options = {
		scales: {
			x: {
				title: {
					display: true,
					text: 'Movies',
				},
			},
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: 'Minutes',
				},
			},
		},
	};

	return (
		<section className='chart'>
			<Line options={options} data={lengthLineConfig} />
		</section>
	);
};

export default LengthLine;
