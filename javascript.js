function getInfo() {
    let charId = document.getElementById("charCapture").value
    document.getElementById("charCapture").value = ""
    
    //let url = "https://rickandmortyapi.com/api/character/" + charId
    let url = `https://rickandmortyapi.com/api/character/${charId}`

    fetch(url)
        .then(res => res.json())
        .then( data => {
            console.log(data)
                let html = `<section class="mt-4" id="aboutSection">
                                <div class="d-flex flex-wrap">
                                    <div class="col-lg-6 p-5 bg-dark d-flex flex-column align-items-center justify-content-center">
                                        <img class="img-fluid rounded-circle img-size" src="${data.image}" id="charImg">
                                        <header class="mt-3 text-center text-white">
                                            <h1 class="font-weight-lighter">${data.name}</h1>
                                            <h1>${data.species}</h1>
                                            <h1>${data.origin.name}</h1>
                                        </header>
                                    </div>
                                </div>
                            </section>`



                document.getElementById("charContent").innerHTML = html
            })
}
