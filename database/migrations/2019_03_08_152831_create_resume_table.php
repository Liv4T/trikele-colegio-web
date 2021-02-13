<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResumeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resumes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_user');
            $table->string('description');
            $table->string('language');
            $table->string('institutionB');
            $table->string('institutionT');
            $table->string('institutionP');
            $table->string('institutionE');
            $table->string('institutionM');
            $table->string('institutionD');
            $table->string('institutionO');
            $table->string('dateB');
            $table->string('dateT');
            $table->string('dateP');
            $table->string('dateE');
            $table->string('dateM');
            $table->string('dateD');
            $table->string('dateO');
            $table->string('countryB');
            $table->string('countryT');
            $table->string('countryP');
            $table->string('countryE');
            $table->string('countryM');
            $table->string('countryD');
            $table->string('countryO');
            $table->string('jobTitle');
            $table->string('jobTitle1');
            $table->string('jobTitle2');
            $table->string('company');
            $table->string('company1');
            $table->string('company2');
            $table->string('time');
            $table->string('time1');
            $table->string('time2');
            $table->string('other');
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
        Schema::dropIfExists('resumes');
    }
}
