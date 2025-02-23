<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderMail;



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

    // GENERARE IL PDF DELL'ORDINE
    public function generatePdf($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Ordine non trovato'], 404);
        }

        // Puliamo il nome del cliente per evitare caratteri non validi nei file
        $cleanCustomerName = preg_replace('/[^A-Za-z0-9_]/', '_', $order->customer_name);

        // Creiamo il nome del file con ID e nome del cliente
        $fileName = "ordine_" . $order->id . "_" . $cleanCustomerName . ".pdf";

        // Genera il PDF dalla vista Blade
        $pdf = Pdf::loadView('pdf.order', compact('order'));

        // Salviamo il PDF nello storage
        Storage::disk('public')->put("pdfs/$fileName", $pdf->output());

        // Percorso completo del PDF
        $pdfPath = storage_path("app/public/pdfs/$fileName");

        // Invia l'email con il PDF allegato
        Mail::to("destinatario@example.com")->send(new OrderMail($order, $pdfPath));

        return response()->json([
            'message' => 'PDF generato e inviato con successo!',
            'pdf_url' => asset("storage/pdfs/$fileName")
        ]);
    }

    public function listOrders(Request $request)
    {
        $query = Order::query();

        // Filtro per nome cliente (se presente)
        if ($request->has('customer_name')) {
            $query->where('customer_name', 'LIKE', '%' . $request->customer_name . '%');
        }

        // Filtro per stato ordine (se presente)
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        // Ordini paginati (10 per pagina)
        $orders = $query->orderBy('created_at', 'desc')->paginate(10);

        return response()->json($orders);
    }

    public function getOrder($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Ordine non trovato'], 404);
        }

        return response()->json($order);
    }

    public function updateStatus(Request $request, $id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Ordine non trovato'], 404);
        }

        // Validazione del nuovo stato
        $request->validate([
            'status' => 'required|in:pending,confirmed,delivered'
        ]);

        $order->status = $request->status;
        $order->save();

        return response()->json([
            'message' => 'Stato ordine aggiornato con successo!',
            'order' => $order
        ]);
    }

    public function deleteOrder($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json(['message' => 'Ordine non trovato'], 404);
        }

        $order->delete();

        return response()->json(['message' => 'Ordine eliminato con successo!']);
    }




}
