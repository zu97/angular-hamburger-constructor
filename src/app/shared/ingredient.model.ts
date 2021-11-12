export class Ingredient {
  count = 0;

  constructor(
    public img: string,
    public name: string,
    public cost: number,
  ) {}

  getPrice() {
    return this.count * this.cost;
  }

  increaseCount() {
    this.count++;
  }

  isCanReduce() {
    return this.count;
  }

  reduceCount() {
    if (this.count === 0) {
      return;
    }

    this.count--;
  }

  refreshCount() {
    this.count = 0;
  }
}
