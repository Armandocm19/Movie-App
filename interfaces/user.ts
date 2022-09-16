export interface IUser {
    _id: string;
    name: string;
    email: string;
    password?: string;

    createdAt?: string;
    updated?: string;
}