/* Data Model
This model is in charge of handling all data related functionalities, it should make all the API's request 
and able to generate a user’s data.  */



// APIs


class api {
    
    // YE
    async YeApiCall() {
        return await $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success: (data) => data.quote
        })
    }

    // Bacon Ipsum
    async BaconApiCall() {
        return await $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=1',       
            success: (data) => data 
        })
    }

    async PokemonApiCall() {
        return await $.ajax({
            method: "GET",
            url: "",
            success: (data) => data
        })
    }

    // UserApiCall() {
    // }

    async callAll() {
        let result = {
            ye: "",
            bacon: ""
        };

        const ye = this.YeApiCall()
        const bacon = this.BaconApiCall()
    

        await Promise.all([ye, bacon])
        .then(function (results) {
            // console.log(results[0]["quote"])

            result = {
                ye: results[0]["quote"],
                bacon: results[1]
            }
        })

        return result
    }

}

