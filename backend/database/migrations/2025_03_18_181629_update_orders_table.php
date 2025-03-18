<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('cake_type')->after('customer_name'); // Tipo di torta
            $table->integer('servings')->after('shape'); // Numero di porzioni
            $table->string('flavor')->after('theme'); // Gusto della torta
            $table->string('image_url')->nullable()->after('decorations'); // Link immagine personalizzata
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn(['cake_type', 'servings', 'flavor', 'image_url']);
        });
    }
};
