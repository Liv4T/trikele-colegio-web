@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header fondo">
                        <div class="d-flex align-items-center">
                            Editar Foro
                            <div class="ml-auto">
                                <a style="color:white;" href="{{route('questions')}}" class="btn btn-sm btn-outline-info">Atrás</a>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <form method="post" action="{{route('updateQuestion', $editQue->id)}}">
                            {{csrf_field()}}
                            <input type="hidden" name="id_question" value={{ $editQue->id }}>

                            <div class="form-group">
                                <label for="">Pregunta: <span style="color: red;font-size: 20px;">*</span></label>
                                <input type="text" class="form-control {{$errors->has('title')?'is-invalid':''}}" id="" name="title" spellcheck="false" value="{{old('title', $editQue->title)}}">
                                @if($errors->has('title'))
                                    <div class="invalid-feedback">
                                        <strong> {{$errors->first('title')}} </strong>
                                    </div>
                                @endif
                            </div>

                            <div class="form-group">
                                <label for="">Descripción: <span style="color: red;font-size: 20px;">*</span></label>

                                <textarea class="form-control {{$errors->has('body')?'is-invalid':''}}" id="company-des" rows="5" name="body" >{{old('body', $editQue->body)}}</textarea>
                                @if($errors->has('body'))
                                    <div class="invalid-feedback">
                                        <strong> {{$errors->first('body')}} </strong>
                                    </div>
                                @endif
                            </div>

                            <div class="form-group text-right">

                                <button type="submit" name="submit" class="btn btn-warning">Actualizar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
