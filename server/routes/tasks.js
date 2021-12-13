const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let tasks = []

for(let i = 1; i<44; i++){
    tasks.push({id: i, text: `
    text - ${i}`, day: `${month[Math.round(i/5)] ?? 'Dec'} ${i % 30}`, reminder: Math.random() < 0.3, hide: false})
}
// [
//     {
//         id: 1,
//         text: 'text1',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//         hide: false
//     },
//     {
//         id: 2,
//         text: 'text2',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true,
//         hide: false
//     },
//     {
//         id: 3,
//         text: 'text3',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//         hide: false
//     }
// ]

module.exports = tasks