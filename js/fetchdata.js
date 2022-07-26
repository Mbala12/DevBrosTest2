fetch("./data/bikes_response.json")
.then(function(res){
    return res.json();
})
.then(function(bikes){
    let myData = document.querySelector("#bikedata");
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
    
    myData.innerHTML = result;
})

function sortNumeric(n, evt){
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
        return desc ? (x - y ) : (y - x ); 
    })
    bRows.map((bRow) => {
        tbody.appendChild(bRow);
    })
}

function sortASCII(n, evt){
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

const FilterAll = () =>{
    var search, keyword, table, tr, td, i;
    search = document.getElementById("search");
    keyword = search.value.toUpperCase();
    table = document.getElementById("bikedata");
    tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        var tds = tr[i].getElementsByTagName("td");
        var res = false;
        for(var j = 0; j < tds.length; j++){
            var td = tds[j];
            if (td.innerHTML.toUpperCase().indexOf(keyword) > -1) {
                res = true;
            } 
        }
        if(res){
            tr[i].style.display = "";
        }
        else {
            tr[i].style.display = "none";
        }
    }
}




