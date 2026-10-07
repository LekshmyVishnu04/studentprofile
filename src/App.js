import { useNavigate } from "react-router-dom";

function App() {
  const studentList = ['john', 'jane', 'bob', 'alice'];
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <h1>Students List </h1>
        <ul>
          {studentList.map((name) => (
            <li key={name}>
              <button className="btn btn-primary" onClick={() => navigate(`/student/${name}`)}>
                {name}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/student/Riya")}
        >
          Go to Riya
        </button>
      </div>

    </div>
  );
}

export default App;
