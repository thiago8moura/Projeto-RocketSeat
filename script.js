function togglemode() {
  const html = document.documentElement

  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector('#profile img')

  // substituir a Imagem
  if (html.classList.contains('light')) {
    // se tiver light MediaStreamAudioDestinationNode, adicionar a imagem light
     img.setAttribute('src', './assets/FotoClaro.png')
  }
    // se tiver sem light mode, manter a imagem normal
  else {
    img.setAttribute('src', './assets/FotoEscuro.png')
  }
  
}
