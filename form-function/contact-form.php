<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "contact@reymould.com" ;
    $name =  $_POST["name"];
    $email =  $_POST["email"];
    $phone = $_POST["phone"];

    $subject = "Enqiry from Reymould Website";
    $message = $_POST["message"];

    $email_body = "Name : ".$name."Email : ".$email."Mobile Number : ".$phone."Message : ".$message;

    // $header = "From: <noreply@reymould.com>";

    if (mail($to, $subject, $email_body)) {
        header("Location: ../contactus?emailStatus=enqiryPass");
        exit;
    } else {
        header("Location: ../contactus?emailStatus=enqiryFail");
        exit;
    }
    exit;
}
?>