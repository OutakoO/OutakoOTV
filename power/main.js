const containerSearch = document.querySelector('section .containerSearch')

const getValue = decodeURI(location.search.substring(1))

async function search(searchValue) {
    const getData = await fetch('https://api.iwannawatch.cf/garson.php?search=' + encodeURIComponent(searchValue))
    const dataJson = await getData.json()
    console.log(dataJson)
    for(const item of dataJson){
        const box = document.createElement('a')
        box.classList.add('box')
        box.setAttribute('href',`display.html?${item.Name}`)
        box.style.background = `url(${item.Image})`
        containerSearch.append(box)
    }

}


// console.log(getValue)
search(getValue)

resultSearch.textContent = getValue

