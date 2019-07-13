<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    public $fillable = ['name', 'start_date', 'end_date'];

    public function weekdays()
    {
        return $this->hasMany('App\EventWeekday');
    }
}
