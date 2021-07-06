@extends('layouts.app')
@section('content')
<purchase-plan-pay-payu-result :model="{{$model}}"></purchase-plan-pay-payu-result>
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

