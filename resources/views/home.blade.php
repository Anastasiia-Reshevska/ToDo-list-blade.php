@extends('layouts.app')

@section('title', 'Главная страница')

@section ('header')
@include ('components.header.header') @endsection

@section ('main_content')
@include ('components.todo-list.todo-list') @endsection