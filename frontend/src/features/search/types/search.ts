// import { UserEntity } from "../../home/entities/user";

// export type UserSearch = Pick<
//   UserEntity,
//   "photoProfile" | "fullName" | "username" | "bio"
// > & {
//   isFollowed: true;
// };

export type UserSearch = {
    username: string;
    fullName: string;
    photoProfile: string;
    bio: string;
    isFollowed: true;
}