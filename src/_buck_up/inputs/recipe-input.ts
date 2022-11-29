import { Field, InputType } from "type-graphql";
import { RecipeType } from "../types/recipe-type";


@InputType()
export class RecipeInput implements Partial<RecipeType> {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}