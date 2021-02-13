<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClassTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description');
            $table->string('id_user');
            $table->string('id_category');
            $table->string('id_subcategory');
            $table->string('subject');
            $table->date('fromW');
            $table->date('toW');
            $table->string('fromH');
            $table->string('toH');
            $table->string('objetive');
            $table->string('quiz');
            $table->string('indicator');
            $table->string('percent');
            $table->boolean('local');
            $table->string('regional');
            $table->boolean('world');
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
        Schema::dropIfExists('classes
        ');
    }
}
