<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Login per l'admin
     */
    public function login(Request $request)
    {
        // Validazione dei dati in input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Tentativo di autenticazione
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'is_admin' => true])) {
            $user = Auth::user();
            $token = $user->createToken('admin_token')->plainTextToken; // Creazione del token

            return response()->json([
                'message' => 'Login effettuato con successo!',
                'token' => $token,
                'user' => $user
            ], 200);
        }

        return response()->json(['error' => 'Credenziali non valide o accesso non autorizzato'], 401);
    }

    /**
     * Logout dell'admin
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete(); // Revoca tutti i token attivi

        return response()->json(['message' => 'Logout effettuato con successo!'], 200);
    }
}
