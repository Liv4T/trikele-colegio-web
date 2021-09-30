<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportsParentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports_parents', function (Blueprint $table) {
            $table->increments('id');
            $table->longText('dataStudent');
            $table->bigInteger('id_area');
            $table->bigInteger('id_classroom');
            $table->bigInteger('id_parent');
            $table->bigInteger('id_teacher');
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
        Schema::dropIfExists('reports_parents');
    }
}
