<!--
 * @Description: 前端简历模板Vue
 * @Author: Harry
 * @Date: 2021-11-10 18:49:51
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-11-11 10:18:17
 * @LastEditors: Harry
-->
<template>
  <div>
    <!--[if lt IE 9]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please <a
        href="http://browsehappy.com/">upgrade your browser</a> to improve your
        experience.
      </p>
    <![endif]-->
    <div class="theme-left-top">
      <div
        @click="changeSkin(item)"
        class="theme-c"
        v-for="item in themeSeleted"
        :key="item"
        :title="'主题切换' + item"
      >
        {{ item }}
      </div>
    </div>
    <right-top></right-top>
    <main class="page shadow-2">
      <section>
        <!-- 联系方式 -->
        <h1>联系方式</h1>
        <div class="boxes">
          <div class="box bg-theme p-y-0">
            <div class="row g-32">
              <div
                class="col-4 p-y-8"
                :class="index == contactList.length - 1 ? 'b-r-1' : ''"
                v-for="(item, index) in contactList"
                :key="item.name"
              >
                ● {{ item.name + "：" + item.value }}
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 个人信息列表展示开始 -->
      <section>
        <h1>个人信息</h1>
        <div class="boxes">
          <div class="box bg-theme p-y-0">
            <div class="row g-32">
              <div
                class="col-4 p-y-8"
                :class="
                  index == techList.personDetail.length - 1 ? 'b-r-1' : ''
                "
                v-for="(item, index) in techList.personDetail"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div
            class="box bg-theme"
            v-for="item in techList.techList"
            :key="item.name"
          >
            ● {{ item.name }}：
            <a :href="item.link" target="_blank" class="text-gray-dark">{{
              item.value
            }}</a>
          </div>
        </div>
      </section>
      <!-- 技术优势 -->
      <section>
        <h1>技术优势</h1>
        <div class="boxes">
          <div class="box bg-theme" v-for="item in advantageTech" :key="item">
            ● {{ item }}
          </div>
        </div>
      </section>

      <section>
        <h1>开源项目</h1>
        <div class="boxes">
          <div
            class="box bg-theme div_a"
            v-for="item in openSourceList"
            :key="item.name"
          >
            ● {{ item.name }}（{{ item.describe }}）：
            <a :href="item.link" target="_blank" class="text-gray-dark">{{
              item.link
            }}</a>
          </div>
        </div>
      </section>

      <section>
        <h1>技术文章</h1>
        <div class="boxes">
          <div class="box bg-theme">
            ●
            <a
              href="https://www.cnblogs.com/nzbin/p/9038154.html"
              target="_blank"
              class="text-gray-dark"
              >《浅谈 Checkbox Group 的双向数据绑定》</a
            >
          </div>
          <div class="box bg-theme">
            ●
            <a
              href="https://www.cnblogs.com/nzbin/p/11495417.html"
              target="_blank"
              class="text-gray-dark"
              >《代码美化的艺术》</a
            >
          </div>
        </div>
      </section>

      <section>
        <h1>
          工作经历
          <a
            href="https://github.com/geekcompany/ResumeSample/blob/master/web.md"
            target="_blank"
            class="f-w-100 text-gray-dark"
            >ResumeSample</a
          >
        </h1>
        <div class="boxes">
          <div class="box bg-theme">● ABC 公司 （ 2015 年 5 月 ~ 至今 ）</div>
          <div class="box bg-theme">
            <p class="m-t-0">DEF 项目</p>
            <p>
              我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。
            </p>
          </div>
          <div class="box bg-theme">
            <p class="m-t-0">GHI 项目</p>
            <p>
              我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。
            </p>
          </div>
          <div class="box bg-theme">
            <p class="m-t-0">其他项目</p>
            <p>
              （每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）
            </p>
          </div>
        </div>

        <div class="boxes">
          <div class="box bg-theme">
            ● JKL 公司 （ 2013 年 9 月 ~ 2015 年 5 月 ）
          </div>
          <div class="box bg-theme">
            <p class="m-t-0">MNO 项目</p>
            <p>
              我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。
            </p>
          </div>
          <div class="box bg-theme">
            <p class="m-t-0">PQR 项目</p>
            <p>
              我在此项目负责了哪些工作，分别在哪些地方做得出色/和别人不一样/成长快，这个项目中，我最困难的问题是什么，我采取了什么措施，最后结果如何。这个项目中，我最自豪的技术细节是什么，为什么，实施前和实施后的数据对比如何，同事和领导对此的反应如何。
            </p>
          </div>
          <div class="box bg-theme">
            <p class="m-t-0">其他项目</p>
            <p>
              （每个公司写2~3个核心项目就好了，如果你有非常大量的项目，那么按分类进行合并，每一类选一个典型写出来。其他的一笔带过即可。）
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer text-center">
      <p>
        Created with ❤️ by
        <a :href="footerMes.link" target="_blank">{{ footerMes.name }}</a
        >. Made with
        <a :href="footerMes.link" target="_blank">{{ footerMes.name }}</a
        >.
      </p>
    </footer>
  </div>
</template>

<script>
import RightTop from './RightTop.vue'
import CONFIG from '../config/index.js'
export default {
  data () {
    return {
      contactList: CONFIG.contact, // 联系方式
      techList: CONFIG.personMessage, // 个人信息
      advantageTech: CONFIG.advantageTech, // 技术优势
      openSourceList: CONFIG.openSourceList, // 开源文档
      footerMes: CONFIG.footerMes,
      themeSeleted: ['dark', 'light']
    }
  },
  methods: {
    // type为night或者day
    changeSkin (type) {
      // 节流防止疯狂点击
      let change = null
      if (change) {
        clearTimeout(change)
      }
      change = setTimeout(() => {
        document.head
          .querySelector('#skin')
          .setAttribute('href', `./skin/${type}.css`)
      }, 100)
    }
  },
  components: { RightTop }
}
</script>
<style lang="less" scoped>
html,
body {
  background-color: var(--bg-color);
  color: var(--font-color);
}

.page {
  max-width: 800px;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: var(--bg-page);
  font-size: 14px;
}

h1 {
  margin: 20px -10px 20px;
  padding-left: 15px;
  font-size: 18px;
  border-left: 5px solid var(--b-l-color);
}
.bg-theme {
  background-color: var(--bg-conent);
}
.div_a {
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
}
.theme-c {
  width: 80px;
  margin: 2px;
  border: 1px solid var(--btn-border);
  display: flex;
  justify-content: center;
  align-items: center;
}
.theme-left-top {
  position: fixed;
  bottom: 5%;
  right: 1%;
}
</style>
