import { useState } from "react";
import { Aside } from "./aside";
import { RiMenu3Line } from "react-icons/ri";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAside = () => setIsOpen((prev) => !prev);

  return (
    <header className="w-full px-2 flex items-center justify-between text-base">
      <div className="flex items-center gap-2">
        <img
          className="object-cover pointer-events-none max-h-16"
          src="/gnome-1.svg"
          alt="gnome mascot"
        />
        <span className="font-primary font-bold">EcoGarden</span>
      </div>

      <NavItems />

      <span className="cursor-pointer hover:bg-eco-mutated/10 rounded-full p-2 transition-colors duration-300 md:hidden">
        <RiMenu3Line onClick={toggleAside} className="size-6" />
      </span>

      <Aside
        isOpen={isOpen}
        navigation={[
          { title: "Sobre", url: "#about" },
          { title: "Recursos", url: "#features" },
          { title: "Login", url: "/login" },
          { title: "Localizar", url: "/map" },
        ]}
        setIsOpen={toggleAside}
      />
    </header>
  );
};

const NavItems = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-4 font-primary font-medium text-sm">
        <li className="cursor-pointer hover:text-eco-green-400 transition-colors duration-300">
          Sobre
        </li>
        <li className="cursor-pointer hover:text-eco-green-400 transition-colors duration-300">
          Recursos
        </li>
        <li className="cursor-pointer hover:text-eco-green-400 transition-colors duration-300">
          Login
        </li>
        <li className="py-2 px-4 bg-eco-green-500 rounded-full text-eco-light cursor-pointer transition-colors duration-300 hover:bg-eco-green-400">
          Localizar
        </li>
      </ul>
    </nav>
  );
};
