<template>
    <tr>
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
</template>

<script>
    export default {
        name: "elementValute",
        props: ['item','valutes'],
        methods: {
            setValute(valut) {
                let CharCode = valut.CharCode;
                let lengthValutes = this.valutes.length;

                this.$storage.set(CharCode, valut);

                for (let i = 0; i < lengthValutes; i++) {
                    if (CharCode === this.valutes[i].CharCode) {
                        this.valutes[i].Favorites = true;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>