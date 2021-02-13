@extends('layouts.app')

@section('content')
<!--<formstyle></formstyle>-->
  {{-- <trivia-component></trivia-component> --}}
  {{-- <complete-component></complete-component> --}}
  <menu-lateral></menu-lateral>
  <open-component></open-component>
   {{-- <quiz-component></quiz-component> --}}
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
