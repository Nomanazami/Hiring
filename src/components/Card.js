import React, { useEffect, useState } from 'react';
import "./Card.css";

function Card() {
  const [categories, setCategories] = useState([]);
  const [jobs,setJobs] = useState([]);

  const getCategoriesApiCall = () => {
    fetch(
      "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=6499f660d7d3bec5b121e02f"
    )
      .then((res) => res.json())
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      });
  };

  const setJobsApiCall =()=>{
    fetch(
      "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=6499f5ded7d3bec5b121e02b"
    )
    .then((res)=> res.json())
    .then((res)=> {
      setJobs(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    console.log(categories);
    getCategoriesApiCall();
  }, []);


  useEffect(()=>{
    console.log(jobs);
    setJobsApiCall();
    
  },[]);

  return (
    <div className='main'>
    
      <h1>Category</h1>
     <div className='hiring'>
      {categories.slice(0,8).map((ress)=>(
        <div className='card'>
          <p>{ress.views}</p>
          <p>{ress.category.name}</p>
          <p>{ress.country}</p>
          <p>{ress.city}</p>
          <p>{ress.gender}</p>
        </div>
      ))}

     </div>
      <h1>Jobs</h1>
     <div className='hiring'>
      {jobs.slice(0,8).map((ress)=>(
        <div className='card'>
          <p>{ress.companyName}</p>
          <p>{ress.designation}</p>
          <p>{ress.views}</p>
          <p>{ress.salaryCurrency}</p>
          
        </div>
      ))}

     </div>
    </div>
  );
}

export default Card;
