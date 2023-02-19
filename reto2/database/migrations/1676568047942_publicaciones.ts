import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Publicaciones extends BaseSchema {
  protected tableName = 'publicaciones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('codigo_publicacion').primary().unsigned()
      table.string('titulo',100).notNullable()
      table.string('cuerpo',200).notNullable()
      table.integer('codigo_animal').unsigned().index('codigo_animal')
      table.foreign('codigo_animal').references('animals.codigo_animal').onDelete('cascade')
      table.timestamps(false)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
