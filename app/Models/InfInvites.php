<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;


class InfInvites extends Model
{
    use HasFactory;
    use HasUuids;
    /*
     * The table associated with the model
     *
     * @var string
     */
    protected $table = 'inf_invites';
    protected $primaryKey = 'id';
    protected $keyType = 'string';
}
