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
// APIs
class api {
    // YE
    YeApiCall() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield $.ajax({
                method: "GET",
                url: 'https://api.kanye.rest',
                success: (data) => data
            });
        });
    }
    // Bacon Ipsum
    BaconApiCall() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield $.ajax({
                method: "GET",
                url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=1',
                success: (data) => data
            });
        });
    }
    // Pokemon
    PokemonApiCall() {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonID = Math.floor(Math.random() * 905);
            return yield $.ajax({
                method: "GET",
                url: `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`,
                success: (data) => data
            });
        });
    }
    // Users
    UserApiCall() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield $.ajax({
                method: "GET",
                url: `https://randomuser.me/api/?results=7`,
                success: (data) => data
            });
        });
    }
    getUserInfo(users) {
        const mainUser = users[0];
        const mainUserInfo = {
            fname: mainUser["name"]["first"],
            lname: mainUser["name"]["last"],
            pic: mainUser["picture"]["thumbnail"],
            city: mainUser["location"]["city"],
            state: mainUser["location"]["state"]
        };
        return mainUserInfo;
    }
    getFriendsInfo(users) {
        let FriendsData = [];
        for (let i = 1; i < 6; i++) {
            FriendsData.push({ fname: users[i]["name"]["first"], lname: users[i]["name"]["last"] });
        }
        return { FriendsData };
    }
    getPokemonInfo(pokemon) {
        return {
            pokName: pokemon["name"],
            pokImg: pokemon["sprites"]["front_default"]
        };
    }
    callAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = {
                ye: "",
                bacon: "",
                pokemon: {},
                user: {},
                friends: {}
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
                const allUsers = results[3]["results"];
                result = {
                    ye: results[0]["quote"],
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
