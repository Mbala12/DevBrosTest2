fetch("./data/bikes_response.json")
.then(function(res){
    return res.json();
})
.then(function(bikes){
    let myTable = document.querySelector("#bikedata");
    let result = "";
    for(let bike of bikes){
        result += `
                <tr>
                    <td>${bike.BikeID}</td>
                    <td>${bike.Make}</td>
                    <td>${bike.Model}</td>
                    <td>${bike.Year}</td>
                    <td>${bike.Displacement}</td>
                    <td>${bike.Price}</td>
                    <td>${bike.Terrain}</td>
                    <td>${bike.Description}</td>
                </tr>
        `;
    }
    
    myTable.innerHTML = result;
})

function sortTable(n, evt){
    var table = document.querySelector('table'),
        thead = document.querySelector('thead'),
        tbody = table.querySelector('tbody'),
        bRows = [...tbody.rows],
        hData = [...thead.querySelectorAll('th')],
        desc = false;
    
    hData.map((head) =>{
        if(head != evt){
            head.classList.remove('asc', 'desc')
        }
    });

    desc = evt.classList.contains('asc') ? true : false;
    evt.classList[desc ? 'remove' : 'add']('asc');
    evt.classList[desc ? 'add' : 'remove']('desc');

    tbody.innerHTML = '';

    bRows.sort((a, b) =>{
        let x = a.getElementsByTagName('td')[n].innerHTML.toLowerCase(),
            y = b.getElementsByTagName('td')[n].innerHTML.toLowerCase();
        return desc ? (x < y ? 1 : -1) : (x < y ? -1 : 1);
    })
    bRows.map((bRow) => {
        tbody.appendChild(bRow);
    })
}

