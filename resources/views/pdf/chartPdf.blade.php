
<div class="container">
    <h1>Users Graphs</h1>
    <div class="row">
        <div class="col-6">
            <div class="card rounded">
                <div class="card-body py-3 px-3" style="width:40%;">
                    {!! $usersChart->container() !!}
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js" charset="utf-8"></script>
{!! $usersChart->script() !!}
<script>
var canvas = document.getElementById('{{ $id_charts }}');
var dataURL = canvas.toDataURL();
console.log(dataURL);
</script>
