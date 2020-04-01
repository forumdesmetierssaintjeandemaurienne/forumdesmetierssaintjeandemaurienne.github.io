

<?php
// S'il y des données de postées
if ($_SERVER['REQUEST_METHOD']=='POST') {
 
  // (1) Code PHP pour traiter l'envoi de l'email
 
  // Récupération des variables et sécurisation des données
  $objet   = htmlentities($_POST['objet']);
  $nom     = htmlentities($_POST['nom']); // htmlentities() convertit des caractères "spéciaux" en équivalent HTML
  $mail   = htmlentities($_POST['mail']);
  
  $message = htmlentities($_POST['message']);
 
  // Variables concernant l'email
 
  $destinataire = 'ce.ia73-cio-st-jean-de-maurienne@ac-grenoble.fr '; // Adresse email du webmaster (à personnaliser)
  $sujet = 'FDM contact site'; // Titre de l'email
  $contenu = '<html><head><title>Titre du message</title></head><body>';
  $contenu .= '<p>Nouveau message de provenance du site FDM.</p>';
  $contenu .= '<p><strong>Objet</strong>: '.$objet.'</p>';
  $contenu .= '<p><strong>Nom</strong>: '.$nom.'</p>';
  $contenu .= '<p><strong>Email</strong>: '.$mail.'</p>';
  $contenu .= '<p><strong>Message</strong>: '.$message.'</p>';
  $contenu .= '</body></html>'; // Contenu du message de l'email (en XHTML)
 
  // Pour envoyer un email HTML, l'en-tête Content-type doit être défini
  $headers = 'MIME-Version: 1.0'."\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
 
  // Envoyer l'email
  mail($destinataire, $sujet, $contenu, $headers); // Fonction principale qui envoi l'email
  echo '<h2>Message envoyé!</h2>'; // Afficher un message pour indiquer que le message a été envoyé
  // (2) Fin du code pour traiter l'envoi de l'email
}
?>
</p>
<p align="center">Vous allez bientot etre redirigé vers la page d'acceuil<br>
Si vous n'etes pas redirigé au bout de 5 secondes cliquez <a href="http://www.forum-des-metiers-maurienne.fr">ici 
</a></p>