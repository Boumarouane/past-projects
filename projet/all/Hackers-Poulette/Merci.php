<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Remerciement</title>
</head>
<body>
    
    <div class="container white"> 
        <div class="row">
            <div class="col s6 offset-s5">
                <span class="green-text text-darken-2">
                    <h1>Merci<i class="large material-icons ">done_all</i></h1>
                </span>
            </div>
            <div class="row">
                <div class="col s9 offset-s2">
                    <span class="green-text text-darken-2">
                        <h4>Votre Email à bien été envoyé avec succès</h4>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col s9 offset-s2">
                    <span class="green-text text-darken-2">
                        <h5>Nous traiterons votre demande dans les plus bref délais</h5>
                    </span>
                </div>
            </div>
            <br>
            <br>
            <div class="row">
                <div class="col s6 offset-s5">
                    <a href="index.html" class="waves-effect waves-light btn-large">Retour à l'accueil</a>
                </div>
            </div>
            <div class="row">
                <div class="col s6 offset-s5">

            <?php
            if(isset($_SESSION['surname'])  
                AND isset($_SESSION['name']) 
                AND isset($_SESSION['email']) 
                AND isset($_SESSION['message'])
                AND isset($_SESSION['gender'])
                AND isset($_SESSION['country'])
                AND isset($_SESSION['autre'])
                AND isset($_SESSION['honeyvalue'])
                ){
                    echo "Prénom : "."<strong>".($_SESSION['surname'])."</strong>";
                    echo "<br>";
                    echo "Nom : "."<strong>".($_SESSION['name'])."</strong>";
                    echo "<br>";
                    echo "Email : "."<strong>".($_SESSION['email'])."</strong>";
                    echo "<br>";
                    echo "Message : "."<strong>".($_SESSION['message'])."</strong>";
                    echo "<br>";
                    echo "Genre : "."<strong>".($_SESSION['gender'])."</strong>";
                    echo "<br>";
                    echo "Pays : "."<strong>".($_SESSION['country'])."</strong>";
                    echo "<br>";
                    echo "Sujet : "."<strong>".($_SESSION['autre'])."</strong>";
                    echo "<br>";
                    echo "Honeypot : "."<strong>".($_SESSION['honeyvalue'])."</strong>";
                }
                else{
                    echo "erreur de données";
            }

                ?>
                </div>
            </div>
        </div>
    </div>
    <!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>

