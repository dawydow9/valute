<template>
    <div class="card">
        <div class="card-body">

            <!-- Пока не получен ответ от API, крутим спинер-->
            <div class="d-flex justify-content-center" v-if="loader">
                <div class="spinner-border text-info text-center"></div>
            </div>

            <!-- Отрисовываем таблицу результатов-->
            <table class="table table-borderless" v-else>
                <thead>
                    <tr>
                        <th scope="col" class="table-light">Код валюты</th>
                        <th scope="col" class="table-light">Описание</th>
                        <th scope="col" class="table-light">Стоимость (руб)</th>
                        <th scope="col" class="table-light">В избранное</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in valutes" :key="item.id">
                        <th scope="row">{{ item.CharCode }}</th>
                        <td>{{ item.Name }}</td>
                        <td>{{ item.Value }}</td>
                        <td>
                            <!-- Если элемент есть в избранных валютах, выводим подсказку вместо кнопки-->
                            <div v-if="item.Favorites">
                                В избранном
                            </div>
                            <button v-else
                                type="button"
                                class="btn btn-success p-1"
                                @click="addValute(item)"> Добавить
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ValuteLoad",
        data(){
            return{
                loader: true,
                valutes: []
            }
        },
        mounted() {
            // загружаем данные по валютам из API
            axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
                    .then(response => {
                        var resultAPI = Object.values(response.data.Valute)
                        this.valutes = []
                        for (let z = 0; z < resultAPI.length; z++) {
                            var obj = {
                                CharCode: resultAPI[z].CharCode,
                                Name: resultAPI[z].Name,
                                Value: resultAPI[z].Value,
                                Favorites: false
                            }
                            // после преобразования сохраняем в локальный массив valutes
                            this.valutes.push(obj)
                        }

                        // выключаем лоадер когда ответ от API получен
                        this.loader = false

                        // проверяем наличие полученных валют в избранном
                        for (let y = 0; y < this.valutes.length; y++){
                            const hash = this.valutes[y].CharCode
                            const FavoritesLS = this.$storage.has(hash)
                            if (FavoritesLS) {
                                // если валюта есть в избранном меняем у нее значение объекта
                                this.valutes[y].Favorites = true
                            }
                        }
                    })

        },
        methods: {
            // метод для добавления новой валюты в избранное
            addValute(elem) {
                this.$storage.set(elem.CharCode, elem)
                for (let x = 0; x < this.valutes.length; x++) {
                    if (elem.CharCode == this.valutes[x].CharCode) {
                        this.valutes[x].Favorites = true
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>