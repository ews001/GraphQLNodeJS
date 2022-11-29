import { Field, Float, Int, ObjectType ,ID} from "type-graphql";


@ObjectType()
export class User {
  @Field()
  fullName: string;

  @Field()
  creationDate: Date;
}