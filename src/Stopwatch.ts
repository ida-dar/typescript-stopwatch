interface StopwatchDom {
  currentTime: HTMLDivElement;
  startBtn: HTMLButtonElement;
  stopBtn: HTMLButtonElement;
  resetBtn: HTMLButtonElement;
  resultsList: HTMLElement;
  addToListBtn: HTMLButtonElement;
  resetListBtn: HTMLButtonElement;
  [x: string]: HTMLElement;
}

type timerType = ReturnType<typeof setInterval> | number | null

abstract class Stopwatch {

  protected currentTime: number = 0;
  private timer: timerType = null;
  protected dom = <StopwatchDom> {};

  constructor(element: HTMLDivElement) {
    this.getElements(element);
    this.initActions();
    this.renderTime();
  }

  private getElements(element: HTMLElement): void {
    this.dom.currentTime = <HTMLDivElement> element.querySelector('.stopwatch__current-time');
    this.dom.startBtn = <HTMLButtonElement> element.querySelector('.stopwatch__actions .stopwatch__start-btn');
    this.dom.stopBtn = <HTMLButtonElement> element.querySelector('.stopwatch__actions .stopwatch__stop-btn');
    this.dom.resetBtn = <HTMLButtonElement> element.querySelector('.stopwatch__actions .stopwatch__reset-btn');
  }

  private initActions(): void {
    this.dom.startBtn.addEventListener('click', () => this.start());
    this.dom.stopBtn.addEventListener('click', () => this.stop());
    this.dom.resetBtn.addEventListener('click', () => this.reset());
  }

  protected formatTime(time: number): string {
    const pad = (num: number): string => (num < 10 ? num.toString().padStart(2, '0') : num.toString());

    const mm = Math.floor(time / 60000);
    const ss = Math.floor((time - mm * 60000) / 10000);
    const ms = (time - mm * 60000 - ss * 10000);
    const formatted: string = `${pad(mm)}:${pad(ss)}:${pad(ms).substr(0, 2)}`;

    return formatted;
  }

  protected renderTime(): void {
    this.dom.currentTime.innerHTML = this.formatTime(this.currentTime);
  }

  private start(): void {
    this.timer === null ? this.timer = setInterval(() => this.step(), 1000) : this.timer;
  }

  private step(): void {
    this.currentTime += 1;
    this.renderTime();
  }

  private stop(): void {
    clearInterval(this.timer);
    this.timer = null;
  }

  private reset(): void {
    this.currentTime = 0;
    this.renderTime();
    this.stop();
  }

}

export default Stopwatch
