<template>
  <div class="movement-list">
    <el-table
        :data="movements"
        stripe
        style="width: 100%">
      <el-table-column
          prop="concept"
          label="Concepto"
          width="180">
      </el-table-column>
      <el-table-column
          prop="amount"
          label="Cantidad"
          width="180">
      </el-table-column>
      <el-table-column
          prop="account.name"
          label="Cuenta">
      </el-table-column>
      <el-table-column
          prop="category.name"
          label="Categoría">
      </el-table-column>
      <el-table-column
          fixed="right"
          label=""
          width="120">
        <template v-slot:default="scope">
          <el-button @click="deleteMovement(scope.$index)" type="text" size="small">Eliminar</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {Movement} from "@/models/movement";

@Options({
  components: {
  },
  props: {
    movements: {
      type: Array,
      default: []
    }
  }
})

export default class MovementList extends Vue {
  movements!: Movement[]

  deleteMovement(index: number): void {
    const movement = this.movements[index]
    this.$emit('deleteMovement', movement.id)
  }
}
</script>

<style scoped lang="scss">

</style>
