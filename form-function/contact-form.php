<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@reymould.com" ;
    $name =  $_POST["name"];
    $email =  $_POST["email"];
    $phone = $_POST["phone"];

    $subject = "Enqiry from Reymould Website";
    $message = $_POST["message"];


    if (mail($to, $subject, $message)) {
        header("Location: ../index.html?emailStatus=enqiryPass");
        exit;
    } else {
        header("Location: ../index.html?emailStatus=enqiryFail");
        exit;
    }
    exit;
}
?>