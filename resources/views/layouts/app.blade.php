<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    @vite(['resources/scss/pages/home.scss', 'resources/views/components/header/header.js', 'resources/views/components/todo-list/todo-list.js'])
</head>

<body>
    <svg style="height: 24px; width: 24px; position: absolute" aria-hidden="true">
        <symbol id="icon-edit" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3_13)">
                <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="#323232"/>
            </g>
            <defs>
                <clipPath id="clip0_3_13">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </symbol>
    </svg>
    @yield('header')
    @yield('main_content')
</body>

</html>