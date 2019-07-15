<template>
    <div class="container-fluid bg-light main">
        <div class="row justify-content-center">
            <div class="col-md-12"> 
                <b-alert
                    :show="dismissCountDown"
                    dismissible
                    fade
                    variant="success"
                    @dismiss-count-down="countDownChanged"
                    class="flash-message">
										<i class="fas fa-check-circle"></i>
                    Event Saved
                </b-alert>
                <div class="card shadow-sm p-3 mb-5 bg-white rounded">
                    <div class="card-body container-fluid">
                        <h5 class="card-title">Calendar</h5>
                        <hr>
                        <div class="row">
                            <div class="col-md-4">
                                <form-component :callAlert="showAlert"/>
                            </div>
                            <div class="col-md-8">
                                <calendar-component/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FormComponent from './FormComponent'
    import CalendarComponent from './CalendarComponent'
    import { BAlert } from 'bootstrap-vue'

    export default {
        components: { FormComponent, CalendarComponent, BAlert },
        data() {
            return {
                dismissSecs: 15,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        },
        methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }
    }
    }
</script>
