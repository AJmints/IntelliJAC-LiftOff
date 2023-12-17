import React, { useEffect, useState } from "react";
import "../styles/NumberOfTheDay.css";
import axios from 'axios';

const NumberOfTheDay = () => {
  const [numberData, setNumberData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.math.tools/numbers/nod");
        setNumberData(response.data.contents.nod); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!numberData) {
    return <div>Data is missing or in an unexpected format.</div>;
  }

  const { numbers } = numberData;

  return (
    <div>
      <h1>Number of the Day</h1>
      <p>
        Number: {numbers.number}
        <br />

        Cardinal: {numbers.names.cardinal.display}
        <br />
        Ordinal: {numbers.names.ordinal.display}
        <br />
        US Currency: {numbers.names.us_currency.display}
        <br />
        Binary: {numbers.bases.binary.value}
      </p>
    </div>
  );
};

export default NumberOfTheDay;
