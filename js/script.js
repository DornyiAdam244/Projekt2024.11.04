const cols = document.querySelectorAll("td")

cols.forEach(col =>
    col.addEventListener("click", () => {
        let event = prompt("Adj meg egy eseményt (vagy hagyd üresen a törléshez):");
        col.classList.toggle("td-background")
        if (event != null) {
            col.innerHTML = `<span>${event}</span>`;
        }
}));


document.querySelector(".btn-danger").addEventListener("click", () => {
    cols.forEach(col => col.innerHTML = "");
});