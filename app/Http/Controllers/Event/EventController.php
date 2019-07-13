<?php

namespace App\Http\Controllers\Event;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Event;  

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $events = Event::all();
      foreach($events as $event) {
        $event['weekdays'] = $event->weekdays;
      }
      return $events;
    }

      /**
     * Create a new event instance.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
      // return $request->all();
      $event = Event::create([
        'name' => request('eventName'),
        'start_date' => date("Y-m-d", strtotime(request('startDate'))),
        'end_date' => date("Y-m-d", strtotime(request('endDate')))
      ]); 
      foreach($request->weekdaysIndex as $day) {
        $event->weekdays()->create(['weekday' => $day]);
      }
    }

  }