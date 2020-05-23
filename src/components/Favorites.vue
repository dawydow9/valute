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

                   <element-favorite
                           v-for="(item,index) in valutes"
                           :CharCode="item.CharCode"
                           :Name="item.Name"
                           :Favorites="item.Favorites"
                           :item="item"
                           :index="index"
                           :valutes="valutes"
                           :key="item.id">
                   </element-favorite>

                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
    import elementFavorite from "./elementFavorite"
    export default {
        name: "Favorites",
        components: {
            elementFavorite
        },
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
        }
    }
</script>

<style scoped>

</style>