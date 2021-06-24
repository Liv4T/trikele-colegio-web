@extends('layouts.app')

@section('content')
<process-ribbon-component :items="[{title:'Seleccionar',link:'/compra/plan'},{title:'Identificarme'},{title:'Pagar'}]" :active="0"></process-ribbon-component>
<purchase-plan :voucher="'{{ $voucher }}'"></purchase-plan>
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
