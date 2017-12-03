// import
import seed from 'meteor/themeteorchef:seeder';

let _seedAllCoins = () => {
    Seed('allCoins', {
        environments: ['development', 'staging', 'production']
        , data: [/*{
            name: 'general'
        }, {
            name: 'random'
        }*/]
    });
};

export default function () {
    _seedAllCoins();
}