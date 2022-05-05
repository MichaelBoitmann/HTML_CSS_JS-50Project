const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    // Clear results
    results.innerHTML = ''

    results.forEach( user => {
        console.log(user)
    })
}