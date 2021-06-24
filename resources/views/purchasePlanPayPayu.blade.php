@extends('layouts.app')
@section('content')
<form id="payu-form" method="post" action="{{$data['url']}}">
    <input name="merchantId"    type="hidden"  value="{{$data['merchant_id']}}"   >
    <input name="accountId"     type="hidden"  value="{{$data['account_id']}}" >
    <input name="description"   type="hidden"  value="{{$data['description']}}"  >
    <input name="referenceCode" type="hidden"  value="{{$data['reference_code']}}" >
    <input name="amount"        type="hidden"  value="{{$data['amount']}}"   >
    <input name="tax"           type="hidden"  value="{{$data['tax']}}"  >
    <input name="taxReturnBase" type="hidden"  value="{{$data['taxReturnBase']}}" >
    <input name="currency"      type="hidden"  value="{{$data['currency']}}" >
    <input name="signature"     type="hidden"  value="{{$data['signature']}}"  >
    <input name="test"          type="hidden"  value="{{$data['test']}}" >
    <input name="buyerEmail"    type="hidden"  value="{{$data['buyerEmail']}}" >
    <input name="responseUrl"    type="hidden"  value="{{$data['responseUrl']}}" >
    <input name="confirmationUrl"    type="hidden"  value="{{$data['confirmationUrl']}}" >
  </form>
  <div class="loading-payu">Conectando con PAYU...</div>
  <footers></footers>
    <div class="container">
        <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
            <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
        </div>
        </div>
    </div>
    <style>
        .loading-payu{width: 100%;margin-top: 50px;text-align: center;}

    </style>
    <script>
        setTimeout(()=>{
            document.getElementById("payu-form").submit();
        },2000)
    </script>
@endsection

