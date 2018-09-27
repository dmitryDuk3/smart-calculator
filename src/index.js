class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue.toString();// your implementation
  }

  add(number) {
    this.initialValue += " + " + number;// your implementation
    return this;
  }
  
  subtract(number) {
    this.initialValue += " - " + number;// your implementation
    return this;
  }

  multiply(number) {
    this.initialValue += " * " + number;// your implementation
    return this;
  }

  devide(number) {
    this.initialValue += " / " + number;// your implementation
    return this;
  }

  pow(number) {
    this.initialValue += " ** " + number;// your implementation
    return this;
  }

  valueOf(){
    return eval(this.initialValue);
  }

}

module.exports = SmartCalculator;