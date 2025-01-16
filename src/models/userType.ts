export type UserType = {
    id:string
    firstName?: string,
    lastName?: string,
    email: string,
    password: string,
    address?: string,
    phone?: string
}

export type UserRegisterType = {
    id:string,
    email: string,
    password: string
}