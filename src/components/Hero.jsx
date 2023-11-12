import avocado from "../assets/avocado2.png";
export const Hero = () => {
  return (
    <div className="flex flex-row bg-primary h-[100vh] px-10 py-6">
      <img
        src={avocado}
        alt="Avocado"
        className="w-[30px] h-[30px] mr-3 text-avocado-green font-bold "
      />
      <h1>Avocado Sales</h1>
    </div>
  );
};
