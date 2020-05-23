<template>
    <tr>
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
</template>

<script>
    export default {
        name: "elementFavorite",
        props: ['item','valutes','index'],
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