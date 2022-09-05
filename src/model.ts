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

    // UserApiCall() {
    // }

    async callAll() {
        const ye = this.YeApiCall()
        let result;

        await Promise.all([ye])
        .then(function (results) {
            console.log(results[0]["quote"])

            result = {
                ye: results[0]["quote"]
            }
        })

        return result
    }

}

