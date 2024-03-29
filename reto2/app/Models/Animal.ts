import { DateTime } from 'luxon'
import { BaseModel, column,hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Perfil from './Perfil'


export default class Animal extends BaseModel {
  @column({ isPrimary: true })
  public codigo_animal: number

  @column()
  public nombre_animal: string

  @column()
  public especie: string

  @column()
  public raza: string

  @column()
  public genero: string
  @column()
  public edad: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne( ()=> Perfil, {
    localKey: 'codigo_animal',
    foreignKey: 'codigo_animal'
  })
  public perfil: HasOne<typeof Perfil>
}
