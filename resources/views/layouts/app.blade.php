<!DOCTYPE html>
  <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- CSRF Token -->
      <meta name="csrf-token" content="{{ csrf_token() }}">

      <title>{{ config('app.name', 'Live4teach') }}</title>

      <!-- Scripts -->
      <script src="{{ asset('js/app.js') }}" defer></script>
      <script src="https://kit.fontawesome.com/a72f7eba65.js" crossorigin="anonymous"></script>
    <!--<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" />-->
    <link href="https://unpkg.com/@coreui/coreui@2.1.16/dist/css/coreui.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
    <link href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" rel="stylesheet" />
    <link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/solid.css"
      integrity="sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/brands.css"
      integrity="sha384-i2PyM6FMpVnxjRPi0KW/xIS7hkeSznkllv+Hx/MtYDaHA5VcF0yL3KVlvzp8bWjQ"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css"
      integrity="sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J"
      crossorigin="anonymous"
    />

      <!-- Fonts -->
      <link rel="dns-prefetch" href="//fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

      <!-- Styles -->
      <link href="{{ asset('css/app.css') }}" rel="stylesheet">
      <link href="{{ asset('css/design.css') }}" rel="stylesheet">
      <script>
      window.Forum = <?php echo json_encode([
            'auth' => Auth::check(),
            'user_id' => Auth::check() ? Auth::user()->id : -1,
            'role' => Config::get('type_user')
        ]); ?>
      </script>

    <!-- Begin emoji-picker Stylesheets -->
    <link href="//onesignal.github.io/emoji-picker/lib/css/emoji.css" rel="stylesheet">
  </head>
  <body>

    <div id="app">

        <nav class="navbar fixed-top navbar-expand-md navbar-light navbar-laravel">
                <a class="navbar-brand" href="{{ url('/') }}">
                    <div>
                        {{ config('Life4teach') }}
                        <img thumbnail fluid src="https://firebasestorage.googleapis.com/v0/b/chat-firebase-7b7ff.appspot.com/o/LOGO_LIV4T_SKOOL.png?alt=media&token=e0a74c90-0f0d-4932-863a-827b5f87ed0c"  alt="4"></img>
                    </div>

                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">



                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav mr-sm-6 justify-content-start">
                        <!-- Authentication Links -->
                            @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('loginNew') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('registerNew'))
                            <!-- li class="nav-item"-->
                                <!--a class="nav-link" href="{{ route('registerNew') }}">{{ __('Register') }}</a-->
                            <!--/li-->
                            @endif
                            @else
                            <li class="nav-item dropdown">
                               <notification-component></notification-component>
                            </li>
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/inicio">Ir a clase</a>
                                    <a class="dropdown-item" href="/changePassword">Cambiar Contraseña</a>
                                    <a class="dropdown-item" href="/manual">Ayuda</a>
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                            @endguest
                    </ul>
                </div>
        </nav>

        <main class="py-3" id="content">
            @yield('content')

        </main>
    </div>
            @yield('scripts')
  </body>
</html>
<style>
.navbar{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
}

.navbar a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

}
.navbar-brand{
    max-height: 120px;
}
.navbar-brand img{
    width:200px;
}
.navbar-brand>div{
    background-color:white;
    max-width: 100%;
    border-radius:5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}
.py-3{
    margin-top:5px;
}
@media only screen and (max-width: 400px) {
    .navbar-brand img{
        width:150px;
    }
}
</style>
<script>
    document.getElementById('content').onscroll = function() {
        console.log("scrolling");
    };
</script>
   @if(isset($usersChart))
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js" charset="utf-8"></script>
{!! $usersChart->script() !!}
@endif
