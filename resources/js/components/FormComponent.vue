<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Event"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.eventName"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2">
        <div class="row">
          <div class="col-md-6">
            <label>From</label>
            <date-picker name="startDate" v-model="form.startDate" :config="form.datepickerOptions"></date-picker>
          </div>
          <div class="col-md-6">
            <label>To</label>
            <date-picker name="endDate" v-model="form.endDate" :config="form.datepickerOptions"></date-picker>
          </div>
        </div>
      </b-form-group>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" >
          <b-form-checkbox :value="weekday.value" :key="index" v-for="(weekday, index) in weekdays">{{weekday.abbrv}}</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>

</template>

<script>
  import { BForm, BFormGroup, BFormCheckboxGroup, BFormInput, BFormCheckbox, BButton } from 'bootstrap-vue'
    export default {
        components: { BForm, BFormGroup, BFormCheckboxGroup, BFormInput, BFormCheckbox, BButton },
        mounted() {
        },
        data() {
          return {
            form: { 
              eventName: '',
              checked: [],
              startDate: null,
              endDate: null,
              datepickerOptions: {
                format: 'MM/DD/YYYY',
                useCurrent: false,
                showClear: true,
                showClose: true,
              }
            },
            weekdays: [
              {abbrv:'Mon', value: 1},  
              {abbrv:'Tue', value: 2}, 
              {abbrv:'Wed', value: 3}, 
              {abbrv:'Thu', value:4}, 
              {abbrv:'Fri', value:5},
              {abbrv:'Sat', value:6}, 
              {abbrv:'Sun', value:0}],
          }
        },
        props: {
          callAlert: "",
        },
        methods: {
          onSubmit(evt) {
            let event = {
              eventName: this.form.eventName, 
              startDate: new Date(this.form.startDate),
              endDate: new Date(this.form.endDate),
              weekdaysIndex: this.form.checked
            };

            this.$store.commit('SET_EVENTS', event)
            
            evt.preventDefault()
            var self = this;
            axios.post('api/event/new', event).then(function(res){ 
              self.callAlert(); 
              self.form.eventName ='';
              self.form.checked = [];
              self.form.startDate = null;
              self.form.endDate = null;
            });
          }
        }
    }
</script> 
