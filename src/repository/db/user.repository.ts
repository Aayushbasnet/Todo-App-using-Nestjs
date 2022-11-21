import { Injectable } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { EntityRepository } from "typeorm";
import { UserRepository } from "../user.repository";
@Injectable()
@EntityRepository(User)
export class UserDbRepository implements UserRepository{
    constructor(){};

    async findUser(id: string): Promise<User> {
        return
    }
}