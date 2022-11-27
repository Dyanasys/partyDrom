<?php

namespace App\Http\Controllers;

use App\Models\Party;
use Illuminate\Http\Request;

class PartyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Party::all();
    }

    public function listUsersParties($id_user)
    {
        $data = Party::select('parties.*', 'locations.name as location_name', 'profiles.public_name')->join(
            'locations',
            'parties.id_location',
            '=',
            'locations.id'
        )->join('profiles', 'parties.id_user', '=', 'profiles.id_user')->where("parties.id_user", "<>", $id_user)->get();
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
        return Party::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Party::find($id);
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
        if (Party::where('id', $id)->exists()) {
            $party = Party::find($id);
            $party->id_user = $request->id_user;
            $party->vacancies = $request->vacancies;
            $party->title = $request->title;
            $party->description = $request->description;
            $party->photo = $request->photo;
            $party->date = $request->date;
            $party->time = $request->time;
            $party->alcohol = $request->alcohol;
            $party->smoke = $request->smoke;
            $party->id_location = $request->id_location;
            $party->address = $request->address;
            $party->meeting_details = $request->meeting_details;
            $party->phone_contact = $request->phone_contact;
            $party->active = $request->active;

            $party->save();
            return response()->json(['message' => 'record updated succefully :D'], 200);
        } else {
            return response()->json(['message' => 'Party not found :('], 400);
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
        if (Party::where('id', $id)->exists()) {
            $article = Party::find($id);
            $article->delete();
            return response()->json(['message' => 'record deleted :D'], 202);
        } else {
            return response()->json(['message' => 'Party not found :('], 404);
        }
    }

//    public function getUsersParties($id_user){
//        return  Party::where("id", "<>", $id_user)->get();
//    }
}
