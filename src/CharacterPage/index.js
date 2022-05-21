import { useParams } from "react-router-dom";

const CharacterPage = ()=>{
    // const params = useParams()
    const {id} = useParams()
    return (
        // <p>{params.id}</p>
        <p>{id}</p>
    )
}
   




export default CharacterPage;

// ta strona pojawi się jak wejdę w route z id postaci