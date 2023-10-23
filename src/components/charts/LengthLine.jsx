import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import getMovieRuntime from '../../data/chartConfigs/lengthLineConfig.js';


ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

const LengthLine = ({slideVariants, direction}) => {
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
        <section 
            className='chart'
            // variants={slideVariants}
            // initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            // animate="visible"
            // exit="exit"   
        >
            <Line options={options} data={lengthLineConfig} />
        </section>
    )
}

export default LengthLine