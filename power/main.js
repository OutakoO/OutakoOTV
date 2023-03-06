const containerSearch = document.querySelector('section .containerSearch')


if (location.pathname.split('/').includes('search.html')) {
    const getValue = decodeURI(location.search.substring(1))
    resultSearch.textContent = getValue
    search(getValue)
} else if (location.pathname.split('/').includes('display.html')) {
    const getValue = decodeURI(location.search.substring(1))
    aboutAnime(getValue)
}


//get name and img for anime
async function search(searchValue) {
    const getData = await fetch('https://api.iwannawatch.cf/garson.php?search=' + encodeURIComponent(searchValue))
    const dataJson = await getData.json()
    // console.log(dataJson)
    for (const item of dataJson) {
        const box = document.createElement('a')
        box.classList.add('box')
        box.setAttribute('href', `display.html?${item.Name}`)
        box.style.background = `url(${item.Image})`
        containerSearch.append(box)
    }

}


//get about anime and episodes
async function aboutAnime(searchValue) {
    const getData = await fetch('https://api.iwannawatch.cf/garson.php?Name=' + encodeURIComponent(searchValue))
    const dataJson = await getData.json()
    console.log(dataJson)

}


if (typeof btnSearch !== 'undefined') {
    btnSearch.onclick = () => {
        if (inptSearch.value.length > 0)
            location.href = `search.html?${inptSearch.value}`
    }
}



