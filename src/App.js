import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";


function App() {

  const [allPeople, setallPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  async function getallPeople() {
    let data = await axios.get(`https://reqres.in/api/users?page=1`);
    if (data.data.data.length) {
      setIsLoading(true);
      setallPeople(data.data.data)

    } else {
      setIsLoading(false);

    }
  }




  return (
    <div className="container text-black ">
      <NavBar getallPeople={getallPeople} />
      {isLoading  ?
        <div className="position-relative">
          <div className="row">
            {allPeople.map((person, index) =>
              <div className="col-md-4  text-center my-5" key={index}>
                <img src={`${person.avatar}`} className=""></img>
                <h1 >{`${person.first_name}` + " " + `${person.last_name}`}</h1>
                <p>{person.email}</p>
              </div>
            )}
          </div>
        </div> : <div className="loader position-absolute top-50 end-50 "></div>}
    </div>
  );
}

export default App;
