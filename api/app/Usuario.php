<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class Usuario extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    protected $primaryKey = 'id_usuarios';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'apellido_paterno',
        'apellido_materno',
        'usuario',
        'correo',
        'contrasena',
        'api_token',
        'fecha_nacimiento',
        'curp',
        'sexo',
        'telefono_movil',
        'telefono_casa',
        'telefono_oficina',
        'acepta_aviso_privacidad',
        'fecha_acepta_aviso_privacidad',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'contrasena',
        'api_token',
    ];
}
