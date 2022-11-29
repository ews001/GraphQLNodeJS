import { Arg, Query, Resolver, ResolverInterface, Root } from "type-graphql";
import { createUserExample } from "../samples/recipe-samples";
import { User } from "../types/user.types";

  @Resolver(User)
  export class UserResolver { 
  
    private readonly items: User[] = createUserExample();
  
    @Query(returns => User)
    async user(@Arg("id") id: string) {
      const recipe =  this.items[0];
      return recipe;
    }
  
    @Query(returns => [User])
    users() {
      return this.items;
    }
  }