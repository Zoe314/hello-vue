class GetServe {
    constructor () {
      let u = navigator.userAgent
      this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
      this.isiOS = u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    }
      isAndroid; // android终端
      isiOS; // ios终端
      registerHandler (name, callback) {
        if (this.isiOS) {
          this.setupWebViewJavascriptBridge((bridge) => {
            bridge.registerHandler(name, callback)
          })
        } else if (this.isAndroid) {
          window[name] = callback
        }
      }
      callHandler (name, parmas, callback) {
        // console.log(`------- 发送 Native -- ${name}`, parmas)
        if (this.isiOS) {
          this.setupWebViewJavascriptBridge((bridge) => {
            bridge.callHandler(name, parmas, callback)
          })
        } else if (this.isAndroid) {
          if (window.android && window.android[name]) {
            if (!Array.isArray(parmas) && typeof parmas === 'object') {
              parmas = JSON.stringify(parmas)
            }
            callback(window.android[name](parmas))
          }
        }
      }
  
      setupWebViewJavascriptBridge (callback) {
        if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge) }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
        window.WVJBCallbacks = [callback]
        var WVJBIframe = document.createElement('iframe')
        WVJBIframe.style.display = 'none'
        WVJBIframe.src = 'https://__bridge_loaded__'
        document.documentElement.appendChild(WVJBIframe)
        setTimeout(() => { document.documentElement.removeChild(WVJBIframe) }, 0)
      }
  
      // 跳转到会议室
      goMeeting (params) {
        try {
          this.callHandler('joinMeeting', params, val => {
            console.log(val)
          })
        } catch (err) {
          console.log(err)
        }
      }
      // 跳转到群聊
      goGroup (params) {
        try {
          this.callHandler('toChat', params, val => {
            console.log(val)
          })
        } catch (err) {
          console.log(err)
        }
      }
  
      // 跳转到原生的选人
      goSelectUser (params ,callback = ()=>{}) {
        try {
          this.callHandler('selectUser', params, val => {
            console.log(val)
            this.registerHandler('selectUserResult',callback);          
          })
        } catch (err) {
          console.log(err)
        }
      }
      
      // attachmentDownload(params){
      //     try{
      //         this.callHandler('attachmentDownload', params)
      //     }catch(err){
  
    //     }
    // }
  }
  export default new GetServe()
  