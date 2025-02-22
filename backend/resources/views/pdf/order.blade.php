<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ordine #{{ $order->id }}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        h1 { color: #333; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Dettagli Ordine #{{ $order->id }}</h1>
    <p><strong>Cliente:</strong> {{ $order->customer_name }}</p>
    <p><strong>Email:</strong> {{ $order->customer_email ?? 'N/A' }}</p>
    <p><strong>Data Evento:</strong> {{ $order->event_date }}</p>

    <h2>Dettagli Torta</h2>
    <table>
        <tr>
            <th>Forma</th>
            <th>Tema</th>
            <th>Colore</th>
            <th>Decorazioni</th>
            <th>Prezzo</th>
            <th>Stato</th>
        </tr>
        <tr>
            <td>{{ $order->shape }}</td>
            <td>{{ $order->theme }}</td>
            <td>{{ $order->color }}</td>
            <td>{{ $order->decorations }}</td>
            <td>€{{ number_format($order->price, 2, ',', '.') }}</td>
            <td>{{ ucfirst($order->status) }}</td>
        </tr>
    </table>

    <p><em>Grazie per aver ordinato da noi!</em></p>
</body>
</html>
