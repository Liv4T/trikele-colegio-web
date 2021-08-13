@extends('layouts.app')

@section('content')
  @if (Auth::user()->type_user == '2')
        <menu-docente-2></menu-docente-2>
        <inicio-component></inicio-component>
  @endif
  @if (Auth::user()->type_user == '3')
    <menu-lateral></menu-lateral>
 @endif
  @if (Auth::user()->type_user == '1')
    <menu-adm></menu-adm>
 @endif
  <div class="back">
      @if (session('status'))
      <div class="alert alert-success">
           {{ session('status') }}
      </div>
      @endif

<div class="back">
          <div class="row ">
      <div class="col-md-6">
        <div class="card">
           <div class = " card-header fondo ">Dibujar</div>
            <div class = "card-body">
                <draw-c></draw-c>
            </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
             <div class = "card-header fondo">Redactar</div>
            <div class = "card-body">
                <blog-component></blog-component>
            </div>
        </div>
     </div>
</div>



      </div>

</div>
@endsection
