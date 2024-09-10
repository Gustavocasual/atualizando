<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="estilos.css">
    <script src="script.js"></script>
    <title>Document</title>
</head>
<body>
    <header>
        
    </header>
    <main>
        
        <div class="teladelogin">
            <div class="teladecorar">
            <div class="logo"></div>
        </div>
            <form action="login.php" method="post">
            <div class="teladeusuario">
             <input type="text" name="nome"  class="nomedousuario" placeholder="Nome:" required >
             <div class="user"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg></div>
             
             <input type="email" name="email"  class="emialdousuario" placeholder="Email:" required>
              <div class="emaillog"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg></div>
             <button type="submit" class="btentrar">ENTRAR</button>
             <div class="btregistro" onclick="cadastro()">REGISTRAR-SE</div>
            </div>
        </form>
        </div>
    </main>
    <footer>

    </footer>
</body>
</html>