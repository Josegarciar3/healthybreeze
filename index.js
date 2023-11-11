document.addEventListener("DOMContentLoaded", function () {
    const buttonsCarousel = document.querySelectorAll(".button-supper");

    buttonsCarousel.forEach(button => {
        button.addEventListener("click", function () {
            const productsPage = this.getAttribute("data-target");
            window.location.href = productsPage;
        });
    });
    

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
    
            fetch('http://localhost:8000/send-email', {
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
                alert("Error al enviar la solicitud al servidor");
            });
        });
    }
    

});
    


    

   



















