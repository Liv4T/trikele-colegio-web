<template>
    <div>
        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
            <i style="color:#FFE164" class="fas fa-bell"></i> <span id="span-counter" class="badge badge-light">0</span> <span class="caret"></span>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <div class="event_container">
                <div class="list-group">
                  <a v-for="(event, k_event) in events" v-bind:key="k_event" class="list-group-item list-group-item-action text-truncate" :href="event.hangout"><b>{{extractHour(event.dateFrom)}}</b> [{{event.area}} {{event.classroom}}] {{event.name}}</a>
                </div>
            </div>
            <div class="event_all">
              <a href="/calendar">Ver todos</a>
            </div>
            <!---->
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      events: [],
    };
  },
  created() {},
  mounted() {
        axios.get('/api/event/today').then((response) => {
            this.events=response.data;
            let spanCounter=document.getElementById('span-counter');
            spanCounter.innerHTML=this.events.length;
        });
  },
  methods: {
    extractHour(date){
      return `${date}`.substring(11,20);
    }
  },
};
</script>
<style>
    a:not(.md-button):hover{
       text-decoration: none;
    }
    .navbar a{
      text-align: left !important;
    }
    .event_container{
        width: 450px;
        padding: 5px;
        max-height: 200px;
        overflow:auto;
    }
    .event_all a{
      width:100%;
      text-align: center !important;
      padding: 10px;
      background: #278080;
      color:white;
      text-decoration: none;
    }
    .list-group-item-action{
      text-align: left;
      width:100%;
      word-wrap: break-word;
    }
    .list-group-item-action:hover{
      text-decoration: none;
      background: #FFE164;
      font-weight: 600;
      color:white;
    }

</style>
