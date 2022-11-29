
import { Arg, FieldResolver, Int, Mutation, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import { RecipeInput } from "../inputs/recipe-input";
import { createRecipeSamples } from "../samples/recipe-samples";
import { RecipeType } from "../types/recipe-type";
  
  
  @Resolver(of => RecipeType)
  export class RecipeResolver implements ResolverInterface<RecipeType> {
    private readonly items: RecipeType[] = createRecipeSamples();
  
    @Query(returns => RecipeType, { nullable: true })
    async recipe(@Arg("title") title: string): Promise<RecipeType | undefined> {
      return  this.items.find(recipe => recipe.title === title);
    }
  
    @Query(returns => [RecipeType], { description: "Get all the recipes from around the world " })
    async recipes(): Promise<RecipeType[]> {
      return  this.items;
    }
  
    // @Mutation(returns => RecipeType)
    // async addRecipe(@Arg("recipe") recipeInput: RecipeInput): Promise<RecipeType> {
    //   const recipe = Object.assign(new RecipeType(), {
    //     description: recipeInput.description,
    //     title: recipeInput.title,
    //     ratings: [],
    //     creationDate: new Date(),
    //   });
    //   this.items.push(recipe);
    //   return recipe;
    // }
  
    @FieldResolver()
    ratingsCount(
      @Root() recipe: RecipeType,
      @Arg("minRate", type => Int, { defaultValue: 0.0 }) minRate: number,
    ): number {
      return recipe.ratings.filter(rating => rating >= minRate).length;
    }
  }