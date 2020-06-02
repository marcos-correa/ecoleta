function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then( res => res.json() )
    .then( states => {

        for ( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }


        
    } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    const ufValue = event.target.value
    
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    // console.log(indexOfSelectedState)
    citySelect.innerHTML = "<option value>Selecione a cidade</option>" //Assim aparece Selecione a cidade
    citySelect.disabled = true

    
    //populando as cidades
    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        for ( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
        
        citySelect.disabled = false
        
    } )
}

function setCity (event){
    const citySelect = document.querySelector("select[name=city]")
    const cityInput = document.querySelector("input[name=currentCity]")
    
    const cityValue = citySelect.value
        
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cityValue}`

    const indexOfSelectedState = event.target.selectedIndex
    cityInput.value = event.target.options[indexOfSelectedState].text

}

// setCity()

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

document
    .querySelector("select[name=city]")
    .addEventListener("change", setCity)


