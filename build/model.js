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
                success: (data) => data.quote
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
    // UserApiCall() {
    // }
    callAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = {
                ye: "",
                bacon: ""
            };
            const ye = this.YeApiCall();
            const bacon = this.BaconApiCall();
            yield Promise.all([ye, bacon])
                .then(function (results) {
                // console.log(results[0]["quote"])
                result = {
                    ye: results[0]["quote"],
                    bacon: results[1]
                };
            });
            return result;
        });
    }
}
