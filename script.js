const monumentName = document.querySelector("section:last-of-type h2")
const town = document.querySelector("section:last-of-type h3")
const country = document.querySelector("section:last-of-type strong")
const description = document.querySelector("section:last-of-type p")
const dataSection = document.querySelector("section:last-of-type")
const images = document.querySelectorAll("section:nth-of-type(2) img")

let map = L.map('map', {
    scrollWheelZoom: false, // Disable zooming with the mouse wheel
    zoomControl: false, // Optional: disable zoom control buttons
    touchZoom: false, // Optional: disable touch zooming on mobile devices
}).setView([46.60, 1], 6);


let showInfo = (monument) => {
    
    dataSection.classList.toggle('animateData')
    
    
    setTimeout(() => {
        if (monument == "eiffelTower") {
            monumentName.textContent = "Tour Eiffel"
            town.textContent = "Paris, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."
            for (let i = 0; i < images.length; i++) {
                if (i != 0) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([48.85, 2.34]).addTo(map);
                
            }
        }else if(monument === "notreDame"){
            monumentName.textContent = "Notre Dame"
            town.textContent = "Paris, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."
            for (let i = 0; i < images.length; i++) {
                if (i != 1) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }


                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([48.85, 2.34]).addTo(map)
                
            }
        }else if (monument == "triumph"){
            for (let i = 0; i < images.length; i++) {
                if (i != 2) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }


                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([48.85, 2.34]).addTo(map)
                
            }
            monumentName.textContent = "L'arc de triomphe"
            town.textContent = "Paris, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."

        }else if (monument == "saintMichel"){
            for (let i = 0; i < images.length; i++) {
                if (i != 3) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(map);

                L.marker([48.63, -1.51]).addTo(map)
            }
            monumentName.textContent = "Le Mont Saint-Michel"
            town.textContent = "Le mont Saint-Michel, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."

        }else if (monument == "versailles"){
            for (let i = 0; i < images.length; i++) {
                if (i != 4) {
                    images[i].classList.add("grey");
                }else{
                    images[i].classList.remove("grey");
                }

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([48.79, 2.02]).addTo(map)
            }

            monumentName.textContent = "Versailles"
            town.textContent = "Versailles, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."

        }
        dataSection.classList.toggle('animateData')
    }, 1000)
}

