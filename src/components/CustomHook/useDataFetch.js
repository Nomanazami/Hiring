import { useEffect } from "react";

const useDataFetch = (apiUrl)=>{
    
}
    const apiCall= ()=>{
        axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    }

    useEffect(()=>{

    },[])