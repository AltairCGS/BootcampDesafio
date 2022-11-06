const formulario = document.getElementById('formulario')
const inputFormulario = document.getElementById('inputFormulario')

const formularioCliente = data => {
    formulario.addEventListener('keyup', e => {
        e.preventDefault()
        const letraCliente = inputFormulario.value.toLowerCase()
        const arrayFiltrado = data.filter(item => {
            const letraApi = item.translations.spa.common.toLowerCase()
            if (letraApi.indexOf(letraCliente) !== -1) {
                return item
            }
        })
        banderillas(arrayFiltrado)
    })
}