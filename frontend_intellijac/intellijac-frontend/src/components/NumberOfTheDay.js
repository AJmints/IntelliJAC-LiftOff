import React, { useEffect, useState } from "react";
import "../styles/NumberOfTheDay.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div style= {{backgroundColor: "#DBCDF0"}}>
      <h1 style= {{ color: "#80202B"}}><u>!! Here Is The Number For Today !!</u></h1>
      <br />
      <p style={{ textAlign: "center", color: "#4FB06D", fontSize: "20px"}}>
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
      <br />
      <Link to="/">Go to HomePage</Link>
    </div>
  );
};

export default NumberOfTheDay;
