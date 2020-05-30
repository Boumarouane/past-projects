<?php
session_start();

############## Récupération des données ######################
    $surname = valid_donnees($_POST['surname']);
    $name = valid_donnees($_POST['name']);
    $mail = valid_donnees($_POST['email']);
    $message = valid_donnees($_POST['message']);
    $genre = $_POST['gender'];
    $country = $_POST['country'];
    $autre = $_POST['autre'];
    $honeypot = $_POST['honeyvalue'];

    $_SESSION['surname'] =$surname ;
    $_SESSION['name'] =$name;
    $_SESSION['email'] =$mail ;
    $_SESSION['message'] =$message;
    $_SESSION['gender'] =$genre;
    $_SESSION['country'] =$country ;
    $_SESSION['autre'] =$autre ;
    $_SESSION['honeyvalue'] =$honeypot ;


####### Création d'une fonctions pour nettoyer les données avant de les stocker #########
    function valid_donnees($donnees){
        $donnees = trim($donnees);              // Nettoyer les espaces
        $donnees = stripslashes($donnees);      // Nettoyer les antislashes
        $donnees = strip_tags($donnees);        // Nettoyer les balises nocif
        $donnees = htmlspecialchars($donnees);  // Convertion des caractères spéciaux
        return $donnees;
    }
##### Si les variable existe #####
    if(isset($surname)  AND isset($name) 
                        AND isset($mail) 
                        AND isset($surname)
                        AND isset($genre)
                        AND isset($message)
                        AND isset($country)
                        AND isset($autre)
                        AND isset($honeypot)
                        ){

##### Si les champs prenom et mail ne sont pas vides et si les donnees sont sanitizer ####

        if (!empty($surname)AND strlen($surname) <= 20
                            AND !empty($surname)
                            AND strlen($name) <= 20
                            AND !empty($name)
                            AND !empty($message)
                            AND !empty($mail)
                            AND !empty($genre)
                            AND !empty($country)
                            AND filter_var($mail, FILTER_VALIDATE_EMAIL) 
                            AND filter_var($name, FILTER_SANITIZE_STRING)
                            AND filter_var($surname, FILTER_SANITIZE_STRING)  
                            AND filter_var($message, FILTER_SANITIZE_STRING)
                            AND empty($honeypot)){

######################## Connexion à la BDD ######################
                        try{$user = "id11850502_user";
                            $pass = "UserName";
                            $pdo = new PDO("mysql:host=localhost;dbname=id11850502_phpformulaire",$user,$pass);
                            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                            // On insère les données reçues avec méthode insert
                            $sql = "INSERT INTO USER (name, surname, email, message, country, autre, gender)
                            VALUES ('$name', '$surname', '$mail', '$message', '$country', '$autre','$genre' )";
                            $pdo->exec($sql);
                            //!envoi de l'e-mail
                            $to = "i.boumarouane@gmail.com";
                            $subject = "Vérification PHP mail";
                            $headers = "From:" . $mail;
                            mail($to,$subject,$message, $headers);
                            // On renvoie l'utilisateur vers la page de remerciement
                            header("Location: Merci.php");
                            
                        }
                        // Condition si la connexion à la BDD échoue
                        catch (PDOException $exception) {
                            mail('i.boumarouane@gmail.com', 'PDOException', $exception->getMessage());
                            header("Location:contact.php");
                        }
        }
                        //! Si le champs honeypot est rempli
                        if(!empty($honeypot)){
                            header("Location:honeypot.php");
                        }
    }
    else{
        header("Location:contact.php");
    }