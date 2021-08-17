@extends('layouts.app')

@section('content')
  <menu-lateral></menu-lateral>
  <inicio-materias-component :user="{{ Auth::user()->type_user }}"></inicio-materias-component>
  <div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
  </div>
@endsection
