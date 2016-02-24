(function () {
   'use strict';
   // this function is strict...
});

describe ("Bowling", function(){

  var bowling;

  it("Should create a Bowling game", function(){
      bowling = new Bowling();
      expect(bowling).toEqual(bowling);
  });
});
