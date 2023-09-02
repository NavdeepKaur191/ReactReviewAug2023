import { useState, useEffect } from "react";
import fetch from 'node-fetch';
import "whatwg-fetch";

function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    const response = await window.fetch(url, options);
    try {
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      // console.log("error", error);
      setError(error);
    }
  }

  return [data, error];
}

export default useFetch;
