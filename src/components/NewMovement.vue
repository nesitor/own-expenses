<template>
  <div class="new-movement">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>New Movement</span>
        </div>
      </template>
      <el-row justify="start">
        <el-col :span="12">
          <span class="ml-3 w-35 text-gray-600 inline-flex items-center" >
            Account
          </span>
          <el-select v-model="account" placeholder="Select account" size="large">
            <el-option
              v-for="item in accounts"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <span class="ml-3 w-35 text-gray-600 inline-flex items-center" >
            Category
          </span>
          <el-select v-model="category" placeholder="Select category" size="large">
            <el-option
                v-for="item in categories"
                :key="item.id"
                :label="item.name"
                :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input v-model="concept" placeholder="Concept" />
        </el-col>
        <el-col :span="12">
          <el-input-number v-model="amount" placeholder="Amount" />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4" :offset="20">
          <el-button type="success" @click="saveMovement">
            <el-icon class="el-icon--left"><Check /></el-icon> Save
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { v4 as uuid } from 'uuid';
import { Check } from "@element-plus/icons-vue";
import {defaultAccounts, defaultCategories} from "@/models/movement";

@Options({
  components: {
    Check
  },
  props: {
  }
})

export default class NewMovement extends Vue {
  categories = defaultCategories
  accounts = defaultAccounts

  category = 0
  account = 0
  concept = ''
  amount = 0

  saveMovement(): void {
    const data = {
      id: uuid(),
      account: this.accounts.find(item => item.id === this.account),
      category: this.categories.find(item => item.id === this.category),
      concept: this.concept,
      amount: this.amount
    }

    this.$emit('newMovement', data)
  }
}
</script>

<style scoped lang="scss">

</style>
