import { User } from "src/entities/user.entity";

export interface UserRepository{
    findUser(id:string):Promise<User>
}