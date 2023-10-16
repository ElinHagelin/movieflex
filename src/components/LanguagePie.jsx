import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from 'react-chartjs-2'
import { getAllLanguages } from "../data/getMovies.js";

const LanguagePie = () => {

    const languagePieConfig = getAllLanguages()
    
    console.log(languagePieConfig)

    return (
        <section>
            <Pie data={languagePieConfig} />
        </section>
    )
}

export default LanguagePie
