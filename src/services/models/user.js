// models/User.js
export class User {
  constructor({
    id = null,
    firstname = null,
    lastname = null,
    dob = null,
    state = null,
    email = null,
    phone = null,
    gender = null,
    active_mark = null,
    total_mark = null,
    etat = null,
    created_at = null,
    is_employee = null,
    job = null,
    appointments_count = null,
    name = null,
    has_phone_verified = null,
    has_email_verified = null,
    address = null,
    type = null,
  } = {}) {
    this._id = id
    this._firstname = firstname
    this._lastname = lastname
    this._dob = dob
    this._state = state
    this._email = email
    this._phone = phone
    this._gender = gender
    this._active_mark = active_mark
    this._total_mark = total_mark
    this._etat = etat
    this._created_at = created_at
    this._is_employee = is_employee
    this._job = job
    this._appointments_count = appointments_count
    this._name = name
    this._has_phone_verified = has_phone_verified
    this._has_email_verified = has_email_verified
    this._address = address
    this._type = type
  }

  // Getters
  get id() {
    return this._id
  }

  get firstname() {
    return this._firstname
  }

  get lastname() {
    return this._lastname
  }

  get dob() {
    return this._dob
  }

  get state() {
    return this._state
  }

  get email() {
    return this._email
  }

  get phone() {
    return this._phone
  }

  get gender() {
    return this._gender
  }

  get active_mark() {
    return this._active_mark
  }

  get total_mark() {
    return this._total_mark
  }

  get etat() {
    return this._etat
  }

  get created_at() {
    return this._created_at
  }

  get is_employee() {
    return this._is_employee
  }

  get job() {
    return this._job
  }

  get appointments_count() {
    return this._appointments_count
  }

  get name() {
    return this._name
  }

  get has_phone_verified() {
    return this._has_phone_verified
  }

  get has_email_verified() {
    return this._has_email_verified
  }

  get address() {
    return this._address
  }

  get type() {
    return this._type
  }

  // Setters
  set id(value) {
    this._id = value
  }

  set firstname(value) {
    this._firstname = value
  }

  set lastname(value) {
    this._lastname = value
  }

  set dob(value) {
    this._dob = value
  }

  set state(value) {
    this._state = value
  }

  set email(value) {
    this._email = value
  }

  set phone(value) {
    this._phone = value
  }

  set gender(value) {
    this._gender = value
  }

  set active_mark(value) {
    this._active_mark = value
  }

  set total_mark(value) {
    this._total_mark = value
  }

  set etat(value) {
    this._etat = value
  }

  set created_at(value) {
    this._created_at = value
  }

  set is_employee(value) {
    this._is_employee = value
  }

  set job(value) {
    this._job = value
  }

  set appointments_count(value) {
    this._appointments_count = value
  }

  set name(value) {
    this._name = value
  }

  set has_phone_verified(value) {
    this._has_phone_verified = value
  }

  set has_email_verified(value) {
    this._has_email_verified = value
  }

  set address(value) {
    this._address = value
  }

  set type(value) {
    this._type = value
  }

  // Convertir l'objet User en Map
  toMap() {
    return {
      id: this._id,
      firstname: this._firstname,
      lastname: this._lastname,
      dob: this._dob,
      state: this._state,
      email: this._email,
      phone: this._phone,
      gender: this._gender,
      active_mark: this._active_mark,
      total_mark: this._total_mark,
      etat: this._etat,
      created_at: this._created_at,
      is_employee: this._is_employee,
      job: this._job,
      appointments_count: this._appointments_count,
      name: this._name,
      has_phone_verified: this._has_phone_verified,
      has_email_verified: this._has_email_verified,
      address: this._address,
      type: this._type,
    }
  }

  // Créer un User à partir d'un Map
  static fromMap(map) {
    return new User({
      id: map["id"],
      firstname: map["firstname"],
      lastname: map["lastname"],
      dob: map["dob"],
      state: map["state"],
      email: map["email"],
      phone: map["phone"],
      gender: map["gender"],
      active_mark: map["active_mark"],
      total_mark: map["total_mark"],
      etat: map["etat"],
      created_at: map["created_at"],
      is_employee: map["is_employee"],
      job: map["job"],
      appointments_count: map["appointments_count"],
      name: map["name"],
      has_phone_verified: map["has_phone_verified"],
      has_email_verified: map["has_email_verified"],
      address: map["address"],
      type: map["type"],
    //   id: map.id,
    //   firstname: map.firstname,
    //   lastname: map.lastname,
    //   dob: map.dob,
    //   state: map.state,
    //   email: map.email,
    //   phone: map.phone,
    //   gender: map.gender,
    //   active_mark: map.active_mark,
    //   total_mark: map.total_mark,
    //   etat: map.etat,
    //   created_at: map.created_at,
    //   is_employee: map.is_employee,
    //   job: map.job,
    //   appointments_count: map.appointments_count,
    //   name: map.name,
    //   has_phone_verified: map.has_phone_verified,
    //   has_email_verified: map.has_email_verified,
    //   address: map.address,
    //   type: map.type,
    })
  }
}

export default User