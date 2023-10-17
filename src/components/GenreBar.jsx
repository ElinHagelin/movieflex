import { Chart as ChartJS, Tooltip, Legend, LinearScale, BarElement, CategoryScale} from 'chart.js';
ChartJS.register(Tooltip, Legend, LinearScale, BarElement, CategoryScale);
import { Bar } from 'react-chartjs-2'
import { getMovieGenre } from '../data/getMovies.js';

const GenreBar = () => {
    const genreBarConfig = getMovieGenre()
    return (
        <section>
            <Bar data={genreBarConfig} />
        </section>
    )
}

export default GenreBar