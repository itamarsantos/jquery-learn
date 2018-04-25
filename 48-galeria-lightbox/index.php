<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>jQuery</title>
        <style text="text/css">
            .bgbox {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.7);
                display: none;
            }
            .divbox {
                position: fixed;
                left: 50%;
                top: 50%;
                width: 500px;
                height: 400px;
                background-color: #FFF;
                margin-left: -270px;
                margin-top: -220px;
                padding: 20px;
                display: none;
            }
        </style>
    </head>
    <body>
        <a href="javascript:;" class="galeria"><img src="images/1.jpg" border="0" width="150"></a>
        <a href="javascript:;" class="galeria"><img src="images/2.jpg" border="0" width="150"></a>

        <div class="bgbox"></div>
        <div class="divbox">
            <img src="" border="0" width="100%">
            <button>Fechar</button>
        </div>

        <script type="text/javascript" src="jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>
