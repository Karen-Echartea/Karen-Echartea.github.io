<link rel="stylesheet" href="css/style.css">
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<?php 
include 'register/auth.php';

session_start();
//echo md5('superadmin');
if(isset($_POST['username'])){
    
    is_admin($_POST['username'], $_POST['pass']);
}

if(isset($_SESSION["username"])){
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Roux Conference: Artists</title>
  
</head>

<body id="page_artists">
    <div class="wrapper">
        <header>
            <div class="branding"> <img src="images/ralogo_monogram.png" alt="Logo">
                <p>Roux Academy<br>
                    Art • Media • Design</p>
            </div>
            <div class="description">
                <h1>Roux Academy 2016 Art Conference</h1>
                <p>Join over 500 hundred of the most creative and brilliant minds of art colleges all around the world
                    for five days of lectures by world-renowned art scholars and artists, and seven days and nights of
                    gallery exhibits featuring the best in contemporary art, including painting, sculpture, and more, in
                    the beautiful halls of Hotel Contempo in the heart of Seattle.</p>
            </div>
            <nav>
                <ol>
                    <li><a href="index.php">HOME</a></li>
                    <li><a href="artists.php">ARTISTS</a></li>
                    <li><a href="schedule/index.php">SCHEDULE</a></li>
                    <li><a href="venue.php">VENUE/TRAVEL</a></li>
                    <li><a href="register/index.php">REGISTER</a></li>
                    <li><a href="Asistentes.php">LOGIN</a></li>
                </ol>
            </nav>
        </header>


        <label for="name">Bienvenido: <?php echo $_SESSION["username"]; ?></label>
        <a href='#' onclick='alerta("register/router.php?ruta=logout", "Esta cerrando session desea continuar?");'>
            logout</a>
        <a href='#' onclick='alerta("register/router.php?ruta=artists", "Seguro que desea salir de esta paguina?");'>
            ver artistas</a>
        <?php
            if($_SESSION['Type'] == 'admin'){
            ?>
        <table class="t-products" borde="2" cellspacing="3" cellpadding="3" style="font-size: 10pt">
            <caption>Tabla - asistencia</caption>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Company Name</td>
                    <td>Email</td>
                    <td>Type</td>
                    <td>Comment</td>
                    <td>Subscription</td>
                </tr>
            </thead>
            
            <tbody>
                <?php
                    lista_asistencia();
                ?>
            </tbody>
            <tfoot>
                <tr>
                    <td>Name</td>
                    <td>Company Name</td>
                    <td>Email</td>
                    <td>Type</td>
                    <td>Comment</td>
                    <td>Subscription</td>
                </tr>
            </tfoot>
        </table>
        <?php 
}
?>
        <footer>
            <div class="branding"> <img src="images/ralogo_monogram.png" alt="Logo"> </div>
            <div class="description">Join over 500 hundred of the most creative and brilliant minds of art colleges all
                around the world for three days of lectures by world-renowned art scholars and artists.</div>
            <nav>
                <ol>
                    <li><a href="http://rouxacademy.com/about/about.htm">About the Roux Academy</a></li>
                    <li><a href="http://rouxacademy.com/privacy.htm">Privacy Policy</a></li>
                    <li><a href="http://rouxacademy.com/index.htm">Visit our website</a></li>
                </ol>
            </nav>

        </footer>
    </div>

</body>
<script>
function alerta(url, msg) {
    var opcion = confirm(msg);
    if (opcion == true) {
        window.location.href = url;
    } else {
        return false;
    }
}
</script>
<?php 
}else{
?>
<div class="wrapper">
    <header>
        <div class="branding"> <img src="images/ralogo_monogram.png" alt="Logo">
            <p>Roux Academy<br>
                Art • Media • Design</p>
        </div>
        <div class="description">
            <h1>Roux Academy 2016 Art Conference</h1>
            <p>Join over 500 hundred of the most creative and brilliant minds of art colleges all around the world
                for five days of lectures by world-renowned art scholars and artists, and seven days and nights of
                gallery exhibits featuring the best in contemporary art, including painting, sculpture, and more, in
                the beautiful halls of Hotel Contempo in the heart of Seattle.</p>
        </div>
        <nav>
            <ol>
                <li><a href="index.php">HOME</a></li>
                <li><a href="artists.php">ARTISTS</a></li>
                <li><a href="schedule/index.php">SCHEDULE</a></li>
                <li><a href="venue.php">VENUE/TRAVEL</a></li>
                <li><a href="register/index.php">REGISTER</a></li>
                <li><a href="Asistentes.php">LOGIN</a></li>
            </ol>
        </nav>
    </header>

    <form method="POST">
        <fieldset>
            <legend>Login</legend>
            <ul>
                <li>
                    <label for="username">Usuario</label>
                    <input id="username" name="username" type="text">
                </li>
                <li>
                    <label for="pass">Contraseña</label>
                    <input id="pass" name="pass" type="password">
                </li>
                <li>
                    <input type="submit" value="login">
                </li>
            </ul>
        </fieldset>
    </form>
    <footer>
        <div class="branding"> <img src="images/ralogo_monogram.png" alt="Logo"> </div>
        <div class="description">Join over 500 hundred of the most creative and brilliant minds of art colleges all
            around the world for three days of lectures by world-renowned art scholars and artists.</div>
        <nav>
            <ol>
                <li><a href="http://rouxacademy.com/about/about.htm">About the Roux Academy</a></li>
                <li><a href="http://rouxacademy.com/privacy.htm">Privacy Policy</a></li>
                <li><a href="http://rouxacademy.com/index.htm">Visit our website</a></li>
            </ol>
        </nav>

    </footer>
</div>
<?php
}
?>