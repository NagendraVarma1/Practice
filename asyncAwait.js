console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('tickets'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    
    const getButter = new Promise((resolve, reject) => resolve('butter'));

    const getColdDrinks = new Promise((resolve, reject) => resolve('cool drinks'));

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: darling i need cool drink');
    console.log('husband: ok then! wait a minute');

    let drinks = await getColdDrinks;

    console.log(`husband: i got some ${drinks} anything else?`)
    console.log('wife: lets fo we are getting late');
    console.log('husband: thank you for the reminder....Lets go')

    return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('Person4: shows ticket');
console.log('person5: shows ticket');