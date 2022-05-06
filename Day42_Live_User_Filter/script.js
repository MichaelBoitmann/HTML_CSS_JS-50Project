const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))


async function getData() {
    const res = await fetch('https://randomuser.me/api?results=500')

    const { results } = await res.json()

    // Clear results
    results.innerHTML = ''

    results.forEach( user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
                <p>${user.email}</p>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchLiveUser) {
    listItems.forEach(liveUser => {
        if(liveUser.innerText.toLowerCase().includes(searchLiveUser.toLowerCase())) {
            liveUser.classList.remove('hide') // 'hide' from style of user-list li
        } else {
            liveUser.classList.add('hide')
        }
    })
}