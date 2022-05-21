import { useEffect, useState } from "react";

const usePostCodes = () => {
  const [randomPostCode, setRandomPostCode] = useState({
    state: "loading",
    postcode: null,
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("api.postcodes.io/random/postcodes");

        if (!response.ok) {
          throw new Error(response.statusText);
        };

        const { postcode } = await response.json();

        console.log(response);

        setRandomPostCode({
          status: "success",
          postcode,
        });
      } catch (error){
        setRandomPostCode({ status: "error" });
        console.error(error);
      };
    };

    fetchRates();
  }, []);

  return randomPostCode;
};

export default usePostCodes;
