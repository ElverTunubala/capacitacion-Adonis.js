import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Perfils extends BaseSchema {
  protected tableName = 'perfils'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('codigo_perfil').primary().unsigned()
      table.string('nombre_perfil',100).notNullable()
      table.date('fecha_creacion').notNullable()
      table.integer('codigo_animal').unsigned().unique().index('codigo_animal')
      table.foreign('codigo_animal').references('animals.codigo_animal').onDelete('cascade')
      table.timestamps(false)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
