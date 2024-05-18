const grid_container = document.querySelector("#grid")
const input_size = document.querySelector(".size_input")
const body = document.querySelector("body")
const btn = document.querySelector(".reset")
let grid_size = 16


function create_grid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.style.display = "flex"
        row.style.flex = "1 1 auto"
        for (let i = 0; i < size; i++) {
            const item = document.createElement("div")
           
            item.style.flex = "1 1 auto"
            item.addEventListener("mouseover", (element) => {
                element.target.style.backgroundColor = "black"
            });
            row.appendChild(item)
           
        }
        
        grid_container.appendChild(row)
    }
}



btn.addEventListener("click", () => {
    grid_size = document.getElementById("size").value;
    
    if (grid_size >= 16 && grid_size <= 100 && grid_size != "") {
        console.log("hello")
        while (grid_container.hasChildNodes()) {
            grid_container.removeChild(grid_container.firstChild)
        }
        
        create_grid(grid_size)
    }
    else {
        alert("Invalid grid size!")
    }
   
})

create_grid(grid_size)
