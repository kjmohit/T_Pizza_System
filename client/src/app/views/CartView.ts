import { Component } from "@angular/core";
import { Store } from "../services/store.service";


@Component({
  selector: "cart",
  templateUrl: "cartView.html",
  styleUrls: [ "cartView.scss" ]
})
export class CartView {
  constructor(public store: Store) {
  }
}
