<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Profile::all();
    }

    public function profileCreated($id_user)
    {
        return Profile::select(
            '*'
        )->where("id_user", "=", $id_user)->first();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Profile::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Profile::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (Profile::where('id', $id)->exists()) {
            $profile = Profile::find($id);
            $profile->id_user = $request->id_user;
            $profile->public_name = $request->public_name;
            $profile->description = $request->description;
            $profile->photo = $request->photo;
            $profile->phone = $request->phone;
            $profile->birth_date = $request->birth_date;
            $profile->alcohol_pref = $request->alcohol_pref;
            $profile->smoke_pref = $request->smoke_pref;

            $profile->save();
            return response()->json(['message' => 'Profile updated succefully :D'], 200);
        } else {
            return response()->json(['message' => 'Profile not found :('], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Profile::where('id', $id)->exists()) {
            $profile = Profile::find($id);
            $profile->delete();
            return response()->json(['message' => 'profile deleted :D'], 202);
        } else {
            return response()->json(['message' => 'profile not found :('], 404);
        }
    }
}
