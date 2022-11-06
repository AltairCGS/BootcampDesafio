const banderas = document.getElementById('banderas')

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
        filtros(data)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ""
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flags.png}" alt="" class="img-fluid">
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
                    <a href="paisInfo.html?name=${item.translations.spa.common}">Más info</a>
                </p>
            </div>
        </article>
        `
    })
    banderas.innerHTML = elementos
}