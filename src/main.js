var shader = null;

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  var light = new Light(20, 30, 10);

  // Initialize the scene
  var scene = new Scene();
  var camera = new Camera(canvas);

  scene.setLight(light);

  var inputHandler = new InputHandler(canvas, scene, camera);

  // Initialize shader
  shader = new Shader(gl, ASG4_VSHADER, ASG4_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  shader.addAttribute("a_TexCoord");
  shader.addAttribute("a_Normal");


  shader.addUniform("u_Sampler", "sampler2D", new Matrix4().elements);
  shader.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ModelMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);

  shader.addUniform("u_LightPos", "vec3", new Vector3().elements);
  shader.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
  shader.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);
  shader.addUniform("u_SpecularColor", "vec3", new Vector3().elements);


  // // Load texture and add triangle to the scene with that texture.
  inputHandler.readTexture("objs/grass.jpg", function(image) {
    var shape = new Square(shader, image, 0, 0, 0, 1);
    scene.addGeometry(shape);
  });

  var inputHandler2 = new InputHandler(canvas, scene, camera);
  inputHandler2.readTexture("objs/sky.jpg", function(image) {
    var shape = new Sky(shader, image);
    scene.addGeometry(shape);
  });

 

  var inputHandler1 = new InputHandler(canvas, scene, camera)

  drawWorld(scene, inputHandler1, shader);

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, camera);
  renderer.start();
}

function drawWorld(scene, inputHandler1, shader){
  var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,0,0,0,2,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

    inputHandler1.readTexture("objs/wall.jpg", function(image) {
      console.log(map[30][6]);
    for(var i = 31; i >=0; i--){
      for(var j = 0; j < map[i].length; j++){
        if(map[i][j]!=0){
          var shape = new Cube(shader, image, j, -0.9, i-31, 1);
          scene.addGeometry(shape);
          var shape = new Cube(shader, image, j, 1-0.9, i-31, 1);
          scene.addGeometry(shape);
        }
      }
    }
  });
}
