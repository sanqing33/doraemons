<template>
  <div class="container">
    <el-container>
      <el-header
        v-if="!Admin"
        style="--el-menu-bg-color: transparent; --el-header-padding: 0"
        height="40px"
      >
        <div style="display: flex; justify-content: space-between">
          <div class="nav" style="flex: 1; height: 40px">
            <el-menu mode="horizontal" style="height: 40px">
              <el-menu-item>
                <router-link style="display: flex" to="/">
                  <img
                    alt="logo"
                    src="@\assets\doraemonicon.png"
                    style="height: 30px; transform: translateY(13px)"
                  />
                  <div
                    class="logo"
                    style="
                      font-size: 20px;
                      font-family: Succulent-body, serif;
                      padding-left: 5px;
                    "
                  >
                    哆啦A梦世界
                  </div>
                </router-link>
              </el-menu-item>
              <el-menu-item>
                <router-link to="/author">
                  <el-icon>
                    <EditPen />
                  </el-icon>
                  作者生平
                </router-link>
              </el-menu-item>
              <el-menu-item>
                <router-link to="/character">
                  <el-icon>
                    <User />
                  </el-icon>
                  动漫人物介绍
                </router-link>
              </el-menu-item>
              <el-menu-item>
                <router-link to="/interaction">
                  <el-icon>
                    <Connection />
                  </el-icon>
                  用户互动
                </router-link>
              </el-menu-item>
              <el-menu-item>
                <router-link to="/media">
                  <el-icon>
                    <VideoPlay />
                  </el-icon>
                  音乐视频
                </router-link>
              </el-menu-item>
              <el-menu-item>
                <router-link to="/news">
                  <el-icon>
                    <Tickets />
                  </el-icon>
                  新闻活动
                </router-link>
              </el-menu-item>
              <el-menu-item>
                <router-link to="/website">
                  <el-icon>
                    <Link />
                  </el-icon>
                  相关网站
                </router-link>
              </el-menu-item>
            </el-menu>
          </div>
          <div class="user">
            <el-menu :ellipsis="false" mode="horizontal" style="height: 40px">
              <el-menu-item>
                <el-dropdown>
                  <span class="el-dropdown-link" style="outline: none">
                    <el-icon><Avatar /></el-icon>
                    {{ username }}
                    <el-icon class="el-icon--right"><arrow-down /></el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <router-link to="/user/login">
                        <el-dropdown-item>登录</el-dropdown-item>
                      </router-link>
                      <router-link to="/user/regist">
                        <el-dropdown-item>注册</el-dropdown-item>
                      </router-link>
                      <router-link to="admin_login">
                        <el-dropdown-item divided>管理员登录</el-dropdown-item>
                      </router-link>
                      <router-link to="">
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                      </router-link>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import {
  ArrowDown,
  Avatar,
  Connection,
  EditPen,
  Link,
  Tickets,
  User,
  VideoPlay,
} from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

const username = "用户中心";

const route = useRoute();
let Admin = ref(false);

watch(route, (to) => {
  Admin.value = to.path.startsWith("/");
});

watch(route, (to) => {
  Admin.value = to.path.startsWith("/admin");
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

li {
  padding: 0 10px;
}

@font-face {
  font-family: "Succulent-body";
  src: url("@/assets/ttf/Succulent body.ttf");
}
</style>
