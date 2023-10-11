import users from "../db/users";
import { I_user } from "../types";

export default (req:Request, res:Response) => {
    const { email, number } = req.query;
    let usersList: I_user[] | [] = users.filter((el:I_user) => el.email.includes(email));
    if(number !== '') usersList = usersList.filter((el:I_user) => el.number === number);
    res.json(usersList);
};