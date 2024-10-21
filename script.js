const monumentName = document.querySelector("section:last-of-type h2")
const town = document.querySelector("section:last-of-type h3")
const country = document.querySelector("section:last-of-type strong")
const description = document.querySelector("section:last-of-type p")
const dataSection = document.querySelector("section:last-of-type")

let showInfo = (monument) =>{

    dataSection.classList.toggle('animateData')
    

    setTimeout(() => {
        if (monument == "eiffelTower") {
            monumentName.textContent = "Tour Eiffel"
            town.textContent = "Paris, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."
        }else if(monument === "notreDame"){
            monumentName.textContent = "Notre Dame"
            town.textContent = "Paris, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."
        }else if (monument == "triumph"){
            monumentName.textContent = "L'arc de triomphe"
            town.textContent = "Paris, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."
        }else if (monument == "saintMichel"){
            monumentName.textContent = "Le Mont Saint-Michel"
            town.textContent = "Le mont Saint-Michel, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."
        }else if (monument == "versailles"){
            monumentName.textContent = "Versailles"
            town.textContent = "Versailles, "
            country.textContent ="France"
            description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio sapiente tempora minus similique perferendis aspernatur beatae voluptatibus a dolorum omnis optio maiores possimus ad reiciendis ipsa at blanditiis autem, odit totam eius. Esse natus sunt modi soluta inventore, hic dolor nostrum quia aspernatur? Nobis deleniti soluta minima exercitationem. Totam."
        }
        dataSection.classList.toggle('animateData')
    }, 1000)
}