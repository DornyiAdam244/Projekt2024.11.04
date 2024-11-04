const cols = document.querySelectorAll("td");

cols.forEach(col =>
    col.addEventListener("click", () => {
        let event = prompt("Adj meg egy eseményt (vagy hagyd üresen a törléshez):");
        const hour = Number(col.getAttribute("hourIndex"));
        const span = document.createElement("span");
        if (hour < 12) {
            col.classList.toggle("td-morning");
            span.classList.add("span-morning");
        }
        else if (hour > 18) {
            col.classList.toggle("td-afternoon");
            span.classList.add("span-afternoon");
        }
        else {
            col.classList.toggle("td-noon");
            span.classList.add("span-noon");
        }

        if (event != null) {
            col.innerHTML = "";
            span.innerHTML = event;
            col.appendChild(span);
        }
}));


document.querySelector(".btn-danger").addEventListener("click", () => {
    if (confirm("Biztosan törölni akarja a naptár eseményeit!")) {
        cols.forEach(col => {
            col.innerHTML = "";
            col.classList.remove("td-morning", "td-noon", "td-afternoon");
        });
    }
});