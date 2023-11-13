import { useState, useEffect } from "react";

export const AvocadoSales = () => {
  // https://avocado-sales.onrender.com/
  // API data url
  const [avocadoData, setAvocadoData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const baseURL = "https://avocado-sales.onrender.com";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${baseURL}/avocado-sales/volume/totalVolume?min=${minPrice}&max=${maxPrice}`
      );
      const data = await response.json();
      const filteredData = data.body.filteredData;
      // console.log(filteredData);
      setAvocadoData(filteredData);
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className="bg-avocado-green min-h-screen flex flex-col justify-center items-center text-primary py-10 border-2 border-primary min-w-screen px-5">
      <h1 className="text-xl font-extrabold my-5">
        Avocado Sales API Fetched by Min and Max Price
      </h1>
      <p className="mb-5">
        The min price should be <strong>larger than 0.62</strong> and max price
        should be <strong>less than 1.6</strong>
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col justify-center items-center lg:flex-row"
      >
        <label className="my-3">
          Min Price: $
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="e.g 0.88 "
            className="bg-avocado-green border-2 border-primary mx-3 rounded-full px-3 py-3 focus:outline-none focus:border-avocado-primary focus:ring-1 focus:ring-primary"
          />
        </label>
        <label>
          Max Price: $
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="e.g 1.02"
            className="bg-avocado-green border-2 border-primary mx-3 rounded-full px-3 py-3 focus:outline-none focus:border-avocado-primary focus:ring-1 focus:ring-primary"
          />
        </label>
        <button onClick={fetchData} className="mt-5 text-xl lg:mt-0">
          Fetch Data
        </button>
      </form>
      <ul className="my-5 text-center">
        {avocadoData.map((avocado) => (
          <li key={avocado.id} className="my-3">
            <div className="my-3 border-2 border-primary py-2 px-2">
              <strong>Region:</strong> {avocado.region}
            </div>
            <div>
              <strong>Average Price:</strong> ${avocado.averagePrice.toFixed(2)}
            </div>
            <div>
              <strong>Total Bags Sold:</strong>
              {avocado.totalBagsSold.toFixed(0)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
