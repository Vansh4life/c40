class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('Reset');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2 - 60, 0);

    this.input.position(displayWidth/2 - 40, displayHeight/2 - 60);
    this.button.position(displayWidth/2 + 20, displayHeight/2);
    this.reset.position(displayWidth - 100, 50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 30, displayHeight/3);
    });

    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
    });

  }
}
