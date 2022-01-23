import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Order, OrderItem } from "../shared/Order";
import { Pizza } from "../shared/Pizza";

@Injectable()
export class Store {
    constructor(private http: HttpClient) {

    }
    //public products = [{ title: "Van Gogh", price: "19.99" },
    //    { title: "Van Gogh Post", price: "19.99" }];
    public pizzas: Pizza[] = [];
    public order: Order = new Order();

    loadPizzas():Observable<void> {
        return this.http.get<[]>("/api/pizza")
            .pipe(map(data => {
            this.pizzas = data;
            return;
        }));
    
    }

    addToOrder(pizza: Pizza) {
        
        let item = this.order.items.find(o => o.id === pizza.id);
        if (item) {
            item.quantity++;
        } else {
            const newItem = new OrderItem();
            newItem.id = pizza.id;
            newItem.title = pizza.title;
            newItem.category = pizza.category;
            newItem.price = pizza.price;
            newItem.quantity = 1;
            this.order.items.push(newItem);
        }
      
      
    }

}

