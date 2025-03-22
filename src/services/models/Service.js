import { ContentFile } from './ContentFile.js'

export class Service {
  constructor({ id, categorie, categorie_id, name, price, duration, etat, files }) {
    this.id = id
    this.categorie = categorie
    this.categorie_id = categorie_id
    this.name = name
    this.price = price
    this.duration = duration
    this.etat = etat
    this.files = files ? files.map(file => new ContentFile(file)) : []
  }
}