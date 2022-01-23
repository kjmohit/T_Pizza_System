export class OrderItem {
    id: number | undefined ;
    quantity: number ;
    price: number ;
    category: string | undefined;
    size: string | undefined;
    title: string | undefined;
}

export class Order {
    orderId: number | undefined;
    orderDate: Date;
    orderNumber: string;
    items: OrderItem[] = [];
    get total(): number {
        const result = this.items.reduce((total, value) => {
            return total + (value.price * value.quantity)
        }, 0)
        return result;
    }
}
