@extends('layouts.app')

@section('content')

<menu-home></menu-home>

<home-modulos :id_area="{{ $id_area }}" :id_grade="{{ $id_grade }}" :plan_code="'{{ $plan }}'"></home-modulos>

@endsection
