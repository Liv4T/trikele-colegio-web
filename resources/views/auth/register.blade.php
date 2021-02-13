@extends('layouts.app')

@section('content')
<register-component></register-component>
  <footers></footers>
<!--div class="container">
    <div class="custom-card text-center">
     <h3 class="card-header">Registro</h3>
        <div class="col-md-8">
                <div class="card-header">{{ __('Register') }}</div>
                    {{-- <form method="POST" action="{{ route('users_save') }}"> --}}
                        @csrf
                        <form-wizard title subtitle>
                        <tab-content title="Datos personales" icon="fas fa-user">
                        <div class="card-body">
                        <div class="form-group row">
                            <div class="col">
                                <label for="name">{{ __('Nombre') }}</label>
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="col">
                                <label for="last_name">{{ __('Apellido') }}</label>
                                <input id="last_name" type="text" class="form-control{{ $errors->has('last_name') ? ' is-invalid' : '' }}" name="last_name" value="{{ old('last_name') }}" required >

                                @if ($errors->has('last_name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('last_name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group row">
                                <div class="col">
                                    <label for="user_name">{{ __('Nombre de usuario') }}</label>
                                    <input id="user_name" type="text" class="form-control{{ $errors->has('user_name') ? ' is-invalid' : '' }}" name="user_name" value="{{ old('user_name') }}" required>

                                    @if ($errors->has('user_name'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('user_name') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div class="col">
                                        <label for="email">{{ __('E-Mail ') }}</label>
                                        <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                                        @if ($errors->has('email'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('email') }}</strong>
                                            </span>
                                        @endif
                                    </div>

                            </div>
                        <div class="form-group row">
                                <div class="col">
                                        <label for="id_number">{{ __('Numero de identificacion') }}</label>
                                        <input id="id_number" type="text" class="form-control{{ $errors->has('id_number') ? ' is-invalid' : '' }}" name="id_number" value="{{ old('id_number') }}" required >

                                        @if ($errors->has('id_number'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('id_number') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                            <div class="col">
                                    <label for="birthday">{{ __('Fecha de Nacimiento') }}</label>
                                    <input id="birthday" type="date" class="form-control{{ $errors->has('birthday') ? ' is-invalid' : '' }}" name="birthday" value="{{ old('birthday') }}" required >

                                    @if ($errors->has('birthday'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('birthday') }}</strong>
                                        </span>
                                    @endif
                                </div>
                             </div>
                   </tab-content>
                   <tab-content title="Información adicional" icon="fas fa-id-card">
                        <div class="form-group row">
                            <div class="col">
                                    <label for="age">{{ __('Edad') }}</label>
                                    <input id="age" type="text" class="form-control{{ $errors->has('age') ? ' is-invalid' : '' }}" name="age" value="{{ old('age') }}" required >

                                    @if ($errors->has('age'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('age') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div class="col">
                                        <label for="TypeUser">{{ __('TypeUser') }}</label>
                                        <select2 ></select2>

                                        @if ($errors->has('TypeUser'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('TypeUser') }}</strong>
                                            </span>
                                        @endif
                                    </div>
                                </div>
                        <div class="form-group row">
                            <div class="col">
                                <label for="phone">{{ __('Telefono') }}</label>
                                <input id="phone" type="text" class="form-control{{ $errors->has('phone') ? ' is-invalid' : '' }}" name="phone" value="{{ old('phone') }}" required >
                                        @if ($errors->has('phone'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('phone') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="col">
                                <label for="picture">{{ __('Foto') }}</label>
                                <input id="picture" type="file" class="form-control{{ $errors->has('picture') ? ' is-invalid' : '' }}" name="picture" value="{{ old('picture') }}" required >

                                @if ($errors->has('picture'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('picture') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                            <div class="form-group row">
                                <div class="col">
                                    <label for="Category">{{ __('Category') }}</label>
                                    <select2 ></select2>

                                    @if ($errors->has('Category'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('Category') }}</strong>
                                        </span>
                                    @endif
                                </div>
                                <div class="col">
                                    <label for="subcategory">{{ __('SubCategory') }}</label>
                                    <select2></select2>

                                    @if ($errors->has('subcategory'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('subcategory') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                        <div class="form-group row">

                            <div class="col-md-6">
                                <label for="password">{{ __('Password') }}</label>
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="col">
                                <label for="password-confirm">{{ __('Confirm Password') }}</label>
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>
                        <div class="form-group row">
                                <div class="col">
                                        <label for="address">{{ __('Direccion') }}</label>
                                        <input id="address" type="text" class="form-control{{ $errors->has('address') ? ' is-invalid' : '' }}" name="address" value="{{ old('address') }}" required >

                                        @if ($errors->has('address'))
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $errors->first('address') }}</strong>
                                                </span>
                                            @endif
                                        </div>

                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                        </div>
                         </tab-content>
                        </form-wizard>
                    </form>

        </div>
    </div>
</div-->
@endsection
