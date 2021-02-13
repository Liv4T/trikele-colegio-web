@extends('layouts.app')
@section('content')
  @if (Auth::user()->type_user == '2')
        <menu-docente></menu-docente>
        <inicio-component></inicio-component>
  @endif
  @if (Auth::user()->type_user == '3')
    <menu-lateral></menu-lateral>
 @endif
  @if (Auth::user()->type_user == '1')
    <menu-adm></menu-adm>
 @endif

<div class="back">
    <div class="row mx-auto">
        <div class="col-md-10 mx-auto">
            <div class="card text-center">
                <div class="card-header fondo">
                   <h3>Horario</h3>
                </div>

                <div class="card-body">
                    @if(session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <table class="table table-bordered">
                        <thead class="horario1">
                            <th width="125">Time</th>
                            @foreach($weekDays as $day)
                                <th>{{ $day }}</th>
                            @endforeach
                        </thead>
                        <tbody>
                            @foreach($calendarData as $time => $days)
                                <tr>
                                    <td class="horario1">
                                        {{ $time }}
                                    </td>
                                    @foreach($days as $value)
                                        @if (is_array($value))
                                            <td rowspan="{{ $value['rowspan'] }}" class="align-middle text-center" style="background-color:#f0f0f0">
                                                {{ $value['class_name'] }}<br>
                                                Teacher: {{ $value['teacher_name'] }}
                                            </td>
                                        @elseif ($value === 1)
                                            <td></td>
                                        @endif
                                    @endforeach
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts')
@parent
<style>
    .horario1{
        background-color: #c1e9eb;

    }
</style>
@endsection
