import avocado from "../assets/avocado2.png";
export const Hero = () => {
  return (
    <div className="flex flex-row bg-primary px-10 py-6">
      <img
        src={avocado}
        alt="Avocado"
        className="w-[30px] h-[30px] mr-2 text-avocado-green "
      />
      <h1 className="text-xl font-extrabold text-avocado-green">
        Avocado Sales
      </h1>
    </div>
  );
};
