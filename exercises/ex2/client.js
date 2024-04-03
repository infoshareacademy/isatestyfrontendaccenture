const ORDER_PREFIX = 'ISA';

class ClientService {
    constructor(minimalPurchaseForDiscount = 500) {
        this.minimalPurchaseForDiscount = minimalPurchaseForDiscount;
    }

    getNextOrderNumber(client) {
        return `${ORDER_PREFIX}-#${client.orders.length + 1}`;
    }

    getOrderValue(client) {
        return client.orders.reduce((acc, curr) => acc + curr, 0);
    }

    calculateDiscount(client) {
        const ordersValue = this.getOrderValue(client);

        let discount = 0;
        if (ordersValue > this.minimalPurchaseForDiscount) {
            discount += 0.1;
        }

        if (client.type === 'INTERNAL') {
            discount += 0.15;
        }

        return discount;
    }

    calculateOrderValueWithDiscount(client) {
        const ordersValue = this.getOrderValue(client);
        return ordersValue - this.calculateDiscount(client) * ordersValue;
    }
}