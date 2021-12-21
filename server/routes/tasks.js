const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let tasks = []

for(let i = 1; i<44; i++){
    // tasks.push({id: i, title: `
    // text - ${i}`, day: `${month[Math.round(i/5)] ?? 'Dec'} ${i % 30}`, reminder: Math.random() < 0.3 ? 1 : 0, hide: false ? 1 : 0})
    tasks.push({id: i, title: `text - ${i}`, day: `${month[Math.round(i/5)] ?? 'Dec'} ${i % 30}`, reminder: Math.random(), hide: false})
}

module.exports = tasks