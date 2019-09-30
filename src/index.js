let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas";
}

let app = new PIXI.Application(
  {
    antialias: true
  }
);
document.body.appendChild(app.view);


app.renderer.backgroundColor = 0x1e415c;

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.resize(window.innerWidth, window.innerHeight);




const finishedLoadingImages = () => {
  let innitSprite = new PIXI.Sprite(PIXI.Loader.shared.resources["./images/innit-logo.png"].texture);
  app.stage.addChild(innitSprite);
};



PIXI.Loader.shared.add("./images/innit-logo.png").load(finishedLoadingImages);
