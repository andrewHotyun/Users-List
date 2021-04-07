export function getRandomUsers(userCount = 50) {
    const promise = fetch(`https://api.randomuser.me/?results=${userCount}&nat=UA`)
        .then(response => {
            if(response.status >= 400) {
                throw `Response invalid ( ${response.status} )`;
            }

            return response.json();
        })
        .then(({results}) => {
            console.log("request " + results);
            return results;
        })
        .catch(error => {
            console.log(error);
        });

    return promise;
}
