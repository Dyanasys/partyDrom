<?php

use App\Http\Controllers\ArticleController;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
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
    return new ArticleResource(Article::findOrFail($id));
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
