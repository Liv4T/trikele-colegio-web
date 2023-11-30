<!DOCTYPE html>
  <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <title>Trikele Colegio</title>
    <meta name="description" content="Educación por ciclos,2 Ciclos en un año,Titulo de Bachiller"/>
    <meta name="keywords" content="Bachillerato por ciclos,Bachillerato,Colegio,Colegio por ciclos,2 grados en 1 año"/>
    <link rel="shortcat icon" href="images/icon.png" />
    @if(request()->getScheme()=="https")
    <!-- Facebook Pixel Code -->
    <meta name="facebook-domain-verification" content="inzmp346eb3hl8bmbpn6lhttcpvd9k" />
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1141409596328634');
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1141409596328634&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <!-- Global site tag (gtag.js) - Google Ads: 343608358 --> <script async src="https://www.googletagmanager.com/gtag/js?id=AW-343608358"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-343608358'); </script>
<!-- Global site tag (gtag) - Google Ads: 343608358 --> <amp-analytics type="gtag" data-credentials="include"> <script type="application/json"> { "vars": { "gtag_id": "AW-343608358", "config": { "AW-343608358": { "groups": "default" } } }, "triggers": { } } </script> </amp-analytics>
    <meta name="facebook-domain-verification" content="fzn5mgyk9xq1weqb0y8wr0k73mdzum" />
    @endif

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
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
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

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
    <!-- <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!-- Begin emoji-picker Stylesheets -->
    <link href="//onesignal.github.io/emoji-picker/lib/css/emoji.css" rel="stylesheet">
    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
  </head>
  <body >
<!-- Global site tag (gtag) - Google Ads: 343608358 --> <amp-analytics type="gtag" data-credentials="include"> <script type="application/json"> { "vars": { "gtag_id": "AW-343608358", "config": { "AW-343608358": { "groups": "default" } } }, "triggers": { } } </script> </amp-analytics>
    <div id="app">
        <a href="https://wa.me/573160108409?text=Me%20gustaría%20saber%20más%20del%20colegio" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
        <main class="">
            @yield('content')
            @yield('scripts')
        </main>
    </div>
    <style>
    body{
        background-color: #ff7900;
    }
    .navbar{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020;
    }
    .navbar-brand {
        display: inline-block;
        padding-top: 0.32rem;
        padding-bottom: 0.32rem;
        margin-right: 1rem;
        font-size: 1rem;
        line-height: inherit;
        white-space: nowrap;
    }
    .navbar a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    }
    .navbar-light .navbar-nav .nav-link{
    color: black;
    font-family: 'PoppinsBold';
        padding: 10px;
    }
    .bg-trikele {
        background-color:  #ff7900; !important;
        height: 60px;
        padding: 0px;
    }
    .nleft{
        align-self: flex-start;
    }
.bg-trikele {
    background-color:  #ff7900; !important;
    height: 60px;
    padding: 0px;
}
.nleft{
    align-self: flex-start;
}
.whatsapp {
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
}
.whatsapp a{
    color: white;
}
.whatsapp-icon {
  margin-top:13px;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    .btn-colegio{
        width: 69%;
    }
    .navbar-brand {
        display: inline-block;
        padding-top: 0.32rem;
        padding-bottom: 0.32rem;
        margin-right: 1rem;
        font-size: 11px;
        line-height: inherit;
        white-space: nowrap;
    }
}
    </style>
    @if(isset($usersChart))
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js" charset="utf-8"></script>
            {!! $usersChart->script() !!}
    @endif

  </body>
</html>
