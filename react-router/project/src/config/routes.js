export const HOME_ROUTE = "/";

export const RECIEPS_ROUTE = "/recieps";

export const RECIEPE_ROUTE = ":id";

// /recieps/:id -> recieps/23
export const reciepeRoute = (id) => RECIEPS_ROUTE + `/${id}`;

export const CONTACTS_ROUTE = "/contacts";

export const NOT_FOUND_ROUTE = "*";
