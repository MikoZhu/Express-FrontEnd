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
      console.log(filteredData);
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
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            step="0.01"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            step="0.01"
          />
        </label>
        <button onClick={fetchData}>Fetch Data</button>
      </form>
      <ul>
        {avocadoData.map((avocado) => (
          <li key={avocado.id}>
            <div>
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
