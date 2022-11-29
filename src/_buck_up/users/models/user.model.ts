import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field()
  fullName: string;

  @Field()
  creationDate: Date;
}