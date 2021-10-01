@extends('layouts.app')

@section('content')
@if (Auth::user()->type_user == '1')
  <menu-adm></menu-adm>
@endif

@if (Auth::user()->type_user == '5')
  <menu-padres></menu-padres>
@endif

  <list-proceedings-parents-component :type_user="{{ $type_user }}"></list-proceedings-parents-component>
  <footers></footers>
<div class="container">
  <!--<app-vue></app-vue>-->
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection