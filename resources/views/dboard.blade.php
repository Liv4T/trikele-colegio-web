@extends('layouts.app')

@section('content')
<formstyle></formstyle>
<div class="col-md-7 mx-auto">
    <div class="card">
        <h3 class = "card-header">Board</h3>
        <div class = "card-body">
            <blog-component></blog-component>
        </div>
    </div>
</div>
  <footers></footers>
<div class="container">
    <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
          <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
    </div> 
   
</div>
@endsection