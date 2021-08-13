@extends('layouts.app')

@section('content')
@section('content')
  @if (Auth::user()->type_user == '2')
        <menu-docente-2></menu-docente-2>
  @endif
  @if (Auth::user()->type_user == '3')
    <menu-lateral></menu-lateral>
 @endif
  @if (Auth::user()->type_user == '1')
    <menu-adm></menu-adm>
 @endif
    <lectives-teacher-indicators :id_lective_planification="{{ $id_lective_planification }}"></lectives-teacher-indicators>


<div class="container">

    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
