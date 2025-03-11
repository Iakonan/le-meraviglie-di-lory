<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('showcases', function (Blueprint $table) {
            $table->id();
            $table->string('image'); // Percorso dell'immagine
            $table->string('description'); // Descrizione della torta
            $table->decimal('price', 8, 2); // Prezzo della torta
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('showcases');
    }
};
