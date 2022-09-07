/* Data Model
This model is in charge of handling all data related functionalities, it should make all the API's request 
and able to generate a user’s data.  */




// APIs


class api {
    
    // YE
    private async YeApiCall() {
        return await $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success: (data) => data
        })
    }

    // Bacon Ipsum
    private async BaconApiCall() {
        return await $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=1',       
            success: (data) => data 
        })
    }

    // Pokemon
    private async PokemonApiCall() {
        const pokemonID = Math.floor(Math.random() * 905)
        return await $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`,
            success: (data) => data
        })
    }

    // Users
    private async UserApiCall() {
        return await $.ajax({
            method: "GET",
            url: `https://randomuser.me/api/?results=7`,
            success: (data) => data
        })
    }

    private getUserInfo(users: any) {      // sets user data
        const mainUser:any = users[0];

        const mainUserInfo:Object = {
            fname: mainUser["name"]["first"],
            lname: mainUser["name"]["last"],
            pic: mainUser["picture"]["thumbnail"],
            city: mainUser["location"]["city"],
            state: mainUser["location"]["state"]
        }
        
        return mainUserInfo
    }
    
    private getFriendsInfo(users: any) {      // sets friends data
        let FriendsData:Object[] = [];
        for (let i = 1; i < 6; i++) {
            FriendsData.push({fname: users[i]["name"]["first"], lname: users[i]["name"]["last"]})
        }
        return {FriendsData};
    }

    private getPokemonInfo(pokemon: any) {       // sets pokemon data 
        return {
            pokName: pokemon["name"],
            pokImg: pokemon["sprites"]["front_default"]
        }
    }

    async callAll() {
        let result = {
            ye: "",
            bacon: "",
            pokemon: {},
            user: {},
            friends: {}
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
            const allUsers = results[3]["results"];
            
            result = {
                ye: results[0]["quote"],
                bacon: results[1],
                pokemon: getPokemon(results[2]),
                user: getUser(allUsers),
                friends: getFriends(allUsers)
            }
        })

        return result
    }

}

