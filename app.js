const express = require('express');
const multer = require('multer');
const app = express();
const port = 80;
const nodemailer = require('nodemailer');
require('dotenv').config();





app.use(express.json());

app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname));

const storage = multer.memoryStorage(); // Guarda los datos en la memoria, puedes cambiarlo según tus necesidades
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
       
    }
})

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Error: Las variables de entorno no están configuradas correctamente.');
    process.exit(1); // Sale del proceso con un código de error
}



app.post('/send-email', upload.none(), (req, res)=>{
    const {fullName, email, phoneNumber, comments} = req.body;

    console.log('Nombre:', fullName);
    console.log('Email:', email);
    console.log('Teléfono:', phoneNumber);
    console.log('Comentarios:', comments);

    const mailOptions = {
        from: 'healthybreeze.lt@gmail.com',
        to: 'info@healthybreeze.lt',
        subject: 'Nuevo mensaje del formulario',
        text: `Nombre: ${fullName}\nCorreo electronico: ${email}\nTelefono: ${phoneNumber}\nMensaje: ${comments}`,
    };

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error interno del servidor.' });
        }else{
            console.log('Correo enviado: ' + info.response);
            res.status(200).json({ success: true, message: 'Correo enviado exitosamente.' });       
                          
        }
        
    });    
   
});



app.listen(port, ()=>{
    console.log(`Servidor en ejecucion en puerto:${port}`);
});



