import logo from "assets/logo.svg";

export const Header = () => {
  return (
    <header className=" flex gap-4 bg-gray-300">
      <div className="ml-5 mt-3">
        <img src={logo} alt="Logo" width={"50px"} />
      </div>
      <div className="mt-2">
        <h1 className="text-2xl font-bold">General Store</h1>

      </div>
    </header>
  );
};
