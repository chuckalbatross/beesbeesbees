var Bee = function() {
  //this = Object.create(Bee.prototype); (in pseudoclassical, this is inserted by interpreter. Do we need to call new Grub()?)
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);  //does this override line 2? (how is this different from: this = new Grub();)
Bee.prototype.constructor = Bee;      //called when: var testBee = new Bee(); (why isn't this automatic?)

