<?php

use Illuminate\Support\Facades\Route;


Route::get('/{uuid}', function ($uuid) {
    if(!$uuid) {
        return view('errors.404');
    }
    return view('welcome');
});

Route::get('/admin/all-invites', function () {
    return view('all-invites');
});
