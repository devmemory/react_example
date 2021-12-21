const dbHelper = require('../db/db_helper')

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

async function initTask() {
    console.log('init task')

    const rows = await dbHelper.getAllData() ?? []

    console.log('rows',`${JSON.stringify(rows)}`)

    rows.forEach((element, index) => {
        rows[index].reminder = element.reminder === 1
        rows[index].hide = element.hide === 1
    })

    return rows
}

// for(let i = 1; i<44; i++){
//     // tasks.push({id: i, title: `
//     // text - ${i}`, day: `${month[Math.round(i/5)] ?? 'Dec'} ${i % 30}`, reminder: Math.random() < 0.3 ? 1 : 0, hide: false ? 1 : 0})
//     tasks.push({id: i, title: `text - ${i}`, day: `${month[Math.round(i/5)] ?? 'Dec'} ${i % 30}`, reminder: Math.random(), hide: false})
// }

module.exports = initTask