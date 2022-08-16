class Product{

    constructor(){
        this.id           = 1;
        this.arrayProduct = [];
    }


    toSave(){
        let item = this.readData();

        if(this.validateField(item)){
            this.addItem(item);
        }

        this.listTable();
        this.cancel();

    }


    listTable(){
        let tbody = document.getElementById('tbody');

        tbody.innerText = '';
        
        for (let i = 0; i < this.arrayProduct.length; i++) {
            let tr = tbody.insertRow();

            let td_id      = tr.insertCell();
            let td_product = tr.insertCell();
            let td_price   = tr.insertCell();
            let td_actions = tr.insertCell();

            td_id.innerText      = this.arrayProduct[i].id;
            td_product.innerText = this.arrayProduct[i].productName;
            td_price.innerText   = this.arrayProduct[i].price;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/add.png';
        
            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute("onclick", "product.delete("+ this.arrayProduct[i].id +")");

            td_actions.appendChild(imgEdit);
            td_actions.appendChild(imgDelete);

            // td_id.classList.add('Alguma classe CSS');

        }
    }


    addItem(item){
        this.arrayProduct.push(item);
        this.id++;
    }

    readData(){
        let item = {}

        item.id          = this.id;
        item.productName = document.getElementById('product').value;
        item.price       = document.getElementById('price').value;

        return item;
    }


    validateField(item){
        let msg = "";

        if(item.productName == ''){
            msg += 'Digite o nome do produto \n';
        }

        if(item.price == ''){
            msg += 'Digite o preço do produto \n';
        }

        if(msg != ''){
            alert(msg)
            return false;
        }

        return true;
    }


    cancel(){
        document.getElementById('product').value = '';
        document.getElementById('price').value = '';
    }


    delete(id){
        if (confirm('Deseja mesmo deletar o produto do ID: ' + id)) {
            let tbody = document.getElementById('tbody');
    
            for (let i = 0; i < this.arrayProduct.length; i++) {
                if(this.arrayProduct[i].id == id){
                    this.arrayProduct.slice(i, 1);
                    tbody.deleteRow(i);
                }
                
            }
        }

    }

}

var product = new Product();