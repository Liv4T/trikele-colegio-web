@extends('layouts.app')

@section('content')
<purchase-module-resume :plan_type="'{{ $plan_type }}'" :module_id="'{{ $module_id }}'" :voucher="'{{ $voucher }}'"></purchase-module-resume>
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
