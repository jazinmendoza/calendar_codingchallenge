export default {
  events: state => state.events.events,
  lastIn: state => state.events.events.length-1
}