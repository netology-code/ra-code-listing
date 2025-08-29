import { Link, NavLink } from "react-router";

import { RECIEPS_ROUTE, HOME_ROUTE, CONTACTS_ROUTE } from "../../config/routes";

export const MainMenu = () => {
  const style = {
    display: "flex",
    gap: "20px",
  };
  return (
    <div style={style}>
      <Link to={HOME_ROUTE}>Главная</Link>
      <NavLink
        className={({ isActive }) => (isActive ? `active` : "")}
        to={RECIEPS_ROUTE}
      >
        Рецепты
      </NavLink>
      <Link to={CONTACTS_ROUTE}>Контакты</Link>
    </div>
  );
};
