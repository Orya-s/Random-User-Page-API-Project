/* Data Model
This model is in charge of handling all data related functionalities, it should make all the API's request 
and able to generate a user’s data.  */



let User: {     // user type
    fname:string,
    lname:string,
    pic:string,
    city:string,
    state:string
}

let Data: {     // data type
    ye:string,
    bacon:string,
    pokemon:typeof Pokemon,
    user:typeof User,
    friends:typeof Friend[]
}

let Pokemon: {      // pokemon type
    pokName:string,
    pokImg:string 
}

let Friend: {       // friend type
    fname:string,
    lname:string
}


// APIs
class api {
    
    // YE
    private async YeApiCall(errCount:number = 0) {
        let ye:any;

        try {
            ye = await $.ajax({
                method: "GET",
                url: `https://api.kanye.rest`,    
                success: (data) => data
            })
        } catch (error) {
            return await this.errorHandler(error, errCount, this.BaconApiCall)
        }

        return ye
    }

    // Bacon Ipsum
    private async BaconApiCall(errCount:number = 0) {
        let bacon:any;

        try {
            bacon = await $.ajax({
                method: "GET",
                url: `https://baconipsum.com/api/?type=meat-and-filler&paras=1`,    
                success: (data) => data
            })
        } catch (error) {
            return await this.errorHandler(error, errCount, this.BaconApiCall)
        }

        return bacon
    }

    // Pokemon
    private async PokemonApiCall(errCount:number = 0) {
        const pokemonID = Math.floor(Math.random() * 904) + 1
        let pokemon:any;
    
        try {
            pokemon = await $.ajax({
                method: "GET",
                url: `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`,    
                success: (data) => data
            })
        } catch (error) {
            return await this.errorHandler(error, errCount, this.PokemonApiCall)
        }

        return pokemon
    }

    // Users
    private async UserApiCall(errCount:number = 0) {
        let users:any;
        
        try {
            users = await $.ajax({
                method: "GET",
                url: `https://randomuser.me/api/?results=7`,    
                success: (data) => data
            })
        } catch (error) {
            return await this.errorHandler(error, errCount, this.UserApiCall)
        }

        return users
    }

    private async errorHandler(error:any, errCount:number, OriginalApiCall:Function):Promise<any> {
        if(errCount <= 5) {
            errCount++;
            console.warn(error);
            console.log("trying again...");
            console.log(`Attempt number ${errCount}`);
            return await OriginalApiCall(errCount)
        }
        else {
            console.warn(error);
            console.log("Can't load data, error in server");
        }
    }

    private getUserInfo(users: Object[]):typeof User {      // sets user data
        const mainUser:any = users[0];
        const mainUserInfo:typeof User = {
            fname: mainUser.name.first,
            lname: mainUser.name.last,
            pic: mainUser.picture.large,
            city: mainUser.location.city,
            state: mainUser.location.state
        }
        return mainUserInfo
    }
    
    private getFriendsInfo(users: any):typeof Friend[] {      // sets friends data
        let FriendsData:typeof Friend[] = [];
        for (let i = 1; i < 7; i++) {
            let f:typeof Friend = {fname: users[i].name.first, lname: users[i].name.last}
            FriendsData.push(f)
        }
        return FriendsData;
    }

    private getPokemonInfo(pokemon: any):typeof Pokemon {       // sets pokemon data 
        const poke:typeof Pokemon = {
            pokName: pokemon.name,
            pokImg: pokemon.sprites.front_default
        }
        return poke
    }

    async callAll() {
        let result:typeof Data = {
            ye: "",
            bacon: "",
            pokemon: {pokName:"", pokImg:""},
            user: {fname: "", lname: "", pic: "", city: "", state: ""},
            friends: []
        };

        const ye = this.YeApiCall()
        const bacon = this.BaconApiCall()
        const pokemon = this.PokemonApiCall()
        const users = this.UserApiCall()

        const getUser = this.getUserInfo
        const getFriends = this.getFriendsInfo
        const getPokemon = this.getPokemonInfo

    
        await Promise.all([ye, bacon, pokemon, users])
        .then(function (results) {
            const allUsers = results[3].results;

            result = {
                ye: results[0].quote,
                bacon: results[1],
                pokemon: getPokemon(results[2]),
                user: getUser(allUsers),
                friends: getFriends(allUsers)
            }
        })

        return result
    }

}






// //override

// processData(rawData: any){
//     this.userList = JSON.parse(JSON.stringify(rawData))

//     this.userList =  this.userList.map( u =>  (this.computeUser(u)))
//     this.mainUser = this.userList[0]
//     this.userList.shift()

//     return this
// }

// computeUser(rawUser: any){
//     let user: typeof User = {
//         fname: rawUser.name.first,
//         lname:  rawUser.name.last,
//         picture: rawUser.picture.thumbnail, 
//         city:  rawUser.location.city,
//         state: rawUser.location.state,
//     }

//     return user
// }
