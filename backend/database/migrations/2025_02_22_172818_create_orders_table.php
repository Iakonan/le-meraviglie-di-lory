<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('orders', function (Blueprint $table) {
        $table->id(); // ID automatico
        $table->string('customer_name'); // Nome cliente
        $table->string('customer_email')->nullable(); // Email (opzionale)
        $table->string('shape'); // Forma della torta (quadrata, tonda...)
        $table->string('theme'); // Tema della torta
        $table->string('color'); // Colore principale
        $table->string('decorations'); // Decorazioni (pupazzo 3D, immagine su cialda...)
        $table->date('event_date'); // Data dell'evento
        $table->decimal('price', 8, 2); // Prezzo
        $table->enum('status', ['pending', 'confirmed', 'delivered'])->default('pending'); // Stato ordine
        $table->timestamps(); // created_at e updated_at
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
