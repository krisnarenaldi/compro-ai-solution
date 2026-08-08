"use client";

import { useEffect, useRef } from "react";

const VS_SOURCE = `
    attribute vec4 a_position;
    varying vec2 v_texCoord;
    void main() {
        gl_Position = a_position;
        v_texCoord = a_position.xy * 0.5 + 0.5;
    }
`;

const FS_SOURCE = `precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    
    // Wave parameters - reduced speed for more "majestic" feel
    float time = u_time * 0.4;
    
    // Sharper wave definition using multiple frequencies
    // The "garis tegas" is achieved by using higher contrast in the wave layering
    float wave1 = sin(uv.x * 4.0 + time) * 0.12;
    float wave2 = sin(uv.x * 7.0 - time * 0.6) * 0.04;
    float wave3 = sin(uv.y * 3.0 + time * 0.8) * 0.06;
    
    // Base colors (Keeping original Blue and Purple mix)
    vec3 deepBlue = vec3(0.02, 0.05, 0.2);
    vec3 vibrantBlue = vec3(0.0, 0.47, 1.0);
    vec3 electricPurple = vec3(0.5, 0.0, 0.9);
    vec3 darkSurface = vec3(0.06, 0.07, 0.1); 
    
    // Combine waves
    float combinedWave = wave1 + wave2 + wave3;
    
    // Create "Tegas" (Sharp) lines using a narrower smoothstep or higher power
    // Moving from 0.5 mask to a more defined edge
    float lineEdge = uv.y + combinedWave - 0.5;
    float mask = smoothstep(-0.1, 0.1, lineEdge); // Narrower transition = sharper edge
    
    // Color mixing based on x-position and time
    vec3 waveColor = mix(vibrantBlue, electricPurple, 0.5 + 0.5 * sin(uv.x * 1.5 + time));
    
    // Base layer
    vec3 finalColor = mix(darkSurface, waveColor, mask * 0.7);
    
    // Adding sharper "Garis" (Lines) or Highlights
    // High power creates a thin, sharp glowing line at the crest of the wave
    float edgeHighlight = pow(1.0 - abs(lineEdge), 40.0); 
    finalColor += edgeHighlight * 0.5 * vibrantBlue;
    
    // Secondary "inner" sharp line for depth
    float innerEdge = pow(1.0 - abs(lineEdge + 0.05), 60.0);
    finalColor += innerEdge * 0.3 * electricPurple;
    
    gl_FragColor = vec4(finalColor, 1.0);
}`;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("webgl");
    if (!ctx) return;
    const gl: WebGLRenderingContext = ctx as WebGLRenderingContext;
    const glCanvas: HTMLCanvasElement = gl.canvas as HTMLCanvasElement;

    function resizeCanvasToDisplaySize(target: HTMLCanvasElement) {
      const displayWidth = target.clientWidth;
      const displayHeight = target.clientHeight;
      if (target.width !== displayWidth || target.height !== displayHeight) {
        target.width = displayWidth;
        target.height = displayHeight;
      }
    }

    function createShader(
      gl: WebGLRenderingContext,
      type: number,
      source: string
    ) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, VS_SOURCE);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, FS_SOURCE);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const positionAttributeLocation = gl.getAttribLocation(
      program,
      "a_position"
    );
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
      ]),
      gl.STATIC_DRAW
    );

    const startTime = performance.now();
    let animationFrameId = 0;

    function render(now: number) {
      resizeCanvasToDisplaySize(glCanvas);
      gl.viewport(0, 0, glCanvas.width, glCanvas.height);

      gl.useProgram(program);

      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(
        positionAttributeLocation,
        2,
        gl.FLOAT,
        false,
        0,
        0
      );

      gl.uniform1f(timeLocation, (now - startTime) * 0.001);
      gl.uniform2f(resolutionLocation, glCanvas.width, glCanvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}