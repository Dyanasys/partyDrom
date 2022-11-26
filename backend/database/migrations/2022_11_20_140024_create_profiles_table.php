<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->unsignedBigInteger('id_user');
            $table->string('public_name')->nullable();
            $table->string('description')->nullable();
            $table->string('photo')->nullable();
            $table->string('phone')->nullable();
            $table->date('birth_date')->nullable();
            $table->unsignedTinyInteger('alcohol_pref')->nullable();
            $table->unsignedTinyInteger('smoke_pref')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
