<template>
        <div class="card">

            <h5 class="card-header bg-secondary text-white">
                Добро пожаловать в приложение "Курсы валют"
            </h5>

            <!-- Приветствуем пользователя, если он авторизован -->
            <div class="card-body" v-if="$store.state.user">
                <h5 class="card-title">Привет, {{name}}</h5>
                <button type="button" class="btn btn-info py-1" @click="exitSize">Выход</button>
            </div>

            <!-- Предлагаем авторизоваться, если НЕ авторизован -->
            <div class="card-body" v-else>
                <h5 class="card-title">Пожалуйста введите свое имя:</h5>
                <p><input v-model="name" v-on:keyup.enter="authorizationSize"></p>
                <h6 class="card-subtitle mb-2 text-muted">* авторизация будет сохранена</h6>
                <button type="button" class="btn btn-info py-1" @click="authorizationSize" v-if="name">Вход</button>
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

            authorizationSize() {
                let i = this.name;

                if (i) {
                    this.$storage.set('name',i);
                    this.$store.commit('editAutorization',true);
                }
            },

            exitSize() {
                this.$storage.remove('name');
                this.name = null;
                this.$store.commit('editAutorization',false);
            }

        },
        mounted() {
            let hasName = this.$storage.has('name');

            if (hasName) {
                this.$store.commit('editAutorization',true);
                this.name = this.$storage.get('name');
            }

        }
    }
</script>

<style scoped>

</style>