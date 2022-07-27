import React, {useState, useEffect } from "react";
import data from './Assets/data.json'
import JobBoard from "./components/JobBoard";

function App() {
const [jobs, setJobs] = useState([data]);

useEffect(() => setJobs(data), []);

console.log(jobs);

  return (
    <div className="App"> 
    <header className="bg-navy-200 mb-12"> <img src='/images/bg-header-desktop.svg' alt='bg-header'/></header>
    {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job => 
          <JobBoard job={job} key={job.id}/>)
        ))
      
    }
    </div>
  );
}

export default App;
