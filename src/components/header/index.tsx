import Gnome1 from "../../assets/gnome-1.svg";

export const Header = () => {
  return (
    <header className="w-full px-4 flex items-center justify-between text-base">
      <div className="flex items-center gap-2">
        <img
          className="object-contain pointer-events-none"
          src={Gnome1}
          alt="gnome mascot"
        />
        <span className="font-primary font-bold">EcoGarden</span>
      </div>
      <nav>
        <ul className="flex items-center gap-4 font-primary font-medium">
          <li className=" cursor-pointer hover:text-eco-green-400 transition-colors duration-300">
            Sobre
          </li>
          <li className=" cursor-pointer hover:text-eco-green-400 transition-colors duration-300">
            Recursos
          </li>
          <li className=" cursor-pointer hover:text-eco-green-400 transition-colors duration-300">
            Login
          </li>
          <li className="py-2 px-4 bg-eco-green-500 rounded-full text-eco-light cursor-pointer transition-colors duration-300 hover:bg-eco-green-400">
            Localizar
          </li>
        </ul>
      </nav>
    </header>
  );
};
