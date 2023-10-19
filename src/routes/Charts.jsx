import GenreBar from "../components/charts/GenreBar.jsx"
import LanguagePie from "../components/charts/LanguagePie.jsx"
import LengthLine from "../components/charts/LengthLine.jsx"
import MonthBar from "../components/charts/MonthBar.jsx"

const Charts = () => {

    return (
        <>
        <LanguagePie />
        <MonthBar />
        <LengthLine />
        <GenreBar />
        </>
    )
}

export default Charts