<template>
  <div>
    <div id="app" class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <h3>
              {{monthAndYear}}
            </h3>
          </div>
        </div>
      </div>
      <div  class="row day-row" v-for="(day, dayIndex) in days" :key="dayIndex" :class="{active: isDayEmpty(day.event)}">
        <div class="col-md-6"><h5>{{day.date.getDate()}} {{weekday_abbrv[day.weekday]}}</h5></div>
        <div class="col-md-6" v-if="isDayEmpty(day.event)">{{day.event.eventName}}</div>
      </div>
  </div>
  </div>
</template>

<script>
  import moment from 'moment'
  
    export default {
        mounted() {

          var self = this;

          axios.get('api/events').then(function(res){
            var data = res.data;

            data.forEach(event => {
              var weekdays=[];
              event.weekdays.forEach(rec => {
                weekdays.push(rec.weekday);
              })

              var event = {
                eventName: event.name,
                startDate: new Date(event.start_date),
                endDate: new Date(event.end_date),
                weekdaysIndex: weekdays
              }

              self.$store.commit('SET_EVENTS', event)
            });
          });
        },
        data() {
          return {
            monthAndYear: moment().format('MMM YYYY'),
            weekday_abbrv: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          }
        },
        methods: {
          isDayEmpty(event){
            return event!=null;
          }
        },
        computed: {
          days(){
            var days = [];
            var day, fullDate, weekday;

            for(var i=0; i < moment(moment().format('MMM YYYY')).daysInMonth(); i++){

              day = moment().startOf('month').add(i, 'days').toDate()
              weekday = day.getDay()
              fullDate = new Date(day)

              days.push({
                  weekday: weekday,
                  date: fullDate,
                  event: this.$store.getters.getEvent(fullDate, weekday)
                });  

            }

            return days;
          }
        }
    }
    
</script>
