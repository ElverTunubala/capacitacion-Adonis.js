import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsuarioGrupos extends BaseSchema {
  protected tableName = 'usuario_grupos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('codigo_animal').unsigned().index('codigo_animal')
      table.integer('codigo_grupo').unsigned().index('codigo_grupo')
      table.date('fecha_inicio').notNullable()
      table.foreign('codigo_animal').references('animals.codigo_animal').onDelete('cascade')
      table.foreign('codigo_grupo').references('grupos.codigo_grupo').onDelete('cascade')
      table.timestamps(false)
    })
  }


  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
