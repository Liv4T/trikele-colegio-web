<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAssignNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('assign_notes', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('id_bimestre');
            $table->bigInteger('id_student');
            $table->bigInteger('id_teacher');
            $table->bigInteger('id_area');
            $table->string('class');
            $table->string('student_name');
            $table->string('note');
            $table->string('asignNote');
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
        Schema::dropIfExists('assign_notes');
    }
}
