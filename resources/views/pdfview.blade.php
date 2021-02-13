@extends('layouts.app')

@section('content')

{{-- <h1>Sales Graphs</h1> --}}

{{-- <div style="width: 50%">
    {!! $usersChart->container() !!}
</div> --}}
<a href="{{ route('pdfview',['download'=>'pdf']) }}">Download PDF</a>
<div class="container">
    <h1>Users Graphs</h1>
    <div class="row">
        <div class="col-6">
            <div class="card rounded">
                <div class="card-body py-3 px-3">
                    {!! $usersChart->container() !!}
                </div>
            </div>
        </div>
    </div>
    <img src="" alt="">
</div>
<script>
// var canvas = document.getElementById('');
// var dataURL = canvas.toDataURL();
// console.log(dataURL);

//  var ctx = document.getElementById("{{ $id_charts }}").getContext("2d");
// const canvas = document.getElementById("{{ $id_charts }}")[0];
// let ctx = canvas.getContext('2d');
// let img = new Image();
// img.onload = async (e) => { ctx.drawImage(img, 0, 0); ctx.font = "165px Arial";ctx.fillStyle = "white"; b64Code = await (canvas).toDataURL(); }
// console.log(img.onload);
var canvas = document.getElementById('{{ $id_charts }}');
var dataURL = canvas.toDataURL();
console.log(dataURL);
</script>

@endsection

