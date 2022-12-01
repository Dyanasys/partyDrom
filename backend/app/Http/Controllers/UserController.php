<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $email = $request['email'];
        $password = $request['password'];
        if (User::where("email", "like", $email)->where('password', 'like', $password)->exists()) {
            $user = User::where("email", "like", $email)->where('password', 'like', $password)->get();
            return response()->json($user);
        } else {
            if (User::where("name", "like", $email)->where('password', 'like', $password)->exists()) {
                $user = User::where("name", "like", $email)->where('password', 'like', $password)->get();
                return response()->json($user);
            } else {
                return response()->json('0');
            }
        }
    }
//    public function _authenticate(Request $request): RedirectResponse
//    {
//        $credentials = $request->validate([
//            'email' => ['required', 'email'],
//            'password' => ['required'],
//        ]);
//
//        if (Auth::attempt($credentials)) {
//            $request->session()->regenerate();
//
//            return redirect()->intended('dashboard');
//        }
//
//        return back()->withErrors([
//            'email' => 'The provided credentials do not match our records.',
//        ])->onlyInput('email');
//    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::create($request->all());
//        $id = $this->create($request)->id;
        $id = $user->id;
        $profile = new Profile;
        $profile->id_user = $id;
        $profile->public_name = $user->name;
        $profile->save();
        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        if (User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = $request->password;

            $user->save();
            return response()->json(['message' => 'user updated succefully :D'], 200);
        } else {
            return response()->json(['message' => 'user not found :('], 400);
        }
    }

    public function makeAdmin($id)
    {
        if (User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->is_admin = 1;
            $user->save();
            return response()->json(['message' => 'user updated succefully :D'], 200);
        } else {
            return response()->json(['message' => 'user not found :('], 400);
        }
    }

    public function makeNormal($id)
    {
        if (User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->is_admin = 0;
            $user->save();
            return response()->json(['message' => 'user updated succefully :D'], 200);
        } else {
            return response()->json(['message' => 'user not found :('], 400);
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
        if (User::where('id', $id)->exists()) {
            $article = User::find($id);
            $article->delete();
            return response()->json(['message' => 'user deleted :D'], 202);
        } else {
            return response()->json(['message' => 'user not found :('], 404);
        }
    }
}
