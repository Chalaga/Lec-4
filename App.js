// 1)ჩავთვალოთ რომ გვაქვს სამი სხვადასხვა ფუნქცია რომელიც შეიცავს promise-ებს პირველი შეიცავს "User Data", მეორე: "Account Statistics" და მესამე: "Activity Logs". და promise.all დახმარებით უნდა დავჰენდლოთ ეს მონაცემები და ასევე გავწეროთ catch ბლოკიც.

const FirstPromise = new Promise ((resolve, reject) => {
    resolve("User Data") 
})
const SecondPromise = new Promise ((resolve, reject) => {
    resolve("Account Statistics") 
})
const ThirdPromise = new Promise ((resolve, reject) => {
    resolve("Activity Logs") 
})

Promise.all([FirstPromise, SecondPromise, ThirdPromise])
.then(([FirstPromise, SecondPromise, ThirdPromise]) => {
    console.log(FirstPromise, SecondPromise, ThirdPromise);
}).catch ((Err) => {
    console.log(Err);
})

// 2)პირობითად გვაქვს ორ სხვადსხვა სერვისში სურათის ატვირთვა და საკმარისია რომ ერთერთი მაინც აიტვირთოს წარმატებით.გამოიყენეთ promise.any.

// const FirstPromise = new Promise((resolve, reject) => {
//     resolve('First picture uploaded sucefully')
// })

// const SecondPromisePromise = new Promise((resolve, reject) => {
//     reject('Second picture Cannot be uploaded')
// })

// Promise.any([FirstPromise, SecondPromisePromise])
// .then (([FirstPromise, SecondPromisePromise]) => {
//     console.log(FirstPromise, SecondPromisePromise);
// }).catch((Err) => {
//     console.log(Err);
// })