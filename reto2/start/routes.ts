/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
// import AnimalsController from 'App/Controllers/Http/AnimalsController';

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.group(()=>{
  Route.get('/listar-animales','AnimalsController.getListarUsuarios')
  Route.get('/buscar-id/:id','AnimalsController.buscarPorId')
  Route.get('/buscar/:especie','AnimalsController.buscarEspecie')
  Route.get('/buscarr/:especie','AnimalsController.buscarEspecies')
  Route.get('/buscaredad','AnimalsController.buscarEdad')
  Route.post('/registro-animales','AnimalsController.setRegistrarUsuario')
  Route.put('/actualizar-animales/:id','AnimalsController.actualizarAnimal')
  Route.delete('/eliminar/:id','AnimalsController.eliminarAnimal')
}).prefix('/api');
