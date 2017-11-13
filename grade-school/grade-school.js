/*
 * ES6 Class based
 */
'use strict'

class School{
  constructor(){
    this.student_roster = {}
  }
  roster() {
    return this.student_roster
  }
  add(name, grade) {
    if(this.student_roster[grade]){
      this.student_roster[grade].push(name)
      this.student_roster[grade].sort()
    }
    else{
      this.student_roster[grade] = [name]
    }
  }
  grade(grade) {
    return this.student_roster[grade] || []
  }
}

module.exports = School;

/*
 * Implementation without ES6 Syntax Sugar
 */
// function School(){
//   this.roster = {}
// }
//
// School.prototype.roster = function(){
//   return this.roster
// }
//
// School.prototype.add = function(name, grade){
//   if(this.roster[grade]){
//     this.roster[grade].push(name)
//     this.roster[grade].sort()
//   }
//   else{
//     this.roster[grade] = [name]
//   }
// }
//
// School.prototype.grade = function(grade){
//   return this.roster[grade] || []
// }
//
// module.exports = School;
