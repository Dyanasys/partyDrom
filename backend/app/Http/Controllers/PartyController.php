<?php

namespace App\Http\Controllers;

use App\Models\Party;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function listUsersParties($id_user, $loc_filter = '0', $date_filter = '0')
    {
        $currentdate = date('Y-m-d');
        if ($loc_filter!='0'&&$date_filter!='0') {
            $data = Party::select(
                'parties.*',
                'locations.name as location_name',
                'profiles.public_name',
                'requests.id as id_request',
                'requests.canceled as request_canceled',
                'requests.accepted as request_accepted',
                'requests.pending as request_pending'
            )->join(
                'locations',
                'parties.id_location',
                '=',
                'locations.id'
            )->join('profiles', 'parties.id_user', '=', 'profiles.id_user')->leftJoin(
                'requests',
                function ($join) use ($id_user) {
                    $join->on("parties.id", "requests.id_party");
                    $join->where("requests.id_user", $id_user);
                }
            )->where("parties.id_user", "<>", $id_user)->where("parties.id_location", "=", $loc_filter)->where("parties.date", "=", $date_filter)->orderby("date", "asc")->orderby("time", "asc")->get();
        }elseif ($loc_filter!='0'){
            $data = Party::select(
                'parties.*',
                'locations.name as location_name',
                'profiles.public_name',
                'requests.id as id_request',
                'requests.canceled as request_canceled',
                'requests.accepted as request_accepted',
                'requests.pending as request_pending'
            )->join(
                'locations',
                'parties.id_location',
                '=',
                'locations.id'
            )->join('profiles', 'parties.id_user', '=', 'profiles.id_user')->leftJoin(
                'requests',
                function ($join) use ($id_user) {
                    $join->on("parties.id", "requests.id_party");
                    $join->where("requests.id_user", $id_user);
                }
            )->where("parties.id_user", "<>", $id_user)->where("parties.id_location", "=", $loc_filter)->where("parties.date",">=",$currentdate)->orderby("date", "asc")->orderby("time", "asc")->get();
        }elseif($date_filter!='0'){
            $data = Party::select(
                'parties.*',
                'locations.name as location_name',
                'profiles.public_name',
                'requests.id as id_request',
                'requests.canceled as request_canceled',
                'requests.accepted as request_accepted',
                'requests.pending as request_pending'
            )->join(
                'locations',
                'parties.id_location',
                '=',
                'locations.id'
            )->join('profiles', 'parties.id_user', '=', 'profiles.id_user')->leftJoin(
                'requests',
                function ($join) use ($id_user) {
                    $join->on("parties.id", "requests.id_party");
                    $join->where("requests.id_user", $id_user);
                }
            )->where("parties.id_user", "<>", $id_user)->where("parties.date", "=", $date_filter)->orderby("date", "asc")->orderby("time", "asc")->get();
        } else {
            $data = Party::select(
                'parties.*',
                'locations.name as location_name',
                'profiles.public_name',
                'requests.id as id_request',
                'requests.canceled as request_canceled',
                'requests.accepted as request_accepted',
                'requests.pending as request_pending'
            )->join(
                'locations',
                'parties.id_location',
                '=',
                'locations.id'
            )->join('profiles', 'parties.id_user', '=', 'profiles.id_user')->leftJoin(
                'requests',
                function ($join) use ($id_user) {
                    $join->on("parties.id", "requests.id_party");
                    $join->where("requests.id_user", $id_user);
                }
            )->where("parties.id_user", "<>", $id_user)->where("parties.date",">=",$currentdate)->orderby("date", "asc")->orderby("time", "asc")->get();
        }

        return $data;
    }

    public function listYourParties($id_user)
    {
        $query = DB::select(
            "select p.*,
            l.name as location_name,
            r.id_request,
            r.pending_request
            FROM parties p
            join locations l on p.id_location = l.id
            LEFT JOIN (SELECT rr.id AS id_request, sum(rr.pending) AS pending_request, rr.id_user AS id_user_request, rr.id_party AS id_party_request from requests rr right JOIN parties pp ON rr.id_party = pp.id WHERE rr.id_user <> $id_user GROUP BY rr.id_user, rr.id, rr.id_party ) r
            ON r.id_party_request = p.id
            where p.id_user = $id_user
            order by p.created_at desc;"
        );

        return $query;
    }
    public function listYourParty($id_user,$id_party)
    {
        $query = DB::select(
            "select p.*,
            l.name as location_name,
            r.id_request,
            r.pending_request
            FROM parties p
            join locations l on p.id_location = l.id
            LEFT JOIN (SELECT rr.id AS id_request, sum(rr.pending) AS pending_request, rr.id_user AS id_user_request, rr.id_party AS id_party_request from requests rr right JOIN parties pp ON rr.id_party = pp.id WHERE rr.id_user <> $id_user GROUP BY rr.id_user, rr.id, rr.id_party ) r
            ON r.id_party_request = p.id
            where p.id_user = $id_user
            and p.id = $id_party
            order by p.created_at desc;"
        );

        return $query;
    }

    public function showParty($id_party)
    {
        $data = Party::select(
            'parties.*',
            'locations.name as location_name',
            'profiles.public_name',
            'requests.id as id_request',
            'requests.canceled as request_canceled',
            'requests.accepted as request_accepted',
            'requests.pending as request_pending'
        )->join(
            'locations',
            'parties.id_location',
            '=',
            'locations.id'
        )->join('profiles', 'parties.id_user', '=', 'profiles.id_user')->leftJoin('requests', function ($join) {
            $join->on("parties.id", "requests.id_party");
        })->where("parties.id", "=", $id_party)->first();
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
