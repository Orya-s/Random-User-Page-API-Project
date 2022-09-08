"use strict";
/* Data Model
This model is in charge of handling all data related functionalities, it should make all the API's request
and able to generate a user’s data.  */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let User;
let Data;
let Pokemon;
let Friend;
// APIs
class api {
    // YE
    YeApiCall(errCount = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            let ye;
            try {
                ye = yield $.ajax({
                    method: "GET",
                    url: `https://api.kanye.rest`,
                    success: (data) => data
                });
            }
            catch (error) {
                return yield this.errorHandler(error, errCount, this.BaconApiCall);
            }
            return ye;
        });
    }
    // Bacon Ipsum
    BaconApiCall(errCount = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            let bacon;
            try {
                bacon = yield $.ajax({
                    method: "GET",
                    url: `https://baconipsum.com/api/?type=meat-and-filler&paras=1`,
                    success: (data) => data
                });
            }
            catch (error) {
                return yield this.errorHandler(error, errCount, this.BaconApiCall);
            }
            return bacon;
        });
    }
    // Pokemon
    PokemonApiCall(errCount = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonID = Math.floor(Math.random() * 904) + 1;
            let pokemon;
            try {
                pokemon = yield $.ajax({
                    method: "GET",
                    url: `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`,
                    success: (data) => data
                });
            }
            catch (error) {
                return yield this.errorHandler(error, errCount, this.PokemonApiCall);
            }
            return pokemon;
        });
    }
    // Users
    UserApiCall(errCount = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            let users;
            try {
                users = yield $.ajax({
                    method: "GET",
                    url: `https://randomuser.me/api/?results=7`,
                    success: (data) => data
                });
            }
            catch (error) {
                return yield this.errorHandler(error, errCount, this.UserApiCall);
            }
            return users;
        });
    }
    errorHandler(error, errCount, OriginalApiCall) {
        return __awaiter(this, void 0, void 0, function* () {
            if (errCount <= 5) {
                errCount++;
                console.warn(error);
                console.log("trying again...");
                console.log(`Attempt number ${errCount}`);
                return yield OriginalApiCall(errCount);
            }
            else {
                console.warn(error);
                console.log("Can't load data, error in server");
            }
        });
    }
    getUserInfo(users) {
        const mainUser = users[0];
        const mainUserInfo = {
            fname: mainUser.name.first,
            lname: mainUser.name.last,
            pic: mainUser.picture.large,
            city: mainUser.location.city,
            state: mainUser.location.state
        };
        return mainUserInfo;
    }
    getFriendsInfo(users) {
        let FriendsData = [];
        for (let i = 1; i < 7; i++) {
            let f = { fname: users[i].name.first, lname: users[i].name.last };
            FriendsData.push(f);
        }
        return FriendsData;
    }
    getPokemonInfo(pokemon) {
        const poke = {
            pokName: pokemon.name,
            pokImg: pokemon.sprites.front_default
        };
        return poke;
    }
    callAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = {
                ye: "",
                bacon: "",
                pokemon: { pokName: "", pokImg: "" },
                user: { fname: "", lname: "", pic: "", city: "", state: "" },
                friends: []
            };
            const ye = this.YeApiCall();
            const bacon = this.BaconApiCall();
            const pokemon = this.PokemonApiCall();
            const users = this.UserApiCall();
            const getUser = this.getUserInfo;
            const getFriends = this.getFriendsInfo;
            const getPokemon = this.getPokemonInfo;
            yield Promise.all([ye, bacon, pokemon, users])
                .then(function (results) {
                const allUsers = results[3].results;
                result = {
                    ye: results[0].quote,
                    bacon: results[1],
                    pokemon: getPokemon(results[2]),
                    user: getUser(allUsers),
                    friends: getFriends(allUsers)
                };
            });
            return result;
        });
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
