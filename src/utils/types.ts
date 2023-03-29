export interface UserProfile {
    login: string,
    firstName: string,
    lastName: string,
    roles: string[]
}

export interface UserRegister {
    login: string,
    firstName: string,
    lastName: string,
    password: string
}

export enum UpdateUserAction {
    editUser = 'editUser', changePassword = 'changePassword', default = ''
}

// export interface ReduxState {
//     user: UserProfile,
//     token: string
// }