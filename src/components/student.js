import { useParams } from "react-router-dom";

function Student() {
    const params = useParams();
    return <h1>Hello {params.name}</h1>
}
export default Student;