function toggleMode(){
    // trocando as classes
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag image
    const img = document.querySelector("#profile img")

    // substituir a imagem 
    if (html.classList.contains('light'))
    // se tiver modo light, adicionar imagem light
    {
        img.setAttribute('src', './assets/avatar-light.png')
        // senao tiver sem light mode, manter a imagem normal
    } else {
        img.setAttribute('src', './assets/avatar-light.png')
    }

}