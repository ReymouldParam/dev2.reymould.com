<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@reymould.com" ;
    $name =  $_POST["name"];
    $email =  $_POST["email"];
    $phone = $_POST["phone"];

    $subject = "Enqiry from Reymould Website";
    $message = $_POST["message"];

    $email_body = "Name : ".$name."\nEmail : ".$email."\nMobile Number : ".$phone."\nMessage : ".$message;

    $header = "From: <".$email.">";

    if (mail($to, $subject, $email_body,$header)) {
        header("Location: ../contactus?emailStatus=enqiryPass");
        exit;
    } else {
        header("Location: ../contactus?emailStatus=enqiryFail");
        exit;
    }
    exit;
}
?>