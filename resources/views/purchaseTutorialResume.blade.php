@extends('layouts.app')

@section('content')
<purchase-tutorial-resume :plan_type="'{{ $plan_type }}'" :group_name="'{{ $group_name }}'" :area_id="'{{ $area_id }}'" :schedulearea_id="'{{ $schedulearea_id }}'" :time_index="'{{ $time_index }}'" :voucher="'{{ $voucher }}'"></purchase-tutorial-resume>
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
