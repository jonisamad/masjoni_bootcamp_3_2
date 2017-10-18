<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Transaction;

class bookingController extends Controller
{
    {
        function Book(Request $req){
            DB::beginTransaction();
            try {
                $this->validate($req, [
                    'id_customer' => 'required',
                    'id_kamar' => 'required'
                ]);
                $book = new Transaction;
                $book->id_kamar = $req->input('id_kamar');
                $book->id_customer = $req->input('id_customer');
                $book->check_in = $req->input('check_in');
                $book->check_out = $req->input('check_out');
                $book->save();
                DB::commit();
                return response()->json(['message' => 'Succesfully Create Booking'], 200);
            }
            catch(\Exception $e){
                DB::rollback();
                return response()->json(['message' => 'Failed to Create Booking, exception:' + $e], 500); 
            }
        }//
}
