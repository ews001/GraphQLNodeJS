import { Query, Resolver } from "type-graphql";
import { UserType } from "./user.types";

@Resolver(of => UserType)
export class UserResolver {
    private readonly items: UserType[] = GetExamples();

    @Query(returns => UserType, { nullable: true })
    async user(): Promise<UserType | undefined> {
        return this.items[0];
    }

    @Query(returns => [UserType], { description: "Get all the recipes from around the world " })
    async Users(): Promise<UserType[]> {
        return this.items;
    }
}

export function GetExamples(): UserType[] {
    return [{ create_at: "", etc: "", names: "jesus donaldo" }, { create_at: "", etc: "", names: "sanchez inzunza" }];

}