AFRAME.registerComponent("b",{schema:{
    mb:{type:"number", default:1}
},tick:function(){
    this.data.mb=this.data.mb+0.1
    var posI= this.el.getAttribute("position")
    posI.x=this.data.mb
    this.el.setAttribute("position",{x:posI.x,y:posI.y,z:posI.z})
}})