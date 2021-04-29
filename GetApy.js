const API = "https://rickandmortyapi.com/api/character";

const getData = (apiURL) =>{
    return fetch(apiURL)
    .then(response => response.json())
    .then(json => { 
        printData(json),
        printPagination(json.info)
    })
    .catch(error => {console.error(" upss ocurrio un Error:",error)})
}

const printData = (data) =>{
    let html='';
    data.results.forEach(c => {
        html += '<div class="col" >';
        html += '<div class="card" stlye="width: 13rem;">'
        html += `<img src="${c.image}" class="card-img-top" alt="..."></img>`
        html + `div class = "card-body"`
        html+= `<h5 class="card-title">${c.name}</h5>`
        html +=  `<p class="card-text">Gender:${c.gender}<p>`
        html +=  `<p class="card-text">Species:${c.species}<p>`

        html += "</div>"
        html += "</div>"
        html += "</div>"

           


    });
    document.getElementById("info-Characters").innerHTML = html
}

const printPagination = (info) =>{
    let html =`<li class="page-item "> 
    <span class="page-link" onclick = "getData('${info.prev}')" href="#">Previous</span>
    </li>`
    html+=` <li class="page-item">
                 <a class="page-link" onclick = "getData('${info.next}')" >Next</a>
                 </li>`

    document.getElementById("pagination").innerHTML = html

}


getData(API);