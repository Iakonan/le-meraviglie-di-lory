<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderMail extends Mailable
{
    use Queueable, SerializesModels;

    public $order;
    public $pdfPath;

    /**
     * Create a new message instance.
     */
    public function __construct($order, $pdfPath)
    {
        $this->order = $order;
        $this->pdfPath = $pdfPath;
    }

    /**
     * Build the message.
     */
    public function build()
    {
        \Log::info("Tentativo di allegare il PDF: " . $this->pdfPath);

        if (!file_exists($this->pdfPath)) {
            \Log::error("Il file PDF non esiste: " . $this->pdfPath);
        } else {
            \Log::info("Il file PDF esiste e verrà allegato.");
        }

        // Usa lo stesso nome del file salvato nello storage
        $fileName = basename($this->pdfPath);

        return $this->subject('Nuovo Ordine #' . $this->order->id)
                    ->view('emails.order')
                    ->attach(realpath($this->pdfPath), [
                        'as' => $fileName,  // <-- Ora l'allegato avrà lo stesso nome
                        'mime' => 'application/pdf',
                    ]);
    }



}
