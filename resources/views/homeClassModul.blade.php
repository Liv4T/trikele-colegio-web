@extends('layouts.app')

@section('content')
@section('content')

<menu-home></menu-home>

<home-class :id_weekly="{{ $id_weekly }}" :plan_code="'{{ $plan }}'" >
</home-class>

@endsection
