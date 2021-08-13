@extends('layouts.app')

@section('content')
    @if (Auth::user()->type_user == '3')
        <menu-lateral></menu-lateral>
        <inscripcion-documentos></inscripcion-documentos>
    @endif
{{-- <memory-create></memory-create> --}}
<div class="container">

    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
