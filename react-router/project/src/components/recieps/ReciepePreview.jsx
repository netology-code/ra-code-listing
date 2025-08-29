import { Link } from "react-router";

import { reciepeRoute } from "../../config/routes";

export const ReciepePreview = ({ id, name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Link to={reciepeRoute(id)}>Посмотреть</Link>
    </div>
  );
};
