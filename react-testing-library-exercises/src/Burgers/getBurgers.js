export const getBurgers = () => {
    return fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
        .then(r => r.json())
        .then(data => Object.keys(data).map(key => ({ id: key, ...data[key] })))
}
