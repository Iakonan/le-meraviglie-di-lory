<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuovo Ordine Ricevuto</title>
</head>
<body>
    <h2>Nuovo Ordine #{{ $order->id }}</h2>
    <p>Ciao,</p>
    <p>Hai ricevuto un nuovo ordine da <strong>{{ $order->customer_name }}</strong>.</p>
    
    <h3>Dettagli Ordine:</h3>
    <ul>
        <li><strong>Forma:</strong> {{ $order->shape }}</li>
        <li><strong>Tema:</strong> {{ $order->theme }}</li>
        <li><strong>Colore:</strong> {{ $order->color }}</li>
        <li><strong>Decorazioni:</strong> {{ $order->decorations }}</li>
        <li><strong>Data Evento:</strong> {{ $order->event_date }}</li>
        <li><strong>Prezzo:</strong> €{{ number_format($order->price, 2, ',', '.') }}</li>
    </ul>

    <p>In allegato trovi il PDF con tutti i dettagli dell'ordine.</p>
</body>
</html>
