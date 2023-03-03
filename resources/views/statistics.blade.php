<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>statistics</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>

<body>

    <div id="app">
        @yield("nav")
        @yield("statistics_body")
    </div>

    <script src="{{asset('../js/app.js')}}"></script>
</body>
</html>
