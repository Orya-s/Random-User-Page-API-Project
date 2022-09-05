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
class apiCall {
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
    // UserApiCall() {
    // }
    callAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const ye = this.YeApiCall();
            let result;
            yield Promise.all([ye])
                .then(function (results) {
                console.log(results[0]["quote"]);
                // console.log(results[1].data[0]);
                // q = results[0]["quote"]
                result = {
                    ye: results[0]["quote"]
                };
            });
            // this.yeQuote = q;
            return result;
        });
    }
}
