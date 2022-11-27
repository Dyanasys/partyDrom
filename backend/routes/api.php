<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\PartyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\UserController;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\locationResource;
use App\Http\Resources\partyResource;
use App\Http\Resources\profileResource;
use App\Http\Resources\requestResource;
use App\Http\Resources\userResource;
use App\Models\Article;
use App\Models\Location;
use App\Models\Party;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//ARTICLES
Route::get('/article/{id}', function ($id) {
    return new ArticleResource(Article::query()->findOrFail($id));
});
Route::get('/articles', function () {
    return ArticleResource::collection(Article::all());
});
Route::put('/article/{id}', [ArticleController::class, 'update']);
Route::delete('/article/{id}', [ArticleController::class, 'destroy']);
Route::post('/articles', [ArticleController::class, 'store']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//PARTIES
Route::get('/party/{id}', function ($id) {
    return new PartyResource(Party::query()->findOrFail($id));
});
Route::get('/parties', function () {
    return PartyResource::collection(Party::all());
});
//Route::get('/users-parties/{id_user}', function ($id_user) {
//    return PartyResource::collection(Party::where("id_user", "<>", $id_user)->get());
//});
Route::get('/users-parties/{id_user}',[PartyController::class, 'listUsersParties']);
Route::get('/your-parties/{id_user}', function ($id_user) {
    return PartyResource::collection(Party::where("id_user", "=", $id_user)->get());
});
Route::put('/party/{id}', [PartyController::class, 'update']);
Route::delete('/party/{id}', [PartyController::class, 'destroy']);
Route::post('/parties', [PartyController::class, 'store']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//USERS
Route::get('/users', function () {
    return UserResource::collection(User::all());
});
Route::get('/admin-users/{id_user}', function ($id_user) {
    return UserResource::collection(User::where("id", "<>", $id_user)->get());
});
Route::get('/user/{id}', function ($id) {
    return new UserResource(User::query()->findOrFail($id));
});
Route::delete('/user/{id}', [UserController::class, 'destroy']);
Route::post('/user', [UserController::class, 'store']);
Route::put('/user/{id}', [UserController::class, 'update']);
//LOGIN
Route::post('/login', [UserController::class, 'authenticate']);
Route::post('/logout', [UserController::class, 'logout']);
//PROFILES
Route::get('/profile/{id}', function ($id) {
    return new ProfileResource(Profile::findOrFail($id));
});
Route::get('/profiles/{id_user}', function ($id_user) {
    return ProfileResource::collection(Profile::where("id_user", "<>", $id_user)->get());
});
Route::put('/profile/{id}', [ProfileController::class, 'update']);
Route::delete('/profile/{id}', [ProfileController::class, 'destroy']);
Route::post('/profiles', [ProfileController::class, 'store']);

//REQUESTS
Route::get('/request/{id}', function ($id) {
    return new RequestResource(App\Models\Request::query()->findOrFail($id));
});
Route::get('/requests', function () {
    return RequestResource::collection(App\Models\Request::all());
});
Route::put('/request/{id}', [RequestController::class, 'update']);
Route::delete('/request/{id}', [RequestController::class, 'destroy']);
Route::post('/requests', [RequestController::class, 'store']);

//LOCATIONS
Route::get('/location/{id}', function ($id) {
    return new LocationResource(Location::query()->findOrFail($id));
});
Route::get('/locations', function () {
    return LocationResource::collection(Location::all());
});
Route::put('/location/{id}', [LocationController::class, 'update']);
Route::delete('/location/{id}', [LocationController::class, 'destroy']);
Route::post('/locations', [LocationController::class, 'store']);
