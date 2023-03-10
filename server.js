// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
app.get("/", function(request, response){

    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
console.log('Server is running on port 80');
app.listen(80);