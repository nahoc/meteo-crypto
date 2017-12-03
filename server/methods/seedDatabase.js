// import
import seed from 'meteor/themeteorchef:seeder';

let _seedAllCoins = () => {
    let allCoinsFromAPI = HTTP.get('https://www.cryptocompare.com/api/data/coinlist/');

    let allCoinsFromAPIFlatten = [];

    // Get object keys and iterate over them
    Object.keys(allCoinsFromAPI.data.Data).forEach(function (key) {
        // Get the value from the object
        let value = allCoinsFromAPI.data.Data[key].value;

        allCoinsFromAPIFlatten.push(allCoinsFromAPI.data.Data[key]);
    });

    Seed('allCoins', {
        environments: ['development', 'staging', 'production'],
        data: allCoinsFromAPIFlatten,
    });
};

export default function () {
    _seedAllCoins();
}
