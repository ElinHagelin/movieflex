import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from 'react-chartjs-2';
import getAllLanguages from '../../data/chartConfigs/languagePieConfig.js';

const LanguagePie = () => {
	const languagePieConfig = getAllLanguages();

	return (
		<section className='chart'>
			<Pie data={languagePieConfig} />
		</section>
	);
};

export default LanguagePie;
