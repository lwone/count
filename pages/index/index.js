//index.js
//获取应用实例
const app = getApp()

Page({
  
  data: {
    msg:"AI：请选择你要出的手势！",
    aisum:0,
    cnsum:0,
    ai:1,
    cn:1,
    play:0,
    playtext:"开始游戏"
  },
  st:function(e){
    this.setData({
      cn:1
    })
  },
  jd: function (e) {
    this.setData({
      cn: 2
    })
  },
  bu: function (e) {
    this.setData({
      cn: 3
    })
  },
  sjb:function(ai,cn){

    var ai=parseInt(ai);
    var cn=parseInt(cn);
    var msg="";

    if(ai==1){
      if(cn=1){
        msg="平局";
      }
      if(cn=2){
        msg="电脑赢了";
      }
      if(cn=3){
        msg="玩家赢了"
      }
    }

    if(ai=2){
      if (cn = 1) {
        msg = "玩家赢了";
      }
      if (cn = 2) {
        msg = "平局";
      }
      if (cn = 3) {
        msg = "电脑赢了"
      }
    }

    if(ai=3){
      if (cn = 1) {
        msg = "电脑赢了";
      }
      if (cn = 2) {
        msg = "玩家赢了";
      }
      if (cn = 3) {
        msg = "平局"
      }
    }

    return msg;

  },
  isplay:function(e){

   
    if(this.Data.play==0){
      this.setData({
        play:1,
        playtext:"结束游戏"
      })
    }else{
      this.setData({
        play: 0,
        playtext: "开始游戏"
      })
    }
    
  }


})
