@extends('layouts.app')

@section('content')
<board></board>
  <div class="container">
      @if (session('status'))
      <div class="alert alert-success">
           {{ session('status') }}
      </div>
      @endif
       
</div>
@endsection
