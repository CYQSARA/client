//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    globalData: {
        pageNum: 1,
        skipNum: 0,

    },
    uploadFile:function (url, filePath, name, formData, cb) {
        console.log('a=' + filePath)
        wx.uploadFile({
            url: 'https://a.ccfpap.org/doctor/cpapDoctor/updateDocById/393a6a80-3ac8-11e8-a4ce-2fea3fb581f6',
            filePath: filePath,
            name: name,
            header: {
                'content-type': 'multipart/form-data',
                'projectId':'8',
                'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5M2E2YTgwLTNhYzgtMTFlOC1hNGNlLTJmZWEzZmI1ODFmNiIsIm5hbWUiOiLltJTljLvnlJ8iLCJjb2RlIjoiMDAzNzQ2IiwidHlwZSI6NCwiaWF0IjoxNTI0MDM3MjM5LCJleHAiOjIzMDE2MzcyMzl9.t2FEuzCMmwdqHQYdk3vEDucPmIANsFb7pEjFToyel1M'
            }, // 设置请求的 header
            formData: formData, // HTTP 请求中其他额外的 form data
            data:{

            },
            success: function (res) {
                if (res.statusCode == 200 && !res.data.result_code) {
                    return typeof cb == "function" && cb(res.data)
                } else {
                    return typeof cb == "function" && cb(false)
                }
            },
            fail: function () {
                return typeof cb == "function" && cb(false)
            }
        })
    }
})
