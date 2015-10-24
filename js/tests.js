import Zoo from './zoo';

(function() {
  'use strict';


  describe('About our Zoo', function() {

    beforeEach( function(){
      window.z = new Zoo();
    });

    describe('creating a new Zoo', function() {
      it('should create a new instance', function() {
        // let z = new Zoo();
        expect(z instanceof Zoo).to.equal(true);
      })
    });
    describe('the Animals in our zoo', function() {
      it('should contain an array of animals', function(){
        // let z = new Zoo();
        expect(z.animals).to.be.a('array');
      });
    });
    describe('ability to add animals to our zoo', function(){
      it('should let me add a tiger to my zoo', function(){
        // let z = new Zoo();
        expect(z.animals.length).to.equal(0);
        z.animals.push('tiger');
        expect(z.animals.length).to.equal(1);
      });
    });
  });



  

}());

// Create a zoo
// Zoo will have animals




// Animals
// Animals will have different attributes (type, name, color, etc)