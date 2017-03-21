var CrewMember = class CrewMember {
  constructor(position, currentShip) {
    this.position = position
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
    else if (this.position === 'Pilot') {
        this.currentShip.warpDrive = "engaged!"
    } else {
      return "had no effect"
    }
  }

  chargePhasers(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
    else if (this.position === "Gunner") {
      this.currentShip.phasersCharge = "charged!"
    } else {
      return "had no effect"
    }
  }

  setsInvisibility(){
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
    else if (this.position === "Defender"){
      this.currentShip.cloaked = true
    } else {
    return "had no effect"
  }
}

}
