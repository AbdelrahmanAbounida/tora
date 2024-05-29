import { Field, InputType, Int } from "@nestjs/graphql";
import { CreateQLUser } from "./create-userql.input";
import { PartialType } from "@nestjs/mapped-types";
import { UserRole } from "../constants/user-role.enum";


@InputType()
export  class UpdateQLUser extends PartialType(CreateQLUser){

    @Field(type=>Int)
     id: number 

     @Field(type => UserRole, {nullable:true,defaultValue: UserRole.USER})
     role?: UserRole
}