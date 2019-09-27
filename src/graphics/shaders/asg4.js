// Vertex Shader
var ASG4_VSHADER = `precision mediump float;
  attribute vec4 a_Position;
  varying vec3 v_Position;

  attribute vec4 a_Color;
  varying vec4 v_Color;

  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;

  attribute vec4 a_Normal;
  varying vec3 v_Normal;

  uniform mat4 u_NormalMatrix;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;

  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
    v_Position = vec3(u_ModelMatrix * a_Position);
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;
  }`;

// Fragment Shader
var ASG4_FSHADER = `precision mediump float;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  varying vec3 v_Normal;
  varying vec3 v_Position;

  uniform sampler2D u_Sampler;

  uniform vec3 u_LightPos;
  uniform vec3 u_AmbientColor;
  uniform vec3 u_DiffuseColor;
  uniform vec3 u_SpecularColor;
  uniform vec3 u_EyePos;

  void main() {

    vec3 normal = v_Normal;
    vec3 lightDirection = normalize(u_LightPos - v_Position);
    float nDotL = max(dot(lightDirection, normal), 0.0);
    float specularAngle = max(dot(normalize(u_EyePos - v_Position), normalize(lightDirection * normalize(normal)- lightDirection)), 0.0);

    vec4 texelColor = texture2D(u_Sampler, v_TexCoord);

    vec3 ambient = u_AmbientColor * texelColor.rgb;
    vec3 diffuse = u_DiffuseColor * texelColor.rgb * nDotL;
    vec3 specular = u_SpecularColor * texelColor.rgb * pow(specularAngle, 2.0);

    gl_FragColor = vec4(diffuse + ambient + specular, 1.0);
  }`;
