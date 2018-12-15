<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/*
$router->get('/', function () use ($router) {
    return $router->app->version();
});
*/
$router->get('/', function () {
    // Uses Auth Middleware
    return 'hola mundo!';
});

//$router->group(['middleware' => 'auth'], function () use ($router) {
/*    $router->get('usuario', [
	    'as' => 'usuario.index',
	    'uses' => 'UsuarioController@index'
	]);
	*/

	$router->post('/usuario', [
	    'as' => 'usuario.store',
	    'uses' => 'UsuarioController@store'
	]);
/*
	$router->get('usuario/{id}', [
	    'as' => 'usuario.show',
	    'uses' => 'UsuarioController@show'
	]);

	$router->put('usuario/{id}', [
	    'as' => 'usuario.update',
	    'uses' => 'UsuarioController@update'
	]);

	$router->delete('usuario/{id}', [
	    'as' => 'usuario.delete',
	    'uses' => 'UsuarioController@destroy'
	]);
	*/
//});
