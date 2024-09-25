@extends('layouts/app')

@section ('title') Главная страница @endsection

@section ('header') @include ('components/header') @endsection

@section ('main_content') @include ('todo-list') @endsection

