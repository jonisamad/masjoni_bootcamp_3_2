<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransaksisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaksis', function (Blueprint $table) {
            $table->increments('id');
            $table->string('N0_kamar');
            $table->integer('kamars_Id')->unsigned();
            $table->foreign('kamars_Id')->references('id')
                  ->on('kamars');
            $table->integer('customer_Id')->unsigned();
            $table->foreign('customers_Id')->references('id')
                 ->on('customers');
            $table->datetime('chek_in');
            $table->datetime('chek_out');
                  

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
        Schema::dropIfExists('transaksis');
    }
}
