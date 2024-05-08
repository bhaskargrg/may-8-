
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://www.course-api.com/react-tours-project";
import "./index.css"

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
 const deleteTour = (id) => {
    const newTours=tours.filter((tour)=>tour.id!==id);
    setTours(newTours);
 };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setLoading(false);
      setTours(toursData);
    } catch (error) {
      console.error("Error bro!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  const handleRefresh=()=>{
    fetchData();
  }
  if(tours.length<=0){
    return (
      <main>
        <div className="title">
          <h2>No tour availabel</h2>
          <button className="btn" onClick={handleRefresh}>Refresh</button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
