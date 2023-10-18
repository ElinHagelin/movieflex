import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'
import { getAllLanguages } from "../data/getMovies.js";

const LanguagePie = () => {

    const languagePieConfig = getAllLanguages()

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Languages',
            },
        },
    };

    return (
        <section>
            <Pie options={options} data={languagePieConfig} />
        </section>
    )
}

export default LanguagePie
