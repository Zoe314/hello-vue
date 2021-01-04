<template>
  <div class="detailsBox">
     <div id="test">
      <table border="1" align="center" cellspacing="0" cellpadding="10">
          <caption>我是表头</caption>
        <thead>
          <th>我是头</th>
        </thead>
        <tbody>
          <tr>
            <th colspan="2">标题</th>
          </tr>
          <tr>
            <td>内容可以</td>
            <td>neirong</td>
          </tr>
          <tr>
            <th colspan="2">标题2</th>
          </tr>
          <tr>
            <td>内容2</td>
            <td>neirong2</td>
          </tr>
        </tbody>
        <tfoot>
          <td>我是尾巴</td>
        </tfoot>
      </table>
    </div>
    <table
      border="1"
      cellspacing="0"
      cellpadding="0"
      class="tableizer-table content"
      v-show="rentInfomation.id === 1"
    >
      <tbody>
        <tr class="tableizer-firstrow">
          <th colspan="2">主体</th>
        </tr>
        <tr>
          <td>系列</td>
          <td>T 系列</td>
        </tr>
        <tr>
          <td>颜色</td>
          <td>黑色</td>
        </tr>
        <tr>
          <td>平台</td>
          <td>Intel</td>
        </tr>
        <tr>
          <th colspan="2">操作系统</th>
        </tr>
        <tr>
          <td>操作系统</td>
          <td>Windows 10</td>
        </tr>
        <tr>
          <th colspan="2">处理器</th>
        </tr>
        <tr>
          <td>CPU类型</td>
          <td>酷睿双核</td>
        </tr>
        <tr>
          <td>CPU型号</td>
          <td>i5-6200U</td>
        </tr>
        <tr>
          <td>二级缓存</td>
          <td>3MB</td>
        </tr>
        <tr>
          <td>核心</td>
          <td>双核</td>
        </tr>
        <tr>
          <th colspan="2">内存</th>
        </tr>
        <tr>
          <td>内存容量</td>
          <td>8GB</td>
        </tr>
        <tr>
          <td>内存类型</td>
          <td>DDR4 2133</td>
        </tr>
        <tr>
          <td>插槽数量</td>
          <td>2 x SO-DIMM</td>
        </tr>
        <tr>
          <th colspan="2">硬盘</th>
        </tr>
        <tr>
          <td>硬盘容量</td>
          <td>256GB SSD</td>
        </tr>
        <tr>
          <th colspan="2">显卡</th>
        </tr>
        <tr>
          <td>显卡型号</td>
          <td>NVIDIA GeForce 940MX</td>
        </tr>
        <tr>
          <td>显存容量</td>
          <td>2G独显</td>
        </tr>
        <tr>
          <th colspan="2">光驱</th>
        </tr>
        <tr>
          <td>光驱类型</td>
          <td>无光驱</td>
        </tr>
        <tr>
          <th colspan="2">显示器</th>
        </tr>
        <tr>
          <td>屏幕尺寸</td>
          <td>14英寸</td>
        </tr>
        <tr>
          <td>屏幕规格</td>
          <td>14.0英寸</td>
        </tr>
        <tr>
          <td>显示比例</td>
          <td>宽屏16：9</td>
        </tr>
        <tr>
          <td>屏幕类型</td>
          <td>LED背光</td>
        </tr>
        <tr>
          <th colspan="2">通信</th>
        </tr>
        <tr>
          <td>内置蓝牙</td>
          <td>有</td>
        </tr>
        <tr>
          <td>局域网</td>
          <td>10/100/1000Mbps</td>
        </tr>
        <tr>
          <td>无线局域网</td>
          <td>有</td>
        </tr>
        <tr>
          <td>内置3G</td>
          <td>无</td>
        </tr>
        <tr>
          <td>内置3G模块</td>
          <td>有</td>
        </tr>
        <tr>
          <th colspan="2">端口</th>
        </tr>
        <tr>
          <td>音频端口</td>
          <td>耳机、麦克风二合一接口</td>
        </tr>
        <tr>
          <td>显示端口</td>
          <td>HDMI接口</td>
        </tr>
        <tr>
          <td>RJ45</td>
          <td>1个</td>
        </tr>
        <tr>
          <th colspan="2">音效系统</th>
        </tr>
        <tr>
          <td>扬声器</td>
          <td>内置扬声器</td>
        </tr>
        <tr>
          <td>杜比音效</td>
          <td>支持</td>
        </tr>
        <tr>
          <td>内置麦克风</td>
          <td>有</td>
        </tr>
        <tr>
          <th colspan="2">输入设备</th>
        </tr>
        <tr>
          <td>键盘</td>
          <td>全尺寸键盘</td>
        </tr>
        <tr>
          <td>触摸板</td>
          <td>多点触控</td>
        </tr>
        <tr>
          <td>指点杆</td>
          <td>有</td>
        </tr>
        <tr>
          <th colspan="2">其它设备</th>
        </tr>
        <tr>
          <td>网络摄像头</td>
          <td>有</td>
        </tr>
        <tr>
          <td>摄像头像素</td>
          <td>720p</td>
        </tr>
        <tr>
          <td>指纹识别</td>
          <td>有</td>
        </tr>
        <tr>
          <td>读卡器</td>
          <td>有</td>
        </tr>
        <tr>
          <th colspan="2">电源</th>
        </tr>
        <tr>
          <td>续航时间</td>
          <td>2-5小时</td>
        </tr>
        <tr>
          <td>电源适配器</td>
          <td>100-240V自适应交流电源适配器</td>
        </tr>
        <tr>
          <th colspan="2">机器规格</th>
        </tr>
        <tr>
          <td>净重</td>
          <td>重约1.78kg</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

  

<script>
const test = {
  template: "#test",
};
export default {
  props: {
    rentInfomation: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.content {
  width: 770px;
  height: auto;
  overflow: hidden;
  border: 1px solid red;
}
table.tableizer-table {
  font-size: 12px;
  border: 1px solid #ccc;
  font-family: PingFangSC;
}
.tableizer-table td {
  padding: 4px;
  margin: 3px;
  color: #000000;
  // border: 1px solid #ccc;
}
.tableizer-table th {
  color: #000000;
  font-weight: bold;
}
// table {
//   width: 770px;
//   line-height: 30px;
//   color: #000;
// }
// tr,
// td {
//   color: #000;
//   // border: 1px solid red;
// }
</style>
