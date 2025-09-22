import { memo } from "react";
import { Link } from "react-router-dom";

type NavigationItem = {
  title: string;
  url: string;
};

interface AsideProps extends React.ComponentProps<"aside"> {
  navigation: NavigationItem[];
  isOpen?: boolean;
  setIsOpen?: VoidFunction;
}

export const AsideComp = ({
  navigation,
  isOpen,
  setIsOpen,
  ...props
}: AsideProps) => {
  return (
    <aside
      className={`md:hidden fixed top-0 left-0 h-[100dvh] z-50 w-64 bg-eco-light shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } flex flex-col justify-between`}
      {...props}
    >
      <img
        src="/gnome-1.svg"
        alt="gnome mascot"
        onClick={setIsOpen}
        className="mx-auto mt-2 h-20"
      />

      <ul className="flex flex-col gap-2  items-center justify-center font-primary font-medium">
        {navigation.map((item) => (
          <li
            key={item.url}
            className="w-[95%] p-2 hover:bg-eco-mutated/10 text-center mx-auto rounded transition-colors duration-300"
          >
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <div className="min-h-12"></div>
    </aside>
  );
};

export const Aside = memo(AsideComp);
