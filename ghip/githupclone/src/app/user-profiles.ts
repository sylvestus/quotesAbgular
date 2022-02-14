export class UserProfiles {
    constructor(
        public avatar_url: string,
        public login :string,
        public public_repos:number,
        public followers: number,
        public following: number,
        public location:string,
        public email: string,
        public created_at: string
     ){}
}
