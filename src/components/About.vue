<template>
    <div class="card">
        <div class="card-body">
            <p>Это приложение для демонстрации работы прогрессивного фреймворка
                <a href="https://ru.vuejs.org/index.html" target="_blank">Vue.js</a>
            </p>
            <p>Для авторизации и сохранения в избранном используется библиотека для работы с
                LocalStorage
                <a href="https://github.com/yarkovaleksei/vue2-storage" target="_blank">Vue2-storage</a>
                и общий стек данных
                <a href="https://vuex.vuejs.org/ru/" target="_blank">Vuex</a>.
            </p>
            <p>Приложение построено по принципу SPA (Single Page Applicalion).
                Переключение м/у компонентами регулируется с помощью
                <a href="https://router.vuejs.org/ru/" target="_blank">Vue-router</a>.
            </p>
            <p>Для получения данных о курсах валют с помощью библиотеки
                <a href="https://github.com/axios/axios" target="_blank">Axios</a>
                 выполняется запрос к
                <a href="https://www.cbr-xml-daily.ru/daily_json.js" target="_blank">общедоступной API</a>
                ЦБ России.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>