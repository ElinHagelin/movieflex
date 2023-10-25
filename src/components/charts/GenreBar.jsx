import { Chart as ChartJS, Tooltip, Legend, LinearScale, BarElement, CategoryScale} from 'chart.js';
ChartJS.register(Tooltip, Legend, LinearScale, BarElement, CategoryScale);
import { Bar } from 'react-chartjs-2'
import getMovieGenre from '../../data/chartConfigs/genreBarConfig.js';

const GenreBar = () => {
    const genreBarConfig = getMovieGenre()

    const options = {
        // indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Genres',
            },
        },
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

    return (
        <section className='chart'>
            <Bar options={options} data={genreBarConfig} />
        </section>
    )
}

export default GenreBar