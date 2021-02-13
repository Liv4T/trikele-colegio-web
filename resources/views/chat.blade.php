@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="card-body"> @if (session('status'))
          <div class="alert alert-success" role="alert">{{ session('status') }}</div>@endif
        </div>
    </div>
    <div class = " col-md-5 col-md-offset-2 mx-auto ">
        <div class="card">
            <h3 class = " card-header ">Chat Room</h3>
            <div class="panel panel-info chat-room">
                <div class = "card-body">
                    <chat-log :messages="messages" :user="user"></chat-log>
                </div>
            <div class="panel-footer">
                <chat-composer v-on:messagesent="addMessage" v-on:loadmessage="getMessages"></chat-composer>
            </div>
          </div>
        </div>
    </div>
</div>
<footers></footers>
@endsection
