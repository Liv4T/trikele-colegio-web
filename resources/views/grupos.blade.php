@extends('layouts.app')

@section('content')
 {{-- <examp></examp> --}}
   @if (Auth::user()->type_user == '2')
        <menu-docente></menu-docente>
        <inicio-component></inicio-component>
  @endif
  @if (Auth::user()->type_user == '3')
    <menu-lateral></menu-lateral>
 @endif
  @if (Auth::user()->type_user == '1')
    <menu-adm></menu-adm>
 @endif
 <div class="back">
<div class="container" style="background-image:url('uploads/Fondo_chat.jpg');">
    <div class="row">
        <div class="col-sm-6">
            <create-group :initial-users="{{ $users }}"></create-group>
                 <div class="caja">
                     <img
                        src="https://firebasestorage.googleapis.com/v0/b/bd-img.appspot.com/o/CHAT.png?alt=media&token=bfa70c69-9e53-46b7-a337-e64c67058147"
                        width="500px"
                        class="img-fluid"
                        alt=""
                    />
                 </div>

        </div>
        <div class="col-sm-6">
            <groups :initial-groups="{{ $groups }}" :user="{{ $user }}"></groups>
        </div>
    </div>
</div>
 </div>

@endsection
