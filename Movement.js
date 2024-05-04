AFRAME.registerComponent("model-movement",{
    schema:{
        speedOfAscent: { type: "number", default: 0 }
    },
    init: function(){
        window.addEventListener("keydown", (e)=>{
            this.data.speedOfAscent = this.el.getAttributr("position")

            var modelPosition = this.data.speedOfAscent

            if(e.key === "ArrowUp"){
                modelPosition.z += 1
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "ArrowDown"){
                modelPosition.z -= 1
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "ArrowRight"){
                modelPosition.x += 1
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "ArrowLeft"){
                modelPosition.x -= 1
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "Space"){
                modelPosition.y += 1
                this.el.setAttribute("position",modelPosition)
            }
            if(e.key === "LeftShift"){
                modelPosition.y -= 1
                this.el.setAttribute("position",modelPosition)
            }
        })
    }
})