
import { useParams } from "react-router-dom";
import infosContinents from "../../api/infos-continent.json";
import Header from "../../components/Header";


export default function Continent() {

    const { chosenContinent } = useParams()

    let continent = infosContinents.continents[chosenContinent]

    
    return (
        <>
        <Header />
        </>

    )
}