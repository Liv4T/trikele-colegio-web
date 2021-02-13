<?php

namespace App\Exports;

use App\User;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;

class ProductsExport implements FromView
{
    public function view(): View
    {
        $user = User::where('type_user', 2)->get();
        return view('exports.users', [
            'users' => $user,
        ]);
    }
}
