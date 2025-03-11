<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Showcase;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class ShowcaseController extends Controller
{
    // 🔹 Recupera tutte le immagini della vetrina
    public function index()
    {
        return response()->json(Showcase::all(), 200);
    }

    // 🔹 Salva una nuova immagine nella vetrina
    public function store(Request $request)
    {
        // ✅ Debug: stampa i dati ricevuti
        Log::info('Dati ricevuti:', $request->all());

        // ✅ Validazione dei campi
        $validated = $request->validate([
            'image' => 'required|file|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'description' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
        ], [
            'image.required' => 'L\'immagine è obbligatoria.',
            'image.mimes' => 'Formato non supportato. Carica solo file JPG, PNG, GIF o SVG.',
            'image.max' => 'L\'immagine non può superare i 2MB.',
            'description.required' => 'La descrizione è obbligatoria.',
            'price.required' => 'Il prezzo è obbligatorio.',
            'price.numeric' => 'Il prezzo deve essere un numero.',
            'price.min' => 'Il prezzo deve essere almeno 0.',
        ]);

        // ✅ Controlliamo se il file è presente
        if ($request->hasFile('image')) {
            // 🔹 Salva l'immagine nello storage pubblico
            $path = $request->file('image')->store('showcase', 'public');
            $imageUrl = asset('storage/' . $path);

            // 🔹 Salva nel database
            $showcase = Showcase::create([
                'image' => $imageUrl,
                'description' => $validated['description'],
                'price' => $validated['price'],
            ]);

            return response()->json($showcase, 201);
        }

        // ❌ Errore se il file non è stato ricevuto
        return response()->json(['error' => 'Errore nel caricamento dell\'immagine.'], 400);
    }

    // 🔹 Elimina un'immagine dalla vetrina
    public function destroy($id)
    {
        $showcase = Showcase::find($id);

        if (!$showcase) {
            return response()->json(['error' => 'Immagine non trovata'], 404);
        }

        // ✅ Elimina il file dallo storage
        $imagePath = str_replace(asset('storage/'), '', $showcase->image);
        Storage::disk('public')->delete($imagePath);

        // ✅ Elimina il record dal database
        $showcase->delete();

        return response()->json(['message' => 'Immagine eliminata con successo.'], 200);
    }
}
