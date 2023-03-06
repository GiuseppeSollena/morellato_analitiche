<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Singlepage</title>
</head>

<body>

    <div id="app">
        @yield("nav")
        @yield("welcome")
        @yield("statistics_body")
    </div>

    <script src="{{asset('../js/app.js')}}"></script>
</body>
</html>