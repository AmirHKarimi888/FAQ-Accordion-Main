import CardView from "./components/CardView.js";
import { cardRes, cardItems } from "./model.js";

cardRes.map(item => cardItems.push({...item}));

CardView.render();

export const toggleAccardion = (id) => {
    cardItems.filter(item => {
        if(item?.id !== +id) {
            item.open = false;
        }
    })
    
    cardItems.filter(item => {
        if(item?.id === Number(id)) {
            item.open = !item.open;
        }
    })

}