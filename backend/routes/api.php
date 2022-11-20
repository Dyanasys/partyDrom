<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\PartyController;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\partyResource;
use App\Models\Article;
use App\Models\Party;
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
