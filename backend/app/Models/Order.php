<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_name',
        'customer_email',
        'cake_type',
        'shape',
        'servings',
        'flavor',
        'theme',
        'color',
        'decorations',
        'image_url',
        'event_date',
        'price',
        'status',
    ];

    protected $casts = [
        'event_date' => 'date', // Assicura che venga gestito come un oggetto data
        'price' => 'decimal:2', // Assicura che venga gestito con due decimali
    ];
}
