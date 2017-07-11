export class User {
    constructor(public email: string, // public tells that email, password, etc. should be also a property of the class User
                public password: string,
                public firstName?: string, //'?' means firstName is an optional field
                public LastName?: string){

    }
}