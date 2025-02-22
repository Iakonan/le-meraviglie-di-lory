<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    // LISTA ORDINI
    public function index()
    {
        return response()->json(Order::all());
    }

    // CREARE UN NUOVO ORDINE
    public function store(Request $request)
    {
        $request->validate([
            'customer_name' => 'required|string',
            'shape' => 'required|string',
            'theme' => 'required|string',
            'color' => 'required|string',
            'decorations' => 'required|string',
            'event_date' => 'required|date',
            'price' => 'required|numeric',
        ]);

        $order = Order::create($request->all());

        return response()->json($order, 201);
    }

    // VISUALIZZARE UN ORDINE SPECIFICO
    public function show($id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json(['message' => 'Ordine non trovato'], 404);
        }
        return response()->json($order);
    }

    // AGGIORNARE UN ORDINE
    public function update(Request $request, $id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json(['message' => 'Ordine non trovato'], 404);
        }

        $order->update($request->all());
        return response()->json($order);
    }

    // ELIMINARE UN ORDINE
    public function destroy($id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json(['message' => 'Ordine non trovato'], 404);
        }

        $order->delete();
        return response()->json(['message' => 'Ordine eliminato con successo']);
    }
}
