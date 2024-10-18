<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    @vite(['resources/scss/pages/home.scss', 'resources/js/pages/home.js',])
</head>

<body>
    @yield('header')
    @yield('main_content')
    @yield('footer')
</body>

</html>