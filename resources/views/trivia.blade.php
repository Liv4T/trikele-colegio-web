@extends('layouts.app')

@section('content')
<!--<formstyle></formstyle>-->
<menu-lateral></menu-lateral>
  <trivia-component :trivia="{{ $quiz }}"></trivia-component>
  {{-- <complete-component></complete-component> --}}
  {{-- <open-component></open-component> --}}
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
