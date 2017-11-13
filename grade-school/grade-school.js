function School(){
  this.roster = {}
}

School.prototype.roster = function(){
  return this.roster
}

School.prototype.add = function(name, grade){
  if(this.roster[grade]){
    this.roster[grade].push(name)
    this.roster[grade].sort()
  }
  else{
    this.roster[grade] = [name]
  }
}

School.prototype.grade = function(grade){
  return this.roster[grade] || []
}

module.exports = School;
