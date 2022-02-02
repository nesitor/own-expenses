<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <NewMovement />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
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

@Options({
  components: {
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

export default class Home extends Vue {}
</script>
