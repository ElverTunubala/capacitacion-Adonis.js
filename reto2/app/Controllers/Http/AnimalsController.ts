import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Animal from 'App/Models/Animal';


export default class AnimalsController {
    public async setRegistrarUsuario ({request, response}: HttpContextContract){
        const dataAnimal = request.only(['codigo_animal', 'nombre_animal', 'especie', 'raza', 'genero', 'edad'])
        try{
            const codigoAnimal = dataAnimal.codigo_animal;
            const animalExistente: Number = await this.getValidarUsuarioExistente(codigoAnimal);
            if(animalExistente== 0){
                await Animal.create(dataAnimal);
                response.status(200).json({"msg": "Registro completado con exito"});
            }else{
                response.status(400).json({"msg": "Error, el codigo de usuario ya existe"});
            }
        } catch (error) {
            console.log(error)
            response.status(500).json({"msg": "Error en el servidor."})
        }
    }
    private async getValidarUsuarioExistente(codigoAnimal: Number): Promise<Number>{
        const total = await Animal.query().where({'codigo_animal': codigoAnimal}).count('*').from('animals');
        return parseInt(total[0] ["count(*)"]);
    }
    public async getListarUsuarios(): Promise<Animal[]> {
        const user = await Animal.all();
        return user;
    }
    public async buscarPorId({request}:HttpContextContract){
        const id = request.param('id');
        const user = await Animal.find(id)
        return user;
    }
    // funcion para filtar el primer animal de determinada especie
    public async buscarEspecie({request}:HttpContextContract){
        const id = request.param('especie');
        const user = await Animal.findBy('especie',id)
        return user;
    }
    // funcion para filtrar todos los animales de determinada especie
    public async buscarEspecies({request}:HttpContextContract){
        const id = request.param('especie');
        const users = await Animal
        .query() 
        .where('especie',id)
        .orWhereNull('especie')
        return users
    }
    //funcion para buscar animales con edad menores a 8 años
    public async buscarEdad(){
        const users = await Animal
        .query() 
        .where('edad','<',8)
        .orWhereNull('edad')
        return users
    }
   
    public async actualizarAnimal({request}:HttpContextContract){
        const id = request.param('id');
        const user = request.all();
        await Animal.query().where('codigo_animal',id).update({
            nombre_animal: user.nombre_animal,
            especie: user.especie,
            raza : user.raza,
            genero: user.genero,
            edad: user.edad
        });
        return("Registro acualizado")
    }
    public async eliminarAnimal({request}:HttpContextContract){
        const id = request.param('id');
        await Animal.query().where('codigo_animal',id).delete();
        return{"msg": `se elimino el id ${id} correctamente`,"estado":200};
    }
    
}
