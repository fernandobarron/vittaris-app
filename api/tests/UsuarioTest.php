<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class UsuarioTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCrearUsuario()
    {
        $usuario = factory('App\Usuario')->make();

        $this->json('POST', '/usuario', $usuario->toArray())
             ->seeJson([
                'success' => true,
             ]);
    }
}
