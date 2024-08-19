//Скрипты для кнопок и меню
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const arrow = document.getElementById('arrow');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            arrow.textContent = '❯';
        } else {
            arrow.textContent = '❮';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar2');
    const toggleBtn = document.getElementById('toggleBtn2');
    const arrow = document.getElementById('arrow2');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            arrow.textContent = '❯';
        } else {
            arrow.textContent = '❮';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const loadingButton = document.getElementById('loadShops');
    const originalText = loadingButton.textContent;
    const loadingSymbol = '⤓';

    loadingButton.addEventListener('mouseenter', function() {
        loadingButton.textContent = loadingSymbol;
    });

    loadingButton.addEventListener('mouseleave', function() {
        loadingButton.textContent = originalText;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadingButton = document.getElementById('loadSupps');
    const originalText = loadingButton.textContent;
    const loadingSymbol = '⤓';

    loadingButton.addEventListener('mouseenter', function() {
        loadingButton.textContent = loadingSymbol;
    });

    loadingButton.addEventListener('mouseleave', function() {
        loadingButton.textContent = originalText;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadingButton = document.getElementById('loadShips');
    const originalText = loadingButton.textContent;
    const loadingSymbol = '⤓';

    loadingButton.addEventListener('mouseenter', function() {
        loadingButton.textContent = loadingSymbol;
    });

    loadingButton.addEventListener('mouseleave', function() {
        loadingButton.textContent = originalText;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadingButton = document.getElementById('loadProds');
    const originalText = loadingButton.textContent;
    const loadingSymbol = '⤓';

    loadingButton.addEventListener('mouseenter', function() {
        loadingButton.textContent = loadingSymbol;
    });

    loadingButton.addEventListener('mouseleave', function() {
        loadingButton.textContent = originalText;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const loadingButton = document.getElementById('loadForm');
    const originalText = loadingButton.textContent;
    const loadingSymbol = '⤓';

    loadingButton.addEventListener('mouseenter', function() {
        loadingButton.textContent = loadingSymbol;
    });

    loadingButton.addEventListener('mouseleave', function() {
        loadingButton.textContent = originalText;
    });
});

//Калькулятор стоимости


function showCalculator() {
    document.getElementById('calculator').style.display = 'block';
}

function calculateCost() {
    const distance = parseFloat(document.getElementById('distance').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const unitCost = parseFloat(document.getElementById('unitCost').value);
    const additionalServicesCheckbox = document.getElementById('additionalServices');
    const additionalServicesCost = 30000; // фиксированная стоимость доп. услуг

    const baseRatePerKm = 10; // рублей за километр
    const ratePerTon = 500; // рублей за тонну
    const ratePerCubicMeter = 100; // рублей за кубический метр
    const taxRate = 0.1; // 10% налог

    const baseCost = distance * baseRatePerKm;
    const weightCost = weight * ratePerTon;
    const volumeCost = volume * ratePerCubicMeter;
    const unitCostTotal = volume * unitCost;
    const additionalServices = additionalServicesCheckbox.checked ? additionalServicesCost : 0;

    const totalCost = baseCost + weightCost + volumeCost + unitCostTotal + additionalServices;
    const totalCostWithTax = totalCost * (1 + taxRate);

    document.getElementById('result').innerText = `Стоимость перевозки: ${totalCostWithTax.toFixed(2)} рублей`;
}


//Скачивание таблиц
//Shop
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loadShops').addEventListener('click', function() {
        var table = document.getElementById('table1');
        var wb = XLSX.utils.table_to_book(table, {sheet:"Sheet JS"});
        var wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'});

        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

        var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Shop.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
    });
});
//Supplier
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loadSupps').addEventListener('click', function() {
        var table = document.getElementById('table2');
        var wb = XLSX.utils.table_to_book(table, {sheet:"Sheet JS"});
        var wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'});

        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

        var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Suppliers.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
    });
});

//Shipment
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loadShips').addEventListener('click', function() {
        var table = document.getElementById('table3');
        var wb = XLSX.utils.table_to_book(table, {sheet:"Sheet JS"});
        var wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'});

        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

        var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Shipment.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
    });
});

//Products
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loadProds').addEventListener('click', function() {
        var table = document.getElementById('table4');
        var wb = XLSX.utils.table_to_book(table, {sheet:"Sheet JS"});
        var wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'});

        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

        var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Products.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
    });
});

//Form
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loadForm').addEventListener('click', function() {
        var table = document.getElementById('table5');
        var wb = XLSX.utils.table_to_book(table, {sheet:"Sheet JS"});
        var wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'});

        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }

        var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Form.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
    });
});


//запросы на сервер, работа с БД

//Shops
document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('ShowShops');
    if (fetchDataBtn) {
        fetchDataBtn.addEventListener('click', () => {
            // Ваш код для обработки события
            const table = document.getElementById('table1');
            const hideButton = document.getElementById('CloseBtn');
            
            table.style.display = 'table'; // Показываем таблицу
            hideButton.style.display = 'inline-block'; // Показываем кнопку скрытия
            const showcalc = document.getElementById('showCalculatorButton');
            showcalc.style.display = 'inline-block';

            fetch('/get-SHOP')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#table1 tbody');
                tableBody.innerHTML = '';
                data.forEach(row => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${row.shop_id}</td>
                        <td>${row.City}</td>
                        <td>${row.Address}</td>
                        <td>${row.ShopName}</td>
                        <td>${row.Contacts}</td>
                        <td>${row.Supp_id}</td>
                        <!-- Добавьте другие ячейки по мере необходимости -->
                    `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Ошибка:', error));
        });
    } else {
        console.error('Элемент с идентификатором fetchDataBtn не найден');
    }
});

//Suppliers
document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('ShowSupps');
    if (fetchDataBtn) {
        fetchDataBtn.addEventListener('click', () => {
            // Ваш код для обработки события
            const table = document.getElementById('table2');
            const hideButton = document.getElementById('CloseBtn');
            table.style.display = 'table'; // Показываем таблицу
            hideButton.style.display = 'inline-block'; // Показываем кнопку скрытия
            const showcalc = document.getElementById('showCalculatorButton');
            showcalc.style.display = 'inline-block';

            fetch('/get-SUPP')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#table2 tbody');
                tableBody.innerHTML = '';
                data.forEach(row => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${row.Supp_id}</td>
                        <td>${row.City}</td>
                        <td>${row.SuppName}</td>
                        <td>${row.Contacts}</td>
                        <td>${row.ship_id}</td>
                        <!-- Добавьте другие ячейки по мере необходимости -->
                    `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Ошибка:', error));
        });
    } else {
        console.error('Элемент с идентификатором fetchDataBtn не найден');
    }
});

//Shipment
document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('ShowShips');
    if (fetchDataBtn) {
        fetchDataBtn.addEventListener('click', () => {
            // Ваш код для обработки события
            const table = document.getElementById('table3');
            const hideButton = document.getElementById('CloseBtn');
            table.style.display = 'table'; // Показываем таблицу
            hideButton.style.display = 'inline-block'; // Показываем кнопку скрытия
            const showcalc = document.getElementById('showCalculatorButton');
            showcalc.style.display = 'inline-block';

            fetch('/get-SHIP')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#table3 tbody');
                tableBody.innerHTML = '';
                data.forEach(row => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${row.ship_id}</td>
                        <td>${row.weight}</td>
                        <td>${row.quantity}</td>
                        <td>${row.date}</td>
                        <td>${row.product_id}</td>

                        <!-- Добавьте другие ячейки по мере необходимости -->
                    `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Ошибка:', error));
        });
    } else {
        console.error('Элемент с идентификатором fetchDataBtn не найден');
    }
});

//Products
document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('ShowProds');
    if (fetchDataBtn) {
        fetchDataBtn.addEventListener('click', () => {
            // Ваш код для обработки события
            const table = document.getElementById('table4');
            const hideButton = document.getElementById('CloseBtn');
            table.style.display = 'table'; // Показываем таблицу
            hideButton.style.display = 'inline-block'; // Показываем кнопку скрытия
            const showcalc = document.getElementById('showCalculatorButton');
            showcalc.style.display = 'inline-block';

            fetch('/get-PROD')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#table4 tbody');
                tableBody.innerHTML = '';
                data.forEach(row => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${row.product_id}</td>
                        <td>${row.unit_price}</td>
                        <td>${row.unit_name}</td>
                       
                        <!-- Добавьте другие ячейки по мере необходимости -->
                    `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Ошибка:', error));
        });
    } else {
        console.error('Элемент с идентификатором fetchDataBtn не найден');
    }
});

//Form
document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('ShowForm');
    if (fetchDataBtn) {
        fetchDataBtn.addEventListener('click', () => {
            // Ваш код для обработки события
            const table = document.getElementById('table5');
            const hideButton = document.getElementById('CloseBtn');
            table.style.display = 'table'; // Показываем таблицу
            hideButton.style.display = 'inline-block'; // Показываем кнопку скрытия
            const showcalc = document.getElementById('showCalculatorButton');
            showcalc.style.display = 'inline-block';

            fetch('/get-FORM')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#table5 tbody');
                tableBody.innerHTML = '';
                data.forEach(row => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${row.shop_id}</td>
                        <td>${row.ShopName}</td>
                        <td>${row.SuppName}</td>
                        <td>${row.weight}</td>
                        <td>${row.quantity}</td>
                        <td>${row.date}</td>
                        <td>${row.unit_name}</td>
                        <td>${row.unit_price}</td>
                        <td>${row.ShopCity}</td>
                        <td>${row.SupplierCity}</td>

                       
                        <!-- Добавьте другие ячейки по мере необходимости -->
                    `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Ошибка:', error));
        });
    } else {
        console.error('Элемент с идентификатором fetchDataBtn не найден');
    }
});


document.getElementById('showCalculatorButton').addEventListener('click', () => {
    const calc = document.getElementById('calculator');
    
    calc.style.display = 'block'; 
    
});
document.getElementById('CloseBtn').addEventListener('click', () => {
    const tables = document.querySelectorAll('[id^="table"]');
    const hideButton = document.getElementById('CloseBtn');
    const showcalc = document.getElementById('showCalculatorButton');
    const calc = document.getElementById('calculator');

    tables.forEach(table => {
        table.style.display = 'none'; // Скрываем каждую таблицу
    });

    hideButton.style.display = 'none'; // Скрываем кнопку скрытия
    showcalc.style.display = 'none'; // Скрываем кнопку скрытия
    calc.style.display = 'none'; // Скрываем кнопку скрытия
});

//Добавление/удаление записей

document.addEventListener('DOMContentLoaded', () => {
    const addRecordButton = document.getElementById('add-record-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const recordFields = document.getElementById('record-fields');
    const closeMenuButton = document.getElementById('close-menu-button');


    closeMenuButton.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
        recordFields.innerHTML = ''; // Очищаем поля при закрытии меню
    });

    addRecordButton.addEventListener('click', () => {
        dropdownMenu.style.display = 'block';
    });

    

    const tables = ['Shop', 'Supplier', 'shipment', 'product'];
    tables.forEach(table => {
        const button = document.getElementById(`${table}-button`);
        button.addEventListener('click', () => {
            // Очищаем предыдущие поля
            recordFields.innerHTML = '';

            if (table === 'Shop') {
                const fields = ['shop_id', 'City', 'Address', 'ShopName', 'Contacts', 'Supp_id'];
                createFields(fields);
            } else if (table === 'Supplier') {
                const fields = ['Supp_id', 'City', 'SuppName', 'Contacts', 'ship_id'];
                createFields(fields);
            } else if (table === 'shipment') {
                const fields = ['ship_id', 'weight','quantity', 'date', 'product_id'];
                createFields(fields);
            } else if (table === 'product') {
                const fields = ['product_id', 'unit_price', 'unit_name'];
                createFields(fields);
            }

            // Добавляем кнопку "Добавить"
            const addButton = document.createElement('button');
            addButton.type = 'button';
            addButton.className = 'btn';
            addButton.textContent = 'Добавить';
            recordFields.appendChild(addButton);

            // Обработчик для кнопки "Добавить"
            addButton.addEventListener('click', () => {
                const formData = new FormData();
                const inputs = recordFields.querySelectorAll('.record-input');
                let allFieldsFilled = true;

                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        allFieldsFilled = false;
                    }
                    formData.append(input.name, input.value);
                });

                if (!allFieldsFilled) {
                    alert('Пожалуйста, заполните все обязательные поля');
                    return;
                }

                console.log('Отправляем данные:', Object.fromEntries(formData));

                fetch('/add-record', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Object.fromEntries(formData))
                })
                .then(response => response.json())
                .then(result => {
                    console.log('Успешно добавлено:', result);
                    // Очищаем поля
                    inputs.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                });
            });
        });
    });
    function createFields(fields) {
        fields.forEach(field => {
            const label = document.createElement('label');
            label.className = 'input-label';
            label.textContent = `${field}:`;
            recordFields.appendChild(label);

            const input = document.createElement('input');
            input.type = 'text';
            input.name = field; // Убираем toLowerCase()
            input.className = 'record-input';
            recordFields.appendChild(input);
            recordFields.appendChild(document.createElement('br'));
        });
    }
    
});


document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('delete-record-button');
  
    deleteButton.addEventListener('click', () => {
      const tableName = prompt('Enter the table name:');
      if (tableName) {
        let idField = 'shop_id';
        if (tableName === 'Supplier') {
          idField = 'Supp_id';
        } else if (tableName === 'shipment'){
            idField = 'ship_id';
        } else if(tableName === 'product'){
            idField = 'product id';
        }
  
        const recordId = prompt(`Enter the ${idField} of the record you want to delete:`);
        if (recordId) {
          fetch(`/api/delete/${tableName}/${idField}/${recordId}`, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              alert('Record deleted successfully');
              // Optionally, remove the row from the table
              const row = document.querySelector(`tr[data-${idField}="${recordId}"]`);
              if (row) {
                row.remove();
              }
            } else {
              alert('Failed to delete record');
            }
          })
          .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while deleting the record');
          });
        }
      }
    });
  });

//Добавление/удаление связей

document.getElementById('add-relations-button').addEventListener('click', () => {
    fetch('/add-relations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});


document.getElementById('remove-relations-button').addEventListener('click', () => {
    fetch('/remove-relations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});

