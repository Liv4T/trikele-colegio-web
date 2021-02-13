<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Lesson;
use App\Services\CalendarService;

class CalendarController extends Controller
{
    public function index(CalendarService $calendarService)
    {
        $weekDays     = Lesson::WEEK_DAYS;
        $calendarData = $calendarService->generateCalendarData($weekDays);
        // return 1;

        return view('horarios', compact('weekDays', 'calendarData'));
    }
}
