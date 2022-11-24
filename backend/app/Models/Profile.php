<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'id_user',
        'public_name',
        'description',
        'photo',
        'phone',
        'birth_date',
        'alcohol_pref',
        'smoke_pref'

    ];
}
