@extends('layouts.app')

@section('content')
{{-- <formstyle></formstyle> --}}
<menu-lateral></menu-lateral>
<game-component></game-component>
  <footers></footers>
<div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
</div>
@endsection
