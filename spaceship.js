

var Spaceship = class Spaceship {
  constructor(name, crew, phasers, shields, cloaked) {
    this.name = name
    this.phasers = phasers
    this.phasersCharge = "uncharged"
    this.crew = crew
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    if (this.crew.length === 0) {
      this.docked = true
    }
      else {
      this.docked = false
      this.crew.forEach(member => {
        member.currentShip = this
      })
  }
}


}
