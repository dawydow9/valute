<template>
    <div id="app" class="container my-2">
      <!-- Отображаем компонент заголовка-->
        <Header></Header>

        <div v-if="$store.state.user">
            <!-- Отображаем меню в виде route-ссылок-->
            <ul class="nav my-2 justify-content-center">
                <router-link tag="li" class="nav-item" active-class="active" to="/">
                    <button type="button" class="btn btn-info m-1 py-1">Избранное</button>
                </router-link>
                <router-link tag="li" class="nav-item" active-class="active" to="/load">
                    <button type="button" class="btn btn-info m-1 py-1">Загрузка валют</button>
                </router-link>
                <router-link tag="li" class="nav-item" active-class="active" to="/about">
                    <button type="button" class="btn btn-info m-1 py-1">О приложении</button>
                </router-link>
            </ul>
            <!-- Подгружаем выбанные из меню компоненты -->
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  data() {
    return{

    }
  },
  components: {
    Header
  }
}
</script>

<style>

</style>
