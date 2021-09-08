<?php

namespace App\Http\Controllers;

use App\Observer;
use Illuminate\Http\Request;

class ObserverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $observer = new Observer();
        $observer->creare($request->all());
        return response()->json('Observación creada');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Observer  $observer
     * @return \Illuminate\Http\Response
     */
    public function show(Observer $observer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Observer  $observer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Observer::find($id)->update($request->all());
        return response()->json('Observación actualizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Observer  $observer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Observer $observer)
    {
        $observer = Observer::find($id)->get();
        $observer->deleted = 1;

        return response()->json('Observación desactivada');
    }
}
