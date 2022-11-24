<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\PartyController;
use App\Http\Controllers\UserController;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\partyResource;
use App\Http\Resources\userResource;
use App\Models\Article;
use App\Models\Party;
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
    return new PartyResource(Party::query()->findOrFail($id));
});
Route::get('/profiles', function () {
    return PartyResource::collection(Party::all());
});
Route::put('/profile/{id}', [PartyController::class, 'update']);
Route::delete('/profile/{id}', [PartyController::class, 'destroy']);
Route::post('/profiles', [PartyController::class, 'store']);

//REQUESTS
Route::get('/request/{id}', function ($id) {
    return new PartyResource(Party::query()->findOrFail($id));
});
Route::get('/requests', function () {
    return PartyResource::collection(Party::all());
});
Route::put('/request/{id}', [PartyController::class, 'update']);
Route::delete('/request/{id}', [PartyController::class, 'destroy']);
Route::post('/requests', [PartyController::class, 'store']);

//LOCATIONS
Route::get('/location/{id}', function ($id) {
    return new PartyResource(Party::query()->findOrFail($id));
});
Route::get('/locations', function () {
    return PartyResource::collection(Party::all());
});
Route::put('/location/{id}', [PartyController::class, 'update']);
Route::delete('/location/{id}', [PartyController::class, 'destroy']);
Route::post('/locations', [PartyController::class, 'store']);
