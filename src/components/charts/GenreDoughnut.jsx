import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from 'react-chartjs-2'

import getMovieGenre from '../../data/chartConfigs/genreBarConfig.js';

const GenreDoughnut = () => {
    const genreBarConfig = getMovieGenre()

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Genres',
            },
            legend: {
                // display: false,
            }
        },
    };

    return (
        <section className='chart'>
            <Doughnut options={options} data={genreBarConfig} />
        </section>
    )
}

export default GenreDoughnut