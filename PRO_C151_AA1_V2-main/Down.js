AFRAME.registerComponent("d",{schema:{
    mb:{type:"number", default:0}
},tick:function(){
    window.addEventListener("click",(e)=>{
        this.data.mb=this.data.mb-0.001
    })
    var posI= this.el.getAttribute("position")
    posI.y=posI.y+this.data.mb
    this.el.setAttribute("position",{x:posI.x,y:posI.y,z:posI.z})
}})