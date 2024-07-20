<?php
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
$mail = new PHPMailer(true);

echo "hi";
try{
    $mail->SMTPDebug = 2;
    $mail->Host = 'mx1.hostinger.mx';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'cotizaciones@3dpawprints.com';
    $mail->Password = 'SomosDOS240224!';
    $mail->setFrom('cotizaciones@3dpawprints.com', '3D Paw prints');
    $mail->addAddress("3dpawprintscr@gmail.com", "3D Paw Prints");
    $data = json_decode(file_get_contents('php://input'), true);
    $mail->Subject = 'Nueva idea diferente - ' . $data['name'];
    $mail->IsHTML(true);

    $images = $data['images'];

    foreach($images as $img){

        $resource = base64_decode(str_replace(" ", "+", substr($img['base64'], strpos($img['base64'], ","))));
        $image_info = getimagesize($img['base64']);
        $extension = (isset($image_info["mime"]) ? explode('/', $image_info["mime"] )[1]: "");
        $mail->addStringEmbeddedImage($resource, $img['id'], $img['id'] . "." . $extension);
    }
    
    $mail->msgHTML('<h1>Has recibido una nueva idea para cotizacion:</h1><p><strong>NOMBRE: </strong>' . $data['name'] . '</p><p><strong>CORREO: </strong>' . $data['email'] . '</p><p><strong>TELEFONO: </strong>' . $data['phone'] . '</p><p><strong>NOTAS: </strong>' . $data['notes'] . '</p>' , __DIR__);
    $mail->AltBody = 'This is a plain text message body';
    $mail->send();
    return "Message Sent OK\n";
} catch (phpmailerException $e) {
    return $e->errorMessage(); 
} catch (Exception $e) {
    return $e->getMessage();
}
