<?php

namespace App\Http\Controllers;

use App\Indicator;
use Illuminate\Http\Request;

class IndicatorController extends Controller
{
     /**
     *
     */
    public function getByAchievement($id_achievement)
    {
        return Indicator::where('id_achievement',$id_achievement)->get();
    }
}
