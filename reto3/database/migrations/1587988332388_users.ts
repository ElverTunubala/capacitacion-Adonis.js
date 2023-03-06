import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('tipo_documento',50).notNullable()
      table.integer('numero_documento',30).notNullable().unique()
      table.string('name', 180).notNullable()
      table.string('apellidos', 180).notNullable()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.string('direccion', 80)
      table.string('barrio', 50)
      table.string('municipio', 50)
      table.string('departamento', 80)
      table.integer('perfil').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
