import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
    rates: null,
    date: null,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest");

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { rates, date } = await response.json();

        console.log(response);

        setRatesData({
          status: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({ status: "error" });
      }
    };

    setTimeout(fetchRates, 500);
  }, []);

  return ratesData;
};
