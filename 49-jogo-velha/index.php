<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>jQuery</title>
        <style text="text/css">
        .area {
            width: 80px;
            height: 65px;
            border: 2px solid #000;
            float: left;
            text-align: center;
            padding-top: 15px;
        }
        .placar {
            width: 252px;
            height: 80px;
        }
        </style>
    </head>
    <body>
        <div class="placar">
            É a vez de:<br>
            <img src="" border="0" height="50">
        </div>

        <div class="area a1" data-marcado=""></div>
        <div class="area a2" data-marcado=""></div>
        <div class="area a3" data-marcado=""></div>
        <div style="clear:both"></div>
        <div class="area b1" data-marcado=""></div>
        <div class="area b2" data-marcado=""></div>
        <div class="area b3" data-marcado=""></div>
        <div style="clear:both"></div>
        <div class="area c1" data-marcado=""></div>
        <div class="area c2" data-marcado=""></div>
        <div class="area c3" data-marcado=""></div>

        <script type="text/javascript" src="jquery.min.js"></script>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>
