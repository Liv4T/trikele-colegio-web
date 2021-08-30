@extends('layouts.app')

@section('content')
@section('content')

  @if (Auth::user()->type_user == '1')
    <menu-adm></menu-adm>
  @endif
  <div class="back">
    <div>
      <course-trimestre-component :id_area="{{$id_area}}" :id_classroom="{{$id_classroom}}"></course-trimestre-component>
    </div>
  </div>    
<div class="container">

    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
