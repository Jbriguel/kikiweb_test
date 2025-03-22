import { ContentFile } from './ContentFile.js'
import { Service } from './Service.js'

export class Categorie {
  constructor({ id, name, etat, files, services }) {
    this.id = id
    this.name = name
    this.etat = etat
    this.files = files ? files.map(file => new ContentFile(file)) : []
    this.services = services ? services.map(service => new Service(service)) : []
  }
}