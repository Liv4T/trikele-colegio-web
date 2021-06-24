@extends('layouts.app')

@section('content')
<purchase-area-resume :plan_type="'{{ $plan_type }}'" :area_id="'{{ $area_id }}'" :voucher="'{{ $voucher }}'"></purchase-area-resume>
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
