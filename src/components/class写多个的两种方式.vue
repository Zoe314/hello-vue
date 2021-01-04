
<template>
  <div class="certificationContainer">
    <el-row :gutter="20" style="margin-top: 28px">
      <el-col :span="10" class="contentBox">
        <div class="bg-purple">
          <span>企业认证</span>
          <Certification />
        </div>
      </el-col>
      <el-col :span="14" class="contentBox">
        <div class="bg-purple">
          <span class="center">消息中心</span>
          <span
            @click="changeReadStatus(0)"
            class="btn"
            :class="{'isActive':readed === 0}"
            >未读
            <span
              class="btn"
              :class="{'isActive':readed === 0}"
              v-show="showNumber"
              >({{ noReadNumber }}) <em id="dot"></em
            ></span>
          </span>
          <!--
            也可以这么写样式
             <span
            @click="changeReadStatus(0)"
            :class="`btn ${readed === 0 && 'isActive'}`"
            >未读
            <span
              :class="`btn ${readed === 0 && 'isActive'}`"
              v-show="showNumber"
              >({{ noReadNumber }}) <em id="dot"></em
            ></span>
          </span> 
          <span
            @click="changeReadStatus(1)"
            :class="`alreadbtn btn ${readed === 1 && 'isActive'}`"
            >已读
            <span
              :class="`btn ${readed === 1 && 'isActive'}`"
              v-show="showReadedNumber"
            >
              ({{ readedNumber }})
            </span>
          </span>-->
          <span
            @click="changeReadStatus(1)"
            class="alreadbtn btn"
            :class="{'isActive':readed === 1}"
            >已读
            <span
              class="btn"
              :class="{'isActive':readed === 1}"
              v-show="showReadedNumber"
            >
              ({{ readedNumber }})
            </span>
          </span>
          <div id="msgCenterBox">
            <MessageCenter
              :readedTrue="readed"
              v-on:number="getNumber"
              v-on:readedNum="getReadedNumber"
            />
          </div>
        </div>
        <div class="bg-purple">
          <span>联想智慧办公平台</span>
          <SearchLenovoOffice />
        </div>
        <div class="bg-purple">
          <span>快捷入口</span>
          <FastEntry />
        </div>
      </el-col>
    </el-row>
    <BaseDrawer v-if="show" :show.sync="show" :title="title">
      <Detail />
    </BaseDrawer>
  </div>
</template>
<script>
import Certification from './index/certification'
import FastEntry from './index/fast_entry' // 快速入口
import MessageCenter from './index/message_center' // 消息
import SearchLenovoOffice from './index/search_lenovo_office' // 搜索联想智慧办公
import Detail from './detail'
import BaseDrawer from '../../components/BaseDrawer'
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      detailShow: (state) => state.$HouCertificationDetail.detailShow,
      title: (state) => state.$HouCertificationDetail.title
    }),
    show: {
      get () {
        return this.detailShow
      },
      set (tag) {
        this.detailTag(tag)
      }
    }
  },
  data () {
    return {
      readed: 0,
      isActive: false,
      noReadNumber: '',
      readedNumber: '', // 已读的数量
      showNumber: false,
      showReadedNumber: false
    }
  },
  methods: {
    ...mapMutations({
      detailTag: '$HouCertificationDetail/detailTag'
    }),
    changeReadStatus (status) {
      this.readed = status
    },
    // 监听子组件传的的number事件，显示未读消息数量
    getNumber (val) {
      if (val > 0) {
        this.showNumber = true
        this.noReadNumber = val
      } else {
        this.showNumber = false
      }
    },
    // 已读消息
    getReadedNumber (val) {
      if (val > 0) {
        this.readedNumber = val
        this.showReadedNumber = true
      } else {
        this.showReadedNumber = false
      }
    }
  },
  components: {
    Certification,
    FastEntry,
    MessageCenter,
    SearchLenovoOffice,
    BaseDrawer,
    Detail
  }
}
</script>>

<style lang="scss" scoped>
@import "./index.scss";
.noRead {
  margin: 0 15px 0 42px;
}
</style>
