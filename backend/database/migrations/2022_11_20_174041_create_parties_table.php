<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parties', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->unsignedBigInteger('id_user');
            $table->unsignedInteger('vacancies');
            $table->string('title');
            $table->string('description');
            $table->string('photo')->nullable();
            $table->date('date');
            $table->time('time');
            $table->unsignedInteger('alcohol');
            $table->unsignedInteger('smoke');
            $table->unsignedBigInteger('id_location');
            $table->string('address');
            $table->string('meeting_details');
            $table->string('phone_contact');
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
        Schema::dropIfExists('parties');
    }
}
