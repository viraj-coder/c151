AFRAME.registerComponent("move-box", {
    schema: {
      moveX: {type: "number", default:1}
    },
   
      tick:function(){
this.data.moveX=this.data.moveX+0.5
var pose=this.el.getAttribute("position")
pose.x=this.data.moveX
this.el.setAttribute("position",{x:pose.x,y:pose.y,z:pose.z})
      }
  });