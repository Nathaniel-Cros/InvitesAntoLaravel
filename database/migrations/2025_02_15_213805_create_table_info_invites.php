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
        Schema::create('inf_invites', function (Blueprint $table) {
            $table->string('id', 90)->primary();
            $table->string('family', 255);
            $table->integer('adults');
            $table->integer('children');
            $table->integer('confirm_adults');
            $table->integer('confirm_children');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inf_invites');
    }
};
