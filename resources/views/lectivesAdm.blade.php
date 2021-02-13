{{-- Esta vista se encarga de mostrar el listado de Electivas creadas, hacer la asignación 
    de electivas a un docente --}}
@extends('layouts.app')

@section('content')
<menu-adm></menu-adm>
<lectives-adm-component></lectives-adm-component>
<footer></footer>
<div class="container">

    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
