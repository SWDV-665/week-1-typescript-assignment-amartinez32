
class Grocery {
  itemList: string;
    constructor(public name: Array<string>, public quantity: Array<any>, public price: Array<any>, public aisle: Array<number>) {
      this.itemList = `${name} ${quantity} ${price} ${aisle}`;
        }
      
    }

    interface GroceryList {
        name: string;
        quantity: number;
        price:number;
        aisle: number;
    }

  
  
  
  let groceryList= new Grocery(["Paper Towels", "Avacado", "Milk", "Cereal"], [1, 3, 1, 3], [8.79, 4.99, 1.23, 6.75], [3,13,8,2]);

 
  
  
  document.write("<table>");
  document.write("<tr> <th>Name of Item</th> <th>Quantity</th><th>Price</th> <th>Aisle Number</th></tr>");
  for (var i in groceryList.name, groceryList.quantity, groceryList.price, groceryList.aisle) {
    document.write("<tr>");
    document.write("<td>" + groceryList.name[i] + "</td>" +"<td>" + groceryList.quantity[i] + "</td>" +  "<td>"+ "$" +  groceryList.price[i] + "</td>" + "<td>"+ groceryList.aisle[i] + "</td>");
    document.write("</tr>");
  };
  document.write("</table>");