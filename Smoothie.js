class Smoothie {
    constructor (size,name){
        this.size = size;
        this.name = name;
    }

    describe () {
        console.log (`${this.size} oz ${this.name}`);
    }  
}

let smoothie1 = new Smoothie ('12', 'Orange');
let smoothie2 = new Smoothie ('8','Mango');
let smoothie3 = new Smoothie ('16', 'Apple/Orange');
let smoothie4 = new Smoothie ('20','Peach/Banana');
let smoothie5 = new Smoothie ('6','Green Apple');

smoothie1.describe(1);
smoothie2.describe();
smoothie3.describe();
smoothie4.describe();
smoothie5.describe();


class Order {
    constructor (name){
        this.name = name;
        this.smoothies = [];
    }


addSmoothie (smoothie){
    if (smoothie instanceof Smoothie) {
        this.smoothies.push(smoothie);
    } else {
        throw new Error ('You can only add one selection. Argument is not a valid entry');

    }
}
 describe (){
     console.log (`${this.name} has ${this.smoothies.length} smoothies.`);
 }
}
 
    let order1 = new Order ('order','100');
    let order2 = new Order ('Turbo', '2');

    order1.describe ();
    order2.describe ();

    class Menu {
        constructor (){
            this.orders = [];
            this.selectedOrder = null;
        }

       start (){
           let selection = this.showMainMenuOptions();

           while (selection !=0) {
               switch (selection) {
                   case '1':
                       this.createOrder ();
                       break;
                   case '2':
                       this.viewOrder ();
                       break;    
                   case '3':
                       this.deleteOrder ();
                       break; 
                   case '4':
                       this.displayOrder ();
                       break; 
                   default:
                       selection = 0;
               }
               selection = this.showMainMenuOptions();
           }
           alert ('Thank you, come again!');
       } 
       showMainMenuOptions (){
           return prompt (`
           0) Return To Main Menu
           1) Create Smoothie 
           2) View Smoothie
           3) Delete Selection
           4) Display Order
           `);
       }

       showTeamMenuOptions (orderTester) {
           return prompt (`
           0)back
           1)edit order
           2)delete order 
           --------------
           ${orderTester}
           `);
       }

       displayOrders (){
           let orderString = '';
           for (let i=0; i < this.orders.length; i++) {
               orderString += i + ')' + this.orders[i].name + '\n';
            }
            alert (orderString);
       }

       createOrder (){
           let name = prompt ('Enter your fruit and juice selection');
           this.orders.push (new Order(name));
       }

       viewOrder (){
           let index = prompt ('Enter the index of the smoothie you wish to edit:');
           if (index > -1 && index  < this.orders.length){
               this.selectedOrder = this.orders[index];
               let description = 'Smoothie Selection: ' + this.selectedOrder.name + '';

               for (let i=0; i < this.selectedOrder.smoothies.length; i++) {
                   description += i + ')' + this.selectedOrder.smoothies [i].name
                   + ' - ' + this.selectedOrder.smoothies[i].size + '\n';

               }

           let selection = this.showTeamMenuOptions (description);
               switch (selection) {
                   case '1':
                       this.createOrder ();
                       break;
                   case '2':
                       this.deleteOrder ();
               }
               
         }
        }
            //Deletes Order 
        deleteOrder (){
             let index = prompt ('Enter the index of the order you wish to delete');
             if (index > -1 && index < this.orders.length) {
                 this.order.splice(index,1);
             }
        }
    }

    let menu = new Menu();
    menu.start ();

