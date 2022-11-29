import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "Object representing cooking User" })
export class UserType {
    @Field()
    names: string;

    @Field()
    create_at: string;

    @Field()
    etc: string;
}