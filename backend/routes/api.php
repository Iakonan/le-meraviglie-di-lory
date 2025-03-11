<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ShowcaseController;
use Illuminate\Support\Facades\Route;

Route::get('/orders', [OrderController::class, 'index']); // Lista tutti gli ordini
Route::post('/orders', [OrderController::class, 'store']); // Creare un nuovo ordine
Route::get('/orders/{id}', [OrderController::class, 'show']); // Visualizzare un ordine specifico
Route::put('/orders/{id}', [OrderController::class, 'update']); // Aggiornare un ordine
Route::delete('/orders/{id}', [OrderController::class, 'destroy']); // Eliminare un ordine
Route::get('/orders/{id}/pdf', [OrderController::class, 'generatePdf']); // Genera pdf con ordine
Route::get('/orders/{id}', [OrderController::class, 'getOrder']); // Filtra ordini
Route::put('/orders/{id}/status', [OrderController::class, 'updateStatus']); // Aggiorna lo stato ordine
Route::delete('/orders/{id}', [OrderController::class, 'deleteOrder']); // Elimina ordine

Route::get('/showcase', [ShowcaseController::class, 'index']); // Recupera la vetrina
Route::post('/showcase', [ShowcaseController::class, 'store']); // Aggiunge una nuova immagine
Route::delete('/showcase/{id}', [ShowcaseController::class, 'destroy']); // Elimina un'immagine