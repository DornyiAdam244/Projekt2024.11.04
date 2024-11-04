const cols = document.querySelectorAll("td")

cols.forEach(col =>
    col.addEventListener("click", () => {
        let event = prompt("Adj meg egy eseményt (vagy hagyd üresen a törléshez):");
        col.innerHTML = event;
}));

function resetTable() {
    cols.forEach(col => col.innerHTML = "");
}
