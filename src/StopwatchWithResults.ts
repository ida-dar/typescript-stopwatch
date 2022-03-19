import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {
  
  results = []

  constructor(element) {
    super(element)
    this.prepareElements(element)
    this.prepareActions()
  }

  prepareElements(element) {
    this.dom.resultsList = element.querySelector('.stopwatch__results')
    this.dom.addToListBtn = element.querySelector('.stopwatch__start-add-to-list')
    this.dom.resetListBtn = element.querySelector('.stopwatch__start-reset-list')
  }

  prepareActions() {
    /*
    Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
    Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
    */
  }

  renderList() {
    /*
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li
    na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian.

    np. <li>00:12:00</li>
    */
  }

  addToList() {
    /*
    Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować go i w takiej postaci zapisywać do tablicy this.results.
    Następnie powinna renderować aktualną listę na stronie (this.renderList).
    */
  }

  resetList() {
    /*
    Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
    */
  }

}

export default StopwatchWithResults