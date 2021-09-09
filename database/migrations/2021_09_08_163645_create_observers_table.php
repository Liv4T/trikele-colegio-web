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
            $table->increments('id');
            $table->string('name_student');
            $table->integer('id_student')->unsigned();
            $table->integer('age');
            $table->date('date_birth');
            $table->string('size');
            $table->string('weight');
            $table->bigInteger('identification');
            $table->string('father_name')->nullable();
            $table->string('office_father')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('office_mother')->nullable();
            $table->string('user_creator');
            $table->string('address');
            $table->string('phone');
            $table->boolean('repitent');
            $table->text('observation');

            $table->foreign('id_student')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');

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
