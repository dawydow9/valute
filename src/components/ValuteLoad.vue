<template>
    <div class="card">
        <div class="card-body">

            <!-- Пока не получен ответ от API, крутим спинер-->
            <div class="d-flex justify-content-center" v-if="loader">
                <div class="spinner-border text-info text-center"></div>
            </div>

            <!-- Таблица результатов -->
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

                            <div v-if="item.Favorites">
                                В избранном
                            </div>
                            <button v-else
                                type="button"
                                class="btn btn-success p-1"
                                @click="setValute(item)"> Добавить
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
        data() {
            return {
                loader: true,
                valutes: []
            }
        },
        mounted() {
            axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(response => {
                let resultAPI = response.data.Valute;
                let arrayAPI = Object.values(resultAPI);
                let lengthArrayAPI = arrayAPI.length;

                //синхронизируем полученные из API валюты с данными из Local Storage
                for (let i = 0; i < lengthArrayAPI; i++) {
                    let obj = {
                        CharCode: arrayAPI[i].CharCode,
                        Name: arrayAPI[i].Name,
                        Value: arrayAPI[i].Value,
                        Favorites: false
                    }
                    let hasFavorites = this.$storage.has(obj.CharCode);

                    if (hasFavorites) {
                        obj.Favorites = true;
                    }

                    this.valutes.push(obj);
                }

                // после получения ответа API необходимо выключить лоадер
                this.loader = false;
            })
        },
        methods: {
            setValute(valut) {
                let CharCode = valut.CharCode;
                let lengthValutes = this.valutes.length;

                this.$storage.set(CharCode, valut);

                for (let i = 0; i < lengthValutes; i++) {
                    if (CharCode == this.valutes[i].CharCode) {
                        this.valutes[i].Favorites = true;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>