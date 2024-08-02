const nodemailer = require('nodemailer')

export const enviarEmail = async (departamento:any | null, 
    toEmail:any, hora:any, 
    notas:any, name:any) => {

    try {
        console.log(departamento, toEmail, hora, notas, name)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mynorflorian1998@gmail.com',
                pass: 'pxsixwftivtuzqav'
            }
        });

        let info = transporter.sendMail({
            from: "mynorflorian1998@gmail.com",
            to: toEmail,
            subject: "Nueva cita registrada exitosamente ✔",
            html: `
                <html>
                    <body>
                        Bienvenido ${name}
                        Tu cita esta programada a las ${hora}, departamento ${departamento}.
                        ${notas?"Tomamos en cuenta tus notas: "+notas : '' }
                    </body>
                </html>
            `
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    } catch (error) {
        console.log(error)
    }
}