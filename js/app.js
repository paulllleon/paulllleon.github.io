import Firebase from "./Firebase.js";

// import "json/stars.json";

// export default class App {
//   constructor() {
//     console.log("APP");
//     this.init();
//   }

const fb = new Firebase();
//   this.canvas = document.getElementById("myCanvas");
//   this.canvas.width = window.innerWidth;
//   this.canvas.height = window.innerHeight;
//   this.ctx = this.canvas.getContext("2d");
//   this.dpr = window.devicePixelRatio;
//     const keys =Object.keys(stars["button"]);
//     console.log(keys);
//     this.bodies = [];
//     keys.forEach((user)=> {
//       const params = stars["button"][user];
//       this.bodies.push(new Body(this.ctx, this.canvas, 200,200,params));
//     })

//   this.body = new Body(this.ctx, this.canvas, 200,200,stars["button"]["VveAbHRpuVTXIc5OPSA36NjGsUx1"]);

//   this.gui = new dat.GUI(
//     {
//         autoplace : false,
//         width : this.canvas.width,
//         height : this.canvas.height,

//     }
//   );
//   this.gui.domElement.id = 'gui_css';
// const body_control = this.gui.addFolder("Ton étoile");
//  let slider =  this.gui.add(this.body.opt, 'count', 2, 10,1 ).name( 'Branche');
//  let slider1 = this.gui.add(this.body.opt, 'radius', 0, 100 ).name( 'Rayon');
//  let slider2 = this.gui.add(this.body.opt, 'spreed', 20, 68 ).name( 'Angle');
//  let slider3 =this.gui.add(this.body.opt, 'pulse', -20, 20 ).name( 'Vitesse');
// //  let slider4 =this.gui.add(this.body.opt, 'speed', -20, 20 );

//   slider.onChange(()=>{
//         this.ctx.clearRect(0, -100, this.canvas.width, this.canvas.height*3);
//     // console.log("tu bouges ou quoiu ? ")
//   })

//   slider1.onChange(()=>{
//     this.ctx.clearRect(0, -100, this.canvas.width, this.canvas.height*3);
// // console.log("tu bouges ou quoiu ? ")
// })

// slider2.onChange(()=>{
//   this.ctx.clearRect(0, -100, this.canvas.width, this.canvas.height*3);
// // console.log("tu bouges ou quoiu ? ")
// })

// slider3.onChange(()=>{
//   this.ctx.clearRect(0, -100, this.canvas.width, this.canvas.height*3);
// // console.log("tu bouges ou quoiu ? ")
// })

//     this.draw();

//     const button = document.getElementById("button");
//     button.addEventListener("click", (e) => {
//     console.log(Object.keys(fb));
//     console.log(fb.uid);
//     fb.send("button/" + fb.uid, this.body.opt);
// });
//   }

//   draw() {
//     // this.body.draw();
//     this.bodies.forEach(body=>{
//       this.body.draw();
//     });

//     requestAnimationFrame(this.draw.bind(this));

//   }

// }

window.onload = start;

function start() {
  console.log("test");
  const d = new Date();
  const message = d.toString();
  fb.send("test", d.getSeconds());
}
