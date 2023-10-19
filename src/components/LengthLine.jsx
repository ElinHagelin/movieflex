import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getMovieRuntime } from '../data/chartConfigs/lengthLineConfig.js';


ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

const LengthLine = () => {
    const lengthLineConfig = getMovieRuntime()

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Runtime',
            },
        },
        scales: {
            x: {
              title: {
                display: true,
                text: 'Filmer',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Minuter',
              },
            },
          },
    };

    return (
        <section>
            <Line options={options} data={lengthLineConfig} />
        </section>
    )
}

export default LengthLine