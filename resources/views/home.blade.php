@extends('layouts.app')

@section('title', 'Главная страница')

@section ('header')
    @include ('components.header.index') 
@endsection

@section ('main_content')
    @include ('components.todo-list.index') 
@endsection