let id = "xyz";
let sortDirection = 1; 
let sortProperty = null;
load_data();
function submit_data() {
  document.getElementById('show').innerHTML = '';
  document.getElementById('show2').innerHTML = '';
  document.getElementById('show3').innerHTML = '';
  document.getElementById('show4').innerHTML = '';
  
  let name = document.getElementById('productName').value;
  let price = document.getElementById('productPrice').value;
  let desc = document.getElementById('productDescription').value;
  let image = document.getElementById('productImage').value;
  
  if (name == '') {
      document.getElementById('show').innerHTML = 'Please Enter Product Name';
  } else if (price == '') {
      document.getElementById('show2').innerHTML = 'Please Enter price.';
  } else if (desc == '') {
      document.getElementById('show3').innerHTML = 'please Enter description';
  } else if(image == '') {
      document.getElementById('show4').innerHTML = 'Please select image.';
  } else {
    if (id == 'xyz') {
        let arr = get_data();
        console.log(arr);
        if (arr == null) {
            let data = [name,price,desc,image];
            localStorage.setItem('crud', JSON.stringify(data));
        } else {
            arr.push([name,price,desc,image]);
            localStorage.setItem('crud', JSON.stringify(arr));
        }
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productDescription').value = '';
        document.getElementById('productImage').value = '';
        document.getElementById('show').innerHTML = 'Product Added Sucessfully.'
    } else {
        let arr = get_data();
        arr[id][0] = name;
        arr[id][1] = price;
        arr[id][2] = desc;
        arr[id][3] = image;
        localStorage.setItem('crud', JSON.stringify(arr));
        document.getElementById('show').innerHTML = 'Product Updated Sucessfully.'
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productDescription').value = '';
        document.getElementById('productImage').value = '';
    }
      load_data();
      id = 'xyz';
  }
}

function update_data(request_id) {
  let arr = get_data();
  document.getElementById('productName').value = arr[request_id][0];
  document.getElementById('productPrice').value = arr[request_id][1];
  document.getElementById('productDescription').value = arr[request_id][2];
  document.getElementById('productImage').value = arr[request_id][3];
  id = request_id;
}

function delete_data(request_id) {
  let arr = get_data();
  arr.splice(request_id, 1);
  localStorage.setItem('crud', JSON.stringify(arr));
  load_data();
}

function load_data() {
  let arr = get_data();
  if (arr != null) {
    if (sortProperty !== null) {
      arr.sort((a, b) => {
        let valueA = a[sortProperty];
        let valueB = b[sortProperty];

        if (valueA < valueB) {
          return -1 * sortDirection;
        } else if (valueA > valueB) {
          return 1 * sortDirection;
        } else {
          return 0;
        }
      });
    }
    let html = '';
    let productNo = 1;
    for (let key in arr) {
        html = html + `<tr> 
          <td>${productNo}</td> 
          <td>${arr[key][0]}</td> 
          <td>${arr[key][1]}</td>
          <td><img src="${arr[key][3]}" width=150 height=150></td> 
          <td>${arr[key][2]}</td> 
          <td><a href="javascript:void(0)" onclick="update_data(${key})" >Update</a></td> 
          <td><a href="javascript:void(0)" onclick="delete_data(${key})">Delete</a></td>
        </tr>`;
        productNo++;
    }
    document.getElementById('root').innerHTML = html;
  }
}

function get_data() {
    let arr = JSON.parse(localStorage.getItem('crud'));
    return arr;
}

function sortProducts(property) {
    if (sortProperty === property) {
      sortDirection *= -1; 
    } else {
      sortDirection = 1; 
    }
    sortProperty = property;
    let arr = get_data();
    arr.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1 * sortDirection;
      } else if (a[property] > b[property]) {
        return 1 * sortDirection;
      }
      return 0;
    });
    load_data();
  }
  
  document.getElementById('sort-product-id').addEventListener('click', function () {
    sortProducts('0'); 
  });
  
  document.getElementById('sort-product-name').addEventListener('click', function () {
    sortProducts('0'); 
  });
  
  document.getElementById('sort-price').addEventListener('click', function () {
    sortProducts('1'); 
  });