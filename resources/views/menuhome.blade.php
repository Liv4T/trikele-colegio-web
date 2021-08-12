@extends('layouts.app')

@section('content')

<menu-home></menu-home>

<home-grados :plan_code="'{{ $plan }}'"></home-grados>

@endsection
