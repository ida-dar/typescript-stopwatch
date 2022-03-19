import Stopwatch from './Stopwatch.js';

class StopwatchWithResults extends Stopwatch {

  private results: Array<string> = [];

  constructor(element: HTMLDivElement) {
    super(element);
    this.prepareElements(element);
    this.prepareActions();
  }

  private prepareElements(element: HTMLDivElement) {
    this.dom.resultsList = <HTMLElement> element.querySelector('.stopwatch__results .stopwatch__results__list');
    this.dom.addToListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__add-to-list-btn');
    this.dom.resetListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__reset-list-btn');
  }

  private prepareActions(): void {
    this.dom.addToListBtn.addEventListener('click', () => this.addToList());
    this.dom.resetListBtn.addEventListener('click', () => this.resetList());
  }

  private renderList(): void {
    this.dom.resultsList?.replaceChildren();

    (this.results.length > 0) && this.results.map(el => {
      this.dom.resultsList.insertAdjacentHTML('beforeend', `<li>${el}</li>`);
    })
  }

  private addToList(): void {
    const currTime: string = this.formatTime(this.currentTime);

    if(this.results.includes(currTime) === false) this.results.push(currTime);
    this.renderList();
  }

  private resetList(): void {
    this.results = [];
    this.dom.resultsList?.replaceChildren();
    this.dom.resultsList.insertAdjacentHTML('beforeend', `<li>No results :(</li>`);
  }

}

export default StopwatchWithResults
