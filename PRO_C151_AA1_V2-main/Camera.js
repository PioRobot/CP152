AFRAME.registerComponent("e",{schema:{
    mb:{type:"number", default:10}
},tick:function(){
    this.data.mb=this.data.mb+0.01
    var posI= this.el.getAttribute("position")
    posI.z=this.data.mb
    this.el.setAttribute("position",{x:posI.x,y:posI.y,z:posI.z})
}})