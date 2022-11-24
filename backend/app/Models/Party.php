<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Party extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'id_user',
        'vacancies',
        'title',
        'description',
        'photo',
        'date',
        'time',
        'alcohol',
        'smoke',
        'id_location',
        'address',
        'meeting_details',
        'phone_contact',
        'active'
    ];
}
