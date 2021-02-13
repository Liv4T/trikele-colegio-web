@extends('layouts.app')

@section('content')
  @if (Auth::user()->type_user == '2')
        <menu-docente></menu-docente>
  @endif
<teacher-student  :id_class="{{ $id_class??'null' }}"  :id_module="{{ $id_module??'null' }}" :id_area="{{ $id_area }}" :id_classroom="{{ $id_classroom }}" :id_student="{{ $id_student }}"></teacher-student>
<footers></footers>
<div class="container">
    <div class="row justify-content-center">
      <div class="card-body"> @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
      </div>
    </div>
    </div>
</div>
@endsection
