<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>jQuery</title>
        <style text="text/css">
            .div{width:200px;height:170px;background-color:#EEE}
        </style>
    </head>
    <body>
        <form method="post" id="form">
            Usuário:<br><input type="text" name="usuario"><br><br>
            Senha:<br><input type="password" name="senha"><br><br>
            <select name="idade">
                <option>10 anos</option>
                <option>20 anos</option>
                <option>30 anos</option>
            </select><br><br>
            <input type="submit" value="Entrar">
        </form>
        <div class="div"></div>
        <button>Ação</button>

        <script type="text/javascript" src="jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>
