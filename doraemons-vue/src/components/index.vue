<template>
  <div
    :class="[{ transition: transition }]"
    style="position: relative; transition: transform 2s ease"
  >
    <!-- 首页第一页 -->
    <div style="height: 100vh">
      <h1 class="title">欢迎探索哆啦A梦的奇妙世界！</h1>

      <div
        style="width: 100%"
        :style="{
          transform: 'translateY(' + windowHeight * 0.01 * -0.5 + '%)',
        }"
      >
        <el-carousel
          :interval="4000"
          :pause-on-hover="false"
          :height="windowHeight * 0.6 + 'px'"
          style="width: 100%"
          trigger="click"
          type="card"
        >
          <el-carousel-item v-for="item in carouselImgList" :key="item.id">
            <img
              alt=""
              :src="item.src"
              class="beCenter"
              style="height: 100%; width: 100%; object-fit: scale-down"
            />
          </el-carousel-item>
        </el-carousel>
      </div>

      <el-text
        class="mx-1"
        type="primary"
        size="large"
        v-if="!transition"
        @click="clickTransition"
        style="position: fixed; bottom: 5px"
      >
        滚动进入下一页
        <el-icon>
          <CaretBottom />
        </el-icon>
      </el-text>
    </div>

    <!-- 首页第二页 -->
    <div>
      <el-text
        class="mx-1"
        type="primary"
        size="large"
        v-if="transition"
        @click="clickTransition"
        style="position: relative; display: inline-block"
      >
        滚动返回上一页
        <el-icon>
          <CaretTop />
        </el-icon>
      </el-text>

      <div class="parent">
        <div class="div1">
          <img
            src="@/assets/6.jpg"
            alt=""
            class="beCenter"
            style="height: 100%; border-radius: 15px"
          />
        </div>
        <div class="div2">
          <h1 style="font-size: 1.7em; text-align: center; margin: 2vh 0 0 0">
            这里是一个专门为哆啦A梦粉丝打造的网站
          </h1>
          <div>
            <img src="@/assets/skip/1.jpg" alt="" />
            <span>
              无论你是对这位蓝色小猫机器人的忠实粉丝<br />还是刚刚开始接触哆啦A梦的世界，我们都竭诚欢迎你的到来
            </span>
          </div>
          <div>
            <img src="@/assets/skip/2.jpg" alt="" />
            <span>
              在这里，你可以深入了解哆啦A梦的作者藤子·F·不二雄先生的生平故事<br />探索哆啦A梦和其他动漫人物的丰富背景和故事
            </span>
          </div>
          <div>
            <img src="@/assets/skip/3.jpg" alt="" />
            <span>我们的网站提供了丰富的内容供你探索</span>
          </div>
        </div>
        <div class="div3">
          <div style="display: block; height: 80%" class="beCenter">
            <div>
              <img src="@/assets/skip/4.jpg" alt="" />
              <span>
                从经典的音乐视频，到最新的新闻活动，再到用户之间的互动讨论<br />我们力求让每位访问者都能在这里找到自己感兴趣的内容
              </span>
            </div>
            <div>
              <img src="@/assets/skip/5.jpg" alt="" />
              <span>
                我们邀请你加入我们，一起分享和发现关于哆啦A梦的一切<br />无论是回忆童年的美好时光，还是探索哆啦A梦带来的无限想象，这里都是你的乐园
              </span>
            </div>
            <div>
              <img src="@/assets/skip/6.jpg" alt="" />
              <span>让我们一起踏上这场奇妙的旅程吧！</span>
            </div>
          </div>
        </div>
        <div class="div4">
          <img
            src="@/assets/12.jpg"
            alt=""
            class="beCenter"
            style="height: 100%; border-radius: 15px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { CaretBottom, CaretTop } from "@element-plus/icons-vue";

const carouselImgModules = import.meta.glob("@/assets/carousel/*.jpg", {
  eager: true,
});

const carouselImgList = Object.entries(carouselImgModules).map(
  ([path, resolve], index) => ({
    id: index,
    src: resolve.default,
  })
);

const windowHeight = ref(window.innerHeight);
const windowWidth = ref(window.innerWidth);

function updateWindowSize() {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
}

const transition = ref(false);

//需要滚动的次数
const scrollThreshold = 10;
//计数器
let scrollCount = 0;

const wheelTransition = (event) => {
  scrollCount++;
  if (scrollCount >= scrollThreshold) {
    // deltaY > 0 表示向下滚动，deltaY < 0 表示向上滚动
    if (event.deltaY > 0) {
      transition.value = true;
    } else if (event.deltaY < 0) {
      transition.value = false;
    }
    scrollCount = 0;
  }
};

const clickTransition = () => {
  transition.value = !transition.value;
};

onMounted(() => {
  //监听窗口大小
  window.addEventListener("resize", updateWindowSize);
  //监听鼠标滚轮
  window.addEventListener("wheel", wheelTransition);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
  window.removeEventListener("wheel", wheelTransition);
});
</script>

<style scoped lang="scss">
.title {
  font-size: 8vh;
  text-align: center;
  font-family: BiscuitBody, serif;
  background-image: linear-gradient(
    -225deg,
    #22e1ff 0%,
    #1d8fe1 48%,
    #625eb1 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

:deep(.el-carousel__mask) {
  background-color: transparent;
}

.beCenter {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@font-face {
  font-family: "BiscuitBody";
  src: url("@/assets/ttf/Biscuit body.ttf");
}

.transition {
  transform: translateY(-100vh);
}

.mx-1 {
  left: 50%;
  cursor: pointer;
  animation: scrollToJump 1.2s infinite ease-in-out;
  opacity: 0.75;
}

@keyframes scrollToJump {
  0% {
    transform: translate(-50%, 0);
  }

  25% {
    transform: translate(-50%, 1.5px);
  }

  50% {
    transform: translate(-50%, 0px);
  }

  75% {
    transform: translate(-50%, -1.5px);
  }

  100% {
    transform: translate(-50%, 0px);
  }
}

.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 90vh;
  font-family: inherit, Arial;

  .div1 {
    grid-area: 1 / 1 / 3 / 3;
  }
  .div2 {
    grid-area: 1 / 3 / 3 / 6;
  }
  .div3 {
    grid-area: 3 / 1 / 5 / 4;
  }
  .div4 {
    grid-area: 3 / 4 / 5 / 6;
  }

  div div {
    display: flex;
    height: 70px;
    align-items: center;
    margin: 1.5vw;

    img {
      height: 100%;
      border-radius: 15px;
    }

    span {
      font-size: 2.2vh;
      padding-left: 1.5vh;
    }
  }
}
</style>
