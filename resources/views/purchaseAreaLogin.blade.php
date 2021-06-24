@extends('layouts.app')

@section('content')
<process-ribbon-component :items="[{title:'Seleccionar',link:'/compra/plan'},{title:'Identificarme'},{title:'Pagar'}]" :active="1"></process-ribbon-component>
<purchase-area-login :area_id="'{{ $area_id }}'" :plan_type="'{{ $plan_type }}'" :payment_code="'{{ $payment_code }}'" :voucher="'{{ $voucher }}'" :aut="'{{ Auth::user()?Auth::user()->type_user:0 }}'"></purchase-area-login>
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
