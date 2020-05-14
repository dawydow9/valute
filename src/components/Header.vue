<template>
        <div class="card">
            <h5 class="card-header bg-secondary text-white">
                Добро пожаловать в приложение "Курсы валют"
            </h5>

            <!-- Приветствуем пользователя, если он авторизован -->
            <div class="card-body" v-if="$store.state.user">
                <h5 class="card-title">Привет, {{name}}</h5>
                <button type="button" class="btn btn-info py-1" @click="exitStorage">Выход</button>
            </div>

            <!-- Предлагаем авторизоваться, если НЕ авторизован -->
            <div class="card-body" v-else>
                <h5 class="card-title">Пожалуйста введите свое имя:</h5>

                <p><input v-model="name" v-on:keyup.enter="saveStorage"></p>
                <h6 class="card-subtitle mb-2 text-muted">* авторизация будет сохранена</h6>
                <button type="button" class="btn btn-info py-1" @click="saveStorage" v-if="name">Вход</button>
            </div>

        </div>
</template>

<script>
    export default {
        data() {
            return {
                name: null
            }
        },
        methods: {
            // метод для сохранения имени в локальном хранилище
            // сохраняем в store информацию о том, что пользователь авторизован
            saveStorage() {
                if (this.name) {
                    this.$storage.set('name',this.name)
                    this.$store.state.user = true
                }
            },
            // метод для очистки имени из локального хранилища
            // сохраняем в store информацию о том, что пользователь вышел
            exitStorage() {
                this.$storage.remove('name')
                this.name = ""
                this.$store.state.user = false
            }
        },
        mounted() {
            // проверяем, авторизован ли уже пользователь
            if (this.$storage.has('name')) {
                this.$store.state.user = true
                this.name = this.$storage.get('name')
            }
        }
    }
</script>

<style scoped>

</style>