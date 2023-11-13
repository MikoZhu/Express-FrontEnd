import avocado from "../assets/avocado3.png";
export const MidSection = () => {
  return (
    <div className="bg-primary px-10 py-6 flex flex-col justify-center items-center z-50">
      <h1 className="font-extrabold text-avocado-green text-3xl z-30">
        "Avocado, your daily green life style."
      </h1>
      <img src={avocado} alt="avocado image" className="z-0 mt-[-15vh]" />
      <h2 className=" text-avocado-green z-30 mt-[-15vh] text-2xl mb-4">
        You can review the avocado sales data here ⬇
      </h2>
      <div className=" text-xl border-[3px] border-avocado-green text-avocado-green text-center">
        <h1 className="mt-5">
          Avocado Sales API is:{" "}
          <strong className="underline">
            https://avocado-sales.onrender.com
          </strong>{" "}
        </h1>
        <br />
        <h3 className="text-avocado-green font-bold text-center">
          Method: Get 🥑
        </h3>
        <br />
        <div className="text-left mx-10">
          <p>
            1. You can review data by pages here:
            <strong className="underline ">
              https://avocado-sales.onrender.com/avocado-sales?page=2
            </strong>
            (The page number is changeable)
          </p>
          <br />
          <p>
            2. You can review data by ID here:
            <strong className="underline">
              https://avocado-sales.onrender.com/avocado-sales/2
            </strong>
            (The ID is changeable)
          </p>
          <br />
          <p>
            3. You can review data by region serach:
            <strong className="underline  ">
              https://avocado-sales.onrender.com/avocado-sales/region/albany
            </strong>
            (The region is changeable)
          </p>
        </div>
        <br />
        <div className="text-left mx-10">
          <h3 className="text-avocado-green font-bold text-center">
            Method: Post 🥑
          </h3>
          <br />
          <p>
            You can add new avocado sales data by post method:
            <strong className="underline">
              https://avocado-sales.onrender.com/avocado-sales
            </strong>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};
