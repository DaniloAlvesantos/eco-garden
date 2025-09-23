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
      className={`mobile-sidebar bg-eco-light shadow-lg d-flex flex-column justify-content-between ${
        isOpen ? "show" : ""
      }`}
      {...props}
    >
      <img
        src="/gnome-1.svg"
        alt="gnome mascot"
        onClick={setIsOpen}
        className="mx-auto mt-2"
        style={{ height: '5rem', cursor: 'pointer' }}
      />

      <ul className="d-flex flex-column list-unstyled font-primary fw-medium text-center">
        {navigation.map((item) => (
          <li
            key={item.url}
            className="mx-auto mb-2 p-2 rounded transition-colors"
            style={{ 
              width: '95%',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(94, 94, 94, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Link to={item.url} className="text-decoration-none text-inherit">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ minHeight: '3rem' }}></div>
    </aside>
  );
};

export const Aside = memo(AsideComp);