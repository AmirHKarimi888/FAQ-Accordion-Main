import { toggleAccardion } from "../main.js";
import { cardItems } from "../model.js";

class CardView {
    constructor() {

    }

    main = document.querySelector("main");

    render() {

        const markup = /*html*/`
        <div class="card">
        <div class="card-header">
          <h1 class="card-header-title"><img src="./assets/images/icon-star.svg" alt="star icon"> <span>FAQs</span></h1>
        </div>
  
        <div class="card-body">
          <ul class="card-body-items">
          ${
            cardItems.map(item => {
                return(/*html*/`
                    <li class="card-body-item">
                      <div class="card-body-item-title" id="cardItem${ item?.id }">
                        <span class="card-body-item-title-text">${ item?.title }</span>
                        <span class="card-body-item-title-icon"><img src="./assets/images/${ item?.open ? 'icon-minus' : 'icon-plus' }.svg" alt="plus btn"></span>
                      </div>
                      ${ item?.open? `<div class="card-body-item-descr" id="cardItemDescr${ item?.id }">${ item?.descr }</div>` : '' }
                    </li>
                    `
                )
            })
            .join("")
          }  
          </ul>
        </div>
        </div>
        `

        this.main.innerHTML = "";
        this.main.insertAdjacentHTML("afterbegin", markup);
        this.eventHandler();
    }

    eventHandler() {
        document.querySelectorAll(".card-body-item-title").forEach(item => {
            item.addEventListener("click", () => {
                let id = item?.id.slice(item?.id.length - 1);
                toggleAccardion(id);
                this.render();
                document.querySelector(`#cardItemDescr${id}`)?.classList.add("bounceTopAnim");
            })
        })
    }
}

export default new CardView();