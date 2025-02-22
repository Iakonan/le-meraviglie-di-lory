<?php

use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;

Route::get('/orders', [OrderController::class, 'index']); // Lista tutti gli ordini
Route::post('/orders', [OrderController::class, 'store']); // Creare un nuovo ordine
Route::get('/orders/{id}', [OrderController::class, 'show']); // Visualizzare un ordine specifico
Route::put('/orders/{id}', [OrderController::class, 'update']); // Aggiornare un ordine
Route::delete('/orders/{id}', [OrderController::class, 'destroy']); // Eliminare un ordine

