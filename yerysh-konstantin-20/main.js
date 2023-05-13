
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log(this.step);
      return this;
    }
  };
  
  console.log(ladder.up().up().up().down().down().up().up().up().up().up().up()); 
