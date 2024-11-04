const cols = document.querySelectorAll("td")

cols.forEach(col =>
    col.addEventListener("click", () => {
        let event = prompt("Adj meg egy eseményt (vagy hagyd üresen a törléshez):");
        if (event != null) {
            col.innerHTML = `<span>${event}</span>`;
        }
}));


document.querySelectorAll(".btn-danger").addEventListener("click", () => {
    cols.forEach(col => col.innerHTML = "");
});