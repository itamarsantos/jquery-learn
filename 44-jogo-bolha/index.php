<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>jQuery</title>
        <style text="text/css">
            body {margin:0}
            .placar {
                width: 150px;
                height: 120px;
                position: fixed;
                left: 0;
                top: 0;
                background-color: #DDD;
                text-align: center
            }
            #placar {
                font-size: 50px;
            }
            .bola {
                width: 50px;
                height: 50px;
                border-radius: 25px;
                position: absolute;
            }
        </style>
    </head>
    <body>
        <div class="placar">
            Bolas estouradas: <br>
            <span id="placar">0</span><br>
            <button id="comecar">Começar o jogo</button>
        </div>


        <script type="text/javascript" src="jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>
