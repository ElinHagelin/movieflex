
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getMovieRuntime } from '../data/getMovies.js';


ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

const LengthLine = () => {
    const lengthLineConfig = getMovieRuntime()

    return (
        <section>
            <Line data={lengthLineConfig} />
        </section>
    )
}

export default LengthLine