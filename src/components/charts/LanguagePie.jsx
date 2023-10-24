import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'
import { motion } from 'framer-motion';
import getAllLanguages from '../../data/chartConfigs/languagePieConfig.js';

const LanguagePie = () => {

    const languagePieConfig = getAllLanguages()

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Languages',
                color: 'black'
            }
        },
    };

    return (
        <section className='chart'>
            <Pie options={options} data={languagePieConfig} />
        </section>
    )
}

export default LanguagePie
