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
      <div  class="row day-row" v-for="(day, dayIndex) in days" :key="dayIndex" :class="{active: day.isActive}">
        <div class="col-md-6">{{day.date.getDate()}} {{weekday_abbrv[day.weekday]}}</div>
        <div>{{filterEventM(day, dayIndex)}}</div>
        <div class="col-md-6">{{day.event.eventName}}</div>
      </div>
  </div>
  </div>
</template>

<script>
  import moment from 'moment'
  
    export default {
        mounted() {
          this.showDays();
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
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            days: [],
          }
        },
        methods: {
          showDays() {
            for(var i=0; i < moment(moment().format('MMM YYYY')).daysInMonth(); i++){
              this.days.push(
                {
                  weekday: moment().startOf('month').add(i, 'days').toDate().getDay(),
                  date: new Date(moment().startOf('month').add(i, 'days').toDate()),
                  event: { 
                    eventName: '',
                    startDate: '',
                    endDate: '',
                    weekdays: []
                  },
                  isActive: false
                });  
            }
          },
          filterEventM(day, dayIndex) {
            this.events.forEach(event=>{
              if(day.date >= event.startDate && day.date <= event.endDate 
              && event.weekdaysIndex.includes(parseInt(day.weekday))){
                this.days[dayIndex].event = event;
                this.days[dayIndex].isActive = true;
                return event.eventName;
              }
            })
          }
        },
        filters: {
           filterEvent(event, day){
            if(day.date >= event.startDate && day.date <= event.endDate 
            && event.weekdaysIndex.includes(parseInt(day.weekday))){
              return event.eventName
            };
             
          }
        },
        computed: {
          events(){
            return this.$store.getters.events
          }
        }
    }
    
</script>
