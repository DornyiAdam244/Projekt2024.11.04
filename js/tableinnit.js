
for (var i = 0; i < 24; i++) {

    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.innerHTML = `${i}:00`;
    tr.appendChild(th)
    for (var j = 0; j < 7; j++) {
        tr.innerHTML += `<td hourIndex="${i}" class="text-center"></td>`;
    }
    document.querySelector("tbody").appendChild(tr);
}
