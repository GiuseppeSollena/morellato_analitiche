<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{any}', function(){
    return view('authorized');
})->where('any','.*');

// Route::get('/', function () {
//     return view('authorized');
// });

Route::get('statistics',function(){
    return view('statistics-authorized');
});

// Route::get('Customer',[CustomerController::class,'index']);
