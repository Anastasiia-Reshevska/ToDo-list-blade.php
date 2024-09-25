<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{ mix('/css/home.css')}}">

</head>

<body>

@yield('header')

@yield('main_content')


<script src="{{ asset('/js/home.js')}}"></script>
</body>

</html>