# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/dKU7Sa68xXVYLFkxPxXRsLEB2DPeEt

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/Nm8pnxKhVVz3CDvC8AvV26jTugMU0C

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/wIwpP1OhejDgCOl6KcJd2dPqmRdM6X

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/v9vQcNOo8iV9aWERwtqJHcxlZ8E8C5
