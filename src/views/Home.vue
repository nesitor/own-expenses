<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <NewMovement @newMovement="addMovement"/>

    <MovementList @deleteMovement="deleteMovement" :movements="expenses"/>
    <MovementList @deleteMovement="deleteMovement" :movements="incomes"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {computed, reactive} from 'vue'
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
  Upload
} from '@element-plus/icons-vue'
import NewMovement from '@/components/NewMovement.vue';
import MovementList from "@/components/MovementList.vue";
import {defaultCategories, Movement} from "@/models/movement";

@Options({
  components: {
    MovementList,
    NewMovement,
    Search,
    Edit,
    Check,
    Message,
    Star,
    Delete,
    Upload
  }
})

export default class Home extends Vue {
  movements: Array<Movement> = reactive([])

  expenses = computed<Movement[]>(() =>{
    const expense = defaultCategories[0]
    const exps = this.movements.filter((movement: Movement) => movement.category === expense)
    return exps || []
  })

  incomes = computed<Movement[]>(() =>{
    const income = defaultCategories[1]
    const incs = this.movements.filter((movement: Movement) => movement.category === income)
    return incs || []
  })

  addMovement(expense: Movement): void {
    this.movements.push(expense)
  }

  deleteMovement(id: string): void {
    const movementI = this.movements.findIndex(movement => movement.id === id)
    this.movements.splice(movementI, 1)
  }
}
</script>
