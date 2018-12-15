<?php

namespace App\Http\Controllers;

use App\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends ApiController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    /*
    public function index()
    {
        $users = Usuario::all();

        return $this->responseSuccess($users);
    }*/

    /**
     * Store and validate newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $reglasValidacion = [
            'nombre' => 'bail|required',
            'apellido_paterno' => 'bail|required',
            'usuario' => 'bail|required|unique:usuarios',
            'correo' => 'bail|required|email|unique:usuarios',
            'contrasena' => 'bail|required|min:6|confirmed',
            'contrasena_confirmation' => '',
        ];

        $mensajesError = [
            'required' => 'Por favor ingrese el campo :attribute',
            'alpha' => 'El campo :attribute sólo admite valores alfanumericos',
            'alpha_dash' => 'El campo :attribute sólo admite valores alfanumericos, - y _',
            'unique:usuarios' => 'El usuario o email ya se encuentra registrado',
            'email' => 'Su correo no tiene un formato válido',
            'min:6' => 'La contraseña debe contener al menos 6 caracteres',
            'confirmed' => 'Su contraseña no coincide',
        ];

        $this->validate($request, $reglasValidacion, $mensajesError);

        try {
            $nombre = $request->input('nombre');
            $apellido_paterno = $request->input('apellido_paterno');
            $apellido_materno = $request->input('apellido_materno');
            $usuario = $request->input('usuario');
            $correo = $request->input('correo');
            $hasher = app()->make('hash');
            $contrasena = $hasher->make($request->input('contrasena'));
            $fecha_nacimiento = $request->input('fecha_nacimiento');
            $curp = $request->input('curp');
            $sexo = $request->input('sexo');
            $telefono_movil = $request->input('telefono_movil');
            $telefono_casa = $request->input('telefono_casa');
            $telefono_oficina = $request->input('telefono_oficina');
            $acepta_aviso_privacidad = $request->input('acepta_aviso_privacidad');
            $fecha_acepta_aviso_privacidad = $request->input('fecha_acepta_aviso_privacidad');

            $usuario = Usuario::create([
                'nombre' => $nombre,
                'apellido_paterno' => $apellido_paterno,
                'apellido_materno' => $apellido_materno,
                'usuario' => $usuario,
                'correo' => $correo,
                'contrasena' => $contrasena,
                'fecha_nacimiento' => $fecha_nacimiento,
                'curp' => $curp,
                'sexo' => $sexo,
                'telefono_movil' => $telefono_movil,
                'telefono_casa' => $telefono_casa,
                'telefono_oficina' => $telefono_oficina,
                'acepta_aviso_privacidad' => $acepta_aviso_privacidad,
                'fecha_acepta_aviso_privacidad' => $fecha_acepta_aviso_privacidad,
            ]);

            return $this->responseSuccess($usuario);
        } catch (\Illuminate\Database\QueryException $ex) {
            return $this->responseFail($ex->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /*
    public function show($id)
    {
        $user = Usuario::findOrFail($id);

        return $this->responseSuccess($user);
    }*/

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /*
    public function update(Request $request, $id)
    {
        $user = Usuario::findOrFail($id);

        $this->validate($request, [
            'nombre' => 'required',
            'email' => 'required|email'
        ]);

        $result = $user->update($request->all());

        if (!$result) {
            return $this->responseFail();
        }

        return $this->responseSuccess($user);
    }*/

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    /*
    public function destroy($id)
    {
        $user = Usuario::findOrFail($id);

        $user->delete();

        return $this->responseSuccess();
    }
    */
}
