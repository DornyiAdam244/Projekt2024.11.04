const cols = document.querySelectorAll(".table-col")

cols.forEach(col =>
    col.addEventListener("click", () => {
        let event = prompt("Adj meg egy eseményt (vagy hagyd üresen a törléshez):");
        col.innerHTML = event;
    }));
