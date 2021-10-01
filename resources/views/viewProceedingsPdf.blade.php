@extends('layouts.app')

@section('content')
  <menu-adm></menu-adm>
  <view-proceedings-pdf-component :id_proceeding="'{{ $id_proceeding }}'" :type_view="'{{ $type_view }}'"></view-proceedings-pdf-component>
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