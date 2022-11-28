<?php

namespace App\Http\Controllers;

use App\Models\Request;
use Illuminate\Http\Response;

//use Illuminate\Http\Request;

class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Request::all();
    }


    public function listUserRequests($id_user)
    {
        $data = Request::select('requests.*','parties.id as id_party', 'parties.title', 'parties.meeting_details', 'parties.phone_contact','parties.address')
            ->join('parties','requests.id_party','=','parties.id')
            ->where("requests.id_user", "=", $id_user)->get();
        return $data;
    }

    public function listPartyRequests($id_party)
    {
        $data = Request::select('requests.*','parties.id as id_party', 'parties.title', 'parties.meeting_details', 'parties.phone_contact','parties.address', 'profiles.public_name', 'profiles.id as id_profile')
            ->join('parties','requests.id_party','=','parties.id')
            ->join('profiles','requests.id_user','=','profiles.id_user')
            ->where("requests.id_party", "=", $id_party)->get();
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return Response
     */
    public function store(\Illuminate\Http\Request $request)
    {
        return Request::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return Response
     */
    public function show($id)
    {
        return Request::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return Response
     */
    public function update(\Illuminate\Http\Request $request, $id)
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

    public function cancel($id): \Illuminate\Http\JsonResponse
    {
        if (Request::where('id', $id)->exists()) {
            $myrequest = Request::find($id);
            $myrequest->canceled = 1;
            $myrequest->save();
            return response()->json(['message' => 'Request canceled succefully :D'], 200);
        } else {
            return response()->json(['message' => 'Request not found :('], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
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
