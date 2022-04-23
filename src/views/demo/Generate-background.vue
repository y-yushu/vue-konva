<template>
  <div class="app-container">
    <div><h1>生成背景图片</h1></div>
    <div style="margin-bottom: 10px">
      <el-button type="primary" @click="opendialog1()">上传背景</el-button>
      <el-button type="primary" @click="opendialog2()">增加文字</el-button>
      <el-button type="primary" @click="getPicture()">下载图片</el-button>
    </div>
    <div id="container" ref="container" />
    <el-dialog title="选择背景" :visible.sync="visible1" width="30%">
      <input ref="file" type="file" accept="image/png, image/jpeg" @change="changeFile" />
    </el-dialog>
    <el-dialog title="文字信息" :visible.sync="visible2" width="30%">
      <el-input v-model="textProp.fontSize" placeholder="输入字号" style="margin-bottom: 10px">
        <template slot="prepend">输入字号</template>
      </el-input>
      <el-input v-model="textProp.fill" placeholder="输入色号" style="margin-bottom: 10px">
        <template slot="prepend">输入色号</template>
      </el-input>
      <el-input v-model="textProp.text" placeholder="输入文本" style="margin-bottom: 10px">
        <template slot="prepend">输入文本</template>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addTest()">添加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Konva from 'konva'

export default {
  name: 'GenerateBackground',
  data() {
    return {
      pageStage: null, // 总容器
      layer: null, // 第一层
      tran: null, // 选择器
      texts: [], // 所有文字
      visible1: false, // 背景弹窗
      visible2: false, // 文字弹窗
      textProp: {
        x: 0,
        y: 0,
        text: 'Simple Text',
        fontSize: 45,
        fontFamily: 'Calibri',
        fill: '#ffffff',
        draggable: true
      }
    }
  },
  methods: {
    // 按钮 上传背景
    opendialog1() {
      this.visible1 = true
    },
    // 按钮 增加文字
    opendialog2() {
      if (!this.layer) return this.$message.error('请先上传背景')
      this.visible2 = true
    },
    // 按钮 下载图片
    getPicture() {
      if (!this.layer) return this.$message.error('请先上传背景')
      // 取消所有选择框
      this.tran.nodes([])
      this.layer.draw()
      // 下载图片
      const link = document.createElement('a')
      link.href = this.pageStage.toDataURL()
      link.download = 'text.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    // 选择图片上传
    changeFile() {
      const file = this.$refs.file.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onloadend = e => {
        const img = new Image()
        img.src = e.target.result
        img.onload = () => {
          this.visible1 = false // 关闭弹窗
          // 创建容器
          this.pageStage = new Konva.Stage({
            container: 'container',
            width: img.width,
            height: img.height
          })
          const layer = new Konva.Layer()
          this.pageStage.add(layer)
          const lion = new Konva.Image({
            image: img,
            x: 0,
            y: 0,
            width: img.width,
            height: img.height,
            draggable: false
          })
          lion.cache()
          lion.filters([Konva.Filters.Brighten])
          layer.add(lion)
          layer.draw()
          this.layer = layer
          // 增加鼠标点击事件
          this.clickTap()
        }
      }
      reader.readAsDataURL(file)
    },
    // 添加文字
    addTest() {
      this.visible2 = false
      const graph = new Konva.Text(this.textProp)
      if (this.tran) {
        this.tran.nodes([graph])
      } else {
        const tran = new Konva.Transformer({
          nodes: [graph],
          centeredScaling: false
        })
        this.layer.add(tran)
        this.tran = tran
      }
      this.texts.push(graph)
      this.layer.add(graph)
      this.layer.batchDraw()
    },
    // 监听--点击事件
    clickTap() {
      this.pageStage.on('click tap', e => {
        if (this.texts) {
          const text = this.texts.find(f => e.target === f)
          if (text) {
            this.tran.nodes([text])
          } else {
            this.tran.nodes([])
          }
          this.layer.draw()
        }
      })
    }
  }
}
</script>
