<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Usuario::class, function (Faker\Generator $faker) {
	$password = $faker->password;

    return [
        'nombre' => $faker->name,
        'apellido_paterno' => $faker->lastName,
        'apellido_materno' => $faker->lastName,
        'usuario' => $faker->userName,
        'correo' => $faker->email,
        'contrasena' => $password,
        'contrasena_confirmation' => $password,
        'fecha_nacimiento' => $faker->date('Y-m-d'),
        'curp' => $faker->word,
        'sexo' => $faker->shuffle(array('M', 'F')),
        'telefono_movil' => $faker->phoneNumber,
        'telefono_casa' => $faker->phoneNumber,
        'telefono_oficina' => $faker->phoneNumber,
        'acepta_aviso_privacidad' => 'S',
        'fecha_acepta_aviso_privacidad' => $faker->date('Y-m-d') . " " . $faker->time(),
    ];
});
