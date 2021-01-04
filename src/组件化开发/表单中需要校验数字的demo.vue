<template>
  <div class="formBox">
    <div class="menuInfo">
      
      <div class="infoBox">
        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="left"
        >        
        <el-form-item label="姓名" prop="name" :rules="name">
            <el-input
              v-model="numberValidateForm.name"
              autocomplete="off"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone" :rules="phone">
            <el-input
              v-model="numberValidateForm.phone"
              autocomplete="off"
              placeholder="请输入电话号码"
            ></el-input>
          </el-form-item>  
          <el-form-item label="树龄" prop="number" :rules="number">
            <el-input
              type="number"
              v-model.number="numberValidateForm.number"
              autocomplete="off"
              placeholder="请输入树龄"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('numberValidateForm')"
              >提交</el-button
            >
                <el-button @click="resetForm('numberValidateForm')">重置</el-button>

          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
const cryptoJs = new CryptoJs()
export default {
  data () {
    let checkValue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('值不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 1) {
            callback(new Error('值必须大于1'))
          } else {
            callback()
          }
        }
      }, 200)
    }
    return {
      numberValidateForm: {
        name: '', // 姓名
        phone: '', // 电话
        number: null // 数量
      },
      name: { required: true, message: '姓名不能为空' },
      phone: { required: true, message: '联系电话不能为空' },
      number: [{ required: true, validator: checkValue, trigger: ['change', 'blur'] }]
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = this.numberValidateForm
         console.log('验证成功，参数为',params)
        } else {
            console.log('数据验证不成功')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
