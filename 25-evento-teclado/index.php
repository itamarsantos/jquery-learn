<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>jQuery</title>
        <style text="text/css">
        .fundovermelho {background-color: red}
        </style>
    </head>
    <body>
        <input type="text" name="n" id="n"><br><br>
        <form method="post" id="form">
            Nome:<br>
            <input type="text" name="nome" id="nome"><br><br>
            E-mail:<br>
            <input type="email" name="email" id="email"><br><br>
            Idade:<br>
            <select name="idade" id="idade">
                <option>10 anos</option>
                <option>20 anos</option>
                <option>30 anos</option>
            </select><br><br>
            <input type="submit" value="Enviar">
        </form>

        <script type="text/javascript" src="jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>
