function Car(logo){
  this.logo = logo || 'undefined name'
}
Car.prototype = {
  start: function(){
    console.log('%s, start', this.logo);
  },
  run: function(){
    console.log('%s, running', this.logo);
  },
  stop: function(){
    console.log('%s, stop', this.logo);
  },
  
}

lanriver = new Car('landriver')
lanriver.start()
lanriver.stop()