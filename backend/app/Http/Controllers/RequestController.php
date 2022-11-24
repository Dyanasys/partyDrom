<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Request::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Request::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Request::find($id);
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
        if (Request::where('id', $id)->exists()) {
            $myrequest = Request::find($id);
            $myrequest->id_user = $request->id_user;
            $myrequest->id_party = $request->id_party;

            $myrequest->save();
            return response()->json(['message' => 'Request updated succefully :D'], 200);
        } else {
            return response()->json(['message' => 'Request not found :('], 400);
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
        if (Request::where('id', $id)->exists()) {
            $myrequest = Request::find($id);
            $myrequest->delete();
            return response()->json(['message' => 'request deleted :D'], 202);
        } else {
            return response()->json(['message' => 'request not found :('], 404);
        }
    }
}
