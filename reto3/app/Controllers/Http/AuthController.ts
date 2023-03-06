import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/user'

export default class AuthController {
    public async register ({auth, request }: HttpContextContract) {

        const name = request.input("name");
        const email = request.input("email");
        const password = request.input("password");
        const tipo_documento = request.input("tipo_documento");
        const numero_documento = request.input("numero_documento");
        const apellidos = request.input("apellidos");
        const perfil = request.input("perfil");

        const user = new User();
        user.email = email;
        user.password = password;
        user.name = name;
        user.tipo_documento = tipo_documento;
        user.numero_documento = numero_documento;
        user.apellidos = apellidos;
        user.perfil = perfil;

        await user.save();
       
        const token = await auth.use("api").login(user, {
            expiresIn: "10 days",
        });
        return {
            token,
            "msg": "Usuario registrado correctamente"
        }
        
    }

    public async login({ auth, request, response}: HttpContextContract){
        const email = request.input('email');
        const password = request.input('password');
        try {
            const token = await auth.use("api").attempt(email, password,{
                expiresIn: "5 mins"
            });
            return{
                token,
                "msg": "usuario logueado correctamente"
            }
        } catch (error) {
            return response.unauthorized('Credenciales ivalidas')
        }
    }
}
