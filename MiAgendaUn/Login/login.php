<?php

include 'con_db.php';

$email = $_POST['email'];
$password = $_POST['password'];

$validar_login = mysqli_query($conexion, "SELECT * FROM datos WHERE email ='$email' and password='$password'"); 

if(mysqli_num_rows($validar_login) > 0){
    header("location:../Main Page/Main-Page-MiAgendaUN.html");
    exit;
    }else{
        echo '
            <script>
            alert("Inicio de sesion invalido");
            window.location="loginhtml.php";
            </script>
        ';
        exit;
    }
