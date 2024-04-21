document.getElementById('titulo').addEventListener('mousemove', (event) => {
    const titulo = event.target.innerText;

    const tituloMapeado = titulo.split('').map(letra => `<span>${letra}</span>`);

    console.log(tituloMapeado);

    document.getElementById('titulo').innerHTML = tituloMapeado;

    

});