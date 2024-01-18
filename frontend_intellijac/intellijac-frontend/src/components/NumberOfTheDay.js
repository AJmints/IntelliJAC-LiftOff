import React, { useEffect, useState } from "react";
import "../styles/NumberOfTheDay.css";
import axios from 'axios';

const NumberOfTheDay = () => {
  const [todayData, setTodayData] = useState(null);
  const [yesterdayData, setYesterdayData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (date) => {
    try {
      const response = await axios.get(`https://api.math.tools/numbers/nod?date=${date}`);
      return response.data.contents.nod;
    } catch (error) {
      console.error(`Error fetching data for ${date}:`, error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 864e5).toISOString().split('T')[0]; // Subtract 1 day in milliseconds

      const [todayResponse, yesterdayResponse] = await Promise.all([
        fetchData(today),
        fetchData(yesterday),
      ]);

      setTodayData(todayResponse);
      setYesterdayData(yesterdayResponse);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!todayData || !yesterdayData) {
    return <div>Data is missing or in an unexpected format.</div>;
  }

  return (
    <div>
  <div className="container">
    <h1>Number of the Day</h1>

    {loading && <div className="loading">Loading...</div>}

    {!todayData || !yesterdayData ? (
      <div className="error">Data is missing or in an unexpected format.</div>
    ) : (
      <>
        <h2>Today</h2>
        <p>
          Number: {todayData.numbers.number}
          <br />
          Cardinal: {todayData.numbers.names.cardinal.display}
          <br />
          Ordinal: {todayData.numbers.names.ordinal.display}
          <br />
          US Currency: {todayData.numbers.names.us_currency.display}
          <br />
          Binary: {todayData.numbers.bases.binary.value}
        </p>

        <h2>Yesterday</h2>
        <p>
          Number: {yesterdayData.numbers.number}
          <br />
          Cardinal: {yesterdayData.numbers.names.cardinal.display}
          <br />
          Ordinal: {yesterdayData.numbers.names.ordinal.display}
          <br />
          US Currency: {yesterdayData.numbers.names.us_currency.display}
          <br />
          Binary: {yesterdayData.numbers.bases.binary.value}
        </p>
      </>
    )}
  </div>
);
    </div>
  );
};

export default NumberOfTheDay;