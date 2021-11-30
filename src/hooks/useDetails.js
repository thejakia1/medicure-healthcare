import { useState, useEffect } from "react";

const useDetails= () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return [details, setDetails];
};

export default useDetails;