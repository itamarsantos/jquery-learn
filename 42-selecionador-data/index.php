<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>jQuery</title>
        <style text="text/css">
            body {margin:0}
            .horaescolha {
                width: 100px;
                height: 100px;
                background-color: #EEE;
                color: #FFF;
                position: absolute;
                display: none;
            }
        </style>
    </head>
    <body>
        Hora 1: <br><br>
        <input type="text" name="hora1"><br><br>

        Hora 2: <br><br>
        <input type="text" name="hora2"><br><br>

        Hora 3: <br><br>
        <input type="text" name="hora3"><br><br>

        Hora 4: <br><br>
        <input type="text" name="hora4"><br><br>

        <div class="horaescolha">
            <button>10:00</button>
            <button>13:00</button>
            <button>16:00</button>
            <button>20:00</button>
        </div>

        <script type="text/javascript" src="jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>
