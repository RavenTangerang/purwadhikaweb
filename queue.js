class Queue {
  constructor() {
    this.items = [];
    this.processed = 0;
  }

  async enqueue(item) {
    this.items.push(item);
    await this.process();
  }

  async dequeue() {
    if (this.items.length > 0) {
      this.processed++;
      this.items.shift();
    }
  }

  async process() {
    if (this.items.length > 0) {
      const item = this.items[0];
      console.log(`Processing ${item}...`);

      const time = Math.floor(Math.random() * 10) + 1;
      await new Promise(resolve => setTimeout(resolve, time * 1000));

      await this.dequeue();

      console.log(`Queue ${this.processed} done in ${time} seconds`);

      await this.process();
    }
  }
}

module.exports = Queue;
