<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}
      <el-button @click="logout">清理用户登录缓存</el-button>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      router.go('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
