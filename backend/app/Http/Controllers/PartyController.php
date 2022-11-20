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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Party::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Party::find($id);
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
        if (Party::where('id', $id)->exists()) {
            $article = Party::find($id);
            $article->title = $request->title;
            $article->body = $request->body;
            $article->author = $request->author;

            $article->save();
            return response()->json(['message' => 'record updated succefully :D'], 200);
        } else {
            return response()->json(['message' => 'Party not found :('], 400);
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
        if (Party::where('id', $id)->exists()) {
            $article = Party::find($id);
            $article->delete();
            return response()->json(['message' => 'record deleted :D'], 202);
        } else {
            return response()->json(['message' => 'Party not found :('], 404);
        }
    }
}
