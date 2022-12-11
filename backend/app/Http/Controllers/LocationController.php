<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Location::all();
    }

    public function listUsersPartiesLoc($id_user)
    {
            $data = Location::select(
                'locations.*'
            )->join(
                'parties',
                'parties.id_location',
                '=',
                'locations.id'
            )->where("parties.id_user", "<>", $id_user)->orderby("locations.name", "asc")->distinct()->get();

        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Location::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Location::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (Location::where('id', $id)->exists()) {
            $location = Location::find($id);
            $location->name = $request->name;
            $location->save();
            return response()->json(['message' => 'Location updated succefully :D'], 200);
        } else {
            return response()->json(['message' => 'Location not found :('], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Location::where('id', $id)->exists()) {
            $location = Location::find($id);
            $location->delete();
            return response()->json(['message' => 'location deleted :D'], 202);
        } else {
            return response()->json(['message' => 'location not found :('], 404);
        }
    }
}
