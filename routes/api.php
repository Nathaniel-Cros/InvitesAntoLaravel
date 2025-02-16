<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InvitesInf;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/info-invites', [InvitesInf::class, 'GetAll']);
Route::get('/info-invite/{uuid}', [InvitesInf::class, 'GetByUUID']);
Route::post('/info-invite', [InvitesInf::class, 'Create']);
Route::patch('/info-invite/{uuid}', [InvitesInf::class, 'Update']);
