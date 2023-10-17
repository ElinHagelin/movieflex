import { Chart as ChartJS, Tooltip, Legend, LinearScale, BarElement, CategoryScale} from 'chart.js';
ChartJS.register(Tooltip, Legend, LinearScale, BarElement, CategoryScale);
import { Bar } from 'react-chartjs-2'
import { getMoviesPerMonth } from '../data/getMovies.js';

const MonthBar = () => {
    
    const MonthBarConfig = getMoviesPerMonth()

    return (
        <section>
            <Bar data={MonthBarConfig} />
        </section>
    )
}

export default MonthBar

