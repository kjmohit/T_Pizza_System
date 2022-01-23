import { Component, OnInit } from "@angular/core";
import { Store } from "../services/store.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomizePizzaComponent } from "./customize-pizza.component";
import { Pizza } from "../shared/Pizza";
/*import { MatToolBar } from "@angular/material/toolbar";*/

@Component({
    selector: "pizza-list",
    templateUrl: "pizzaListView.component.html",
    styleUrls: ["pizzaListView.component.scss"]

})
export default class PizzaListView implements OnInit{
 

    constructor(public store: Store, private dialog: MatDialog) {
      
    }
    ngOnInit() {
        this.store.loadPizzas().subscribe(() => { });  
    }

    onCustomise(pizza: Pizza) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        dialogConfig.data = pizza;
        this.dialog.open(CustomizePizzaComponent, dialogConfig)

    }
}