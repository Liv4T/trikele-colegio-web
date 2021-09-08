<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateObserversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('observers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('id_instructor');
            $table->integer('id_student');            
            $table->string('id_father');
            $table->string('id_mother');
            $table->string('father_profession');
            $table->string('mother_profession');
            $table->string('age_student');
            $table->string('observation');
            $table->boolean('deleted');
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
        Schema::dropIfExists('observers');
    }
}
