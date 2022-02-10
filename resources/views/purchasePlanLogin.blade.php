@extends('layouts.app')

@section('content')
<process-ribbon-component :items="[{title:'Seleccionar',link:'/compra/plan'},{title:'Identificarme'},{title:'Pagar'}]" :active="1"></process-ribbon-component>
<purchase-plan-login :plan_type="'{{ $plan_type }}'" :pago_pesos="'{{ $pago_pesos }}'" :pago_usd="'{{ $pago_usd }}'" :voucher="'{{ $voucher }}'" :payment_code="'{{ $payment_code }}'" :aut="'{{ Auth::user()?Auth::user()->type_user:0 }}'"></purchase-plan-login>
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
