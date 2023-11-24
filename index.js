document.addEventListener("DOMContentLoaded", function () {
    const buttonsCarousel = document.querySelectorAll(".button-supper, .button-supper-altern");

    buttonsCarousel.forEach(button => {
        button.addEventListener("click", function () {
            const productsPage = this.getAttribute("data-target");
            window.location.href = productsPage;
        });
    });
    // const buttonsCarousel = document.querySelectorAll(".button-supper, button-supper-altern");

    // buttonsCarousel.forEach(button => {
    //     button.addEventListener("click", function () {
    //         const productsPage = this.getAttribute("data-target");
    //         window.location.href = productsPage;
    //     });
    // });
    

    const buttonContactUs = document.getElementById("buttonContactUs");
    if (buttonContactUs) {
        buttonContactUs.addEventListener("click", function () {
            window.location.href = "contact.html";
        });
    }

    const buttonProducts = document.getElementById("buttonProducts");
    if (buttonProducts) {
        buttonProducts.addEventListener("click", function () {
            window.location.href = "products.html";
        });
    }

    const buttonEmailSend = document.getElementById('button-email-send');

    if(buttonEmailSend){

        buttonEmailSend.addEventListener('click', function () {
    
            const formData = new FormData(document.getElementById('form-email'));

            const serverURL = "https://www.healthybreeze.lt:3000"
    
            fetch(`${serverURL}/send-email`, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Correo enviado con éxito");
                    window.location.href = "./index.html";
                } else {
                    alert("Error al enviar el correo");
                }
            })
            .catch(error => {
                console.error('Error al realizar la petición:', error);
                alert("Error sending request to server.");
            });
        });
    }
    
   

});
    
 //five-tech color words

 //  function changeColor(element, descriptionId){
 
 //     let id = element.id;
 
 //     let descriptionContainer = document.querySelector(".description-container");
 
 //     let allDescriptions = descriptionContainer ? descriptionContainer.getElementsByClassName("description") :[];
 
 //     for(let i = 0; i < allDescriptions.length; i++){
 //         allDescriptions[i].style.display = 'none';
 //     }
 
 //     let specificDescription = document.getElementById(descriptionId);
 //     if (specificDescription) {
 //         specificDescription.style.display = "block";
 //       }
 //     const allItems = document.querySelectorAll('.item-tech');
 
 //     allItems.forEach(item =>{
 //         item.classList.remove('clicked');
 //     });
 
 //     element.classList.add('clicked');
 
     
 // }

 function changeColor(element, descriptionId) {
    // Obtén el ID directamente del elemento clickeado
    let id = element.id;

    // Oculta todas las descripciones
    let allDescriptions = document.querySelectorAll('.description-container > div');
    allDescriptions.forEach(description => {
        description.style.display = 'none';
    });

    // Muestra la descripción específica
    let specificDescription = document.getElementById(descriptionId);
    if (specificDescription) {
        specificDescription.style.display = "block";
    }

    // Remueve la clase 'clicked' de todos los elementos
    const allItems = document.querySelectorAll('.item-tech');
    allItems.forEach(item => {
        item.classList.remove('clicked');
    });

    // Añade la clase 'clicked' al elemento clickeado
    element.classList.add('clicked');
}

 
    

   



















