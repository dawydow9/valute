<template>
    <div class="card">
        <div class="card-body">

            <!-- Если избранных валют нет, выводим подсказку -->
            <div v-if="valutes.length == 0">
                У вас нет избранных валют. Добавьте их на вкладке <strong>Загрузка валют</strong>
            </div>

            <!-- Отрисовываем таблицу избранных валют из массива valutes -->
            <table class="table table-borderless" v-else>
                <thead>
                    <tr>
                        <th scope="col" class="table-light">Код валюты</th>
                        <th scope="col" class="table-light">Описание</th>
                        <th scope="col" class="table-light">Стоимость (руб)</th>
                        <th scope="col" class="table-light">Удалить</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="(item,index) in valutes" :key="item.id">
                        <th scope="row">{{ item.CharCode }}</th>
                        <td>{{ item.Name }}</td>
                        <td>{{ item.Value }}</td>
                        <td>
                            <button
                                    type="button"
                                    class="btn btn-success p-1"
                                    @click="removeValute(item.CharCode,index)">Удалить
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Favorites",
        data(){
            return{
                valutes: []
            }
        },
        mounted() {
            let keys = this.$storage.keys();

            for (let i = 0; i < keys.length; i++) {
                let valueStorage = this.$storage.get(keys[i]);

                // у объекта валюты в Local Storage также должен быть обязательно ключ CharCode
                if (valueStorage && valueStorage.CharCode) {
                    this.valutes.push(valueStorage)
                }
            }
        },
        methods: {
            removeValute(x,ind) {
                this.$storage.remove(x);
                this.valutes.splice(ind, 1);
            }
        }
    }
</script>

<style scoped>

</style>