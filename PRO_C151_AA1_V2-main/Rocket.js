AFRAME.registerComponent("c",{schema:{
    mb:{type:"number", default:1}
},tick:function(){
    var posI= this.el.getAttribute("position")
    this.data.mb=this.data.mb+0.01
    posI.y=this.data.mb
    this.el.setAttribute("position",{x:posI.x,y:posI.y,z:posI.z})
}})