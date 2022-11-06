const banderas = document.getElementById("banderas")
const query = new URLSearchParams(window.location.search)
const params = query.get("name")
console.log(params)

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()

        const filtroData = data.filter(item => item.translations.spa.common === params)

        banderillas(filtroData)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ""
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flags.png}" alt="" class="img-fluid info-flag">
            <div class="card-content">
                <h3>${item.translations.spa.common}</h3>
                <p>
                    <b>Población: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Región: </b>
                    ${item.region}
                </p>
                <p>
                    <b>Subreion: </b>
                    ${item.subregion}
                </p>
                <p>
                    <b>Zona horaria: </b>
                    ${item.timezones}
                </p>
                <p>
                    <b>Continente: </b>
                    ${item.continents}
                </p>
            </div>
        </article>
        <article class="card-info">
            <h3 class="escudo">Escudo de armas:</h3>
            <img src="${item.coatOfArms.svg}" alt="" class="img-fluid-info">
            <div class="card-content">
                <p>
                    <b>Area: </b>
                    ${item.area}
                </p>
                <p>
                    <b>Fronteras: </b>
                    ${item.borders}
                </p>
                </div>
        </article>
        `
    })
    banderas.innerHTML = elementos
}