<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Morellato Analytics</title>
    <link rel="stylesheet" href="{{asset('../css/app.css')}}">
</head>
<style>
    body::-webkit-scrollbar {
        display: none;
        
    }
</style>

<body>
    <div id="app">
        @yield("content")


    </div>

    <script src="{{asset('../js/app.js')}}"></script>
</body>

</html>