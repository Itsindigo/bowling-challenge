(function () {
   'use strict';
}());

describe ("Bowling", function(){

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("Can roll a gutter game", function (){
    rollMany(0, 20);
    expect(bowling.score()).toEqual(0);
  });

  it("Can roll all ones", function (){
    rollMany(1, 20);
    expect(bowling.score()).toEqual(20);
  });

  it("Can roll a spare", function(){
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(3);
    rollMany(0, 17);
    expect(bowling.score()).toEqual(16);
  });

  it("Can roll a strike", function(){
    bowling.roll(10);
    bowling.roll(4);
    bowling.roll(3);
    rollMany(0, 16);
    expect(bowling.score()).toEqual(24);
  });

  it("Can roll a perfect game", function(){
    rollMany(10, 12);
    expect(bowling.score()).toEqual(300);
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++){
      bowling.roll(pins)
    };
  };
});
