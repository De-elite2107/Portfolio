import { useEffect, useRef } from "react";

// Slow-moving folds of dark red silk, drawn with a small fragment shader.
// Rendered at reduced resolution (the folds are soft, so nobody can tell),
// paused while off screen, and drawn once, still, for reduced motion. If
// WebGL is unavailable the CSS gradient on .silk shows instead.

const VERTEX = `attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}`;

const FRAGMENT = `
precision mediump float;
uniform vec2 res;
uniform float time;
uniform float variant;

void main() {
  vec2 uv = gl_FragCoord.xy / res;
  vec2 q = vec2(uv.x * res.x / res.y, uv.y);

  // Folds sweep from the top left down to the bottom right, bending slowly.
  float a = 0.55;
  float across = q.x * cos(a) + q.y * sin(a);
  float along = -q.x * sin(a) + q.y * cos(a);
  float bend = sin(along * 1.6 + time * 0.11) * 0.22 + sin(along * 0.7 - time * 0.07) * 0.5;
  float u = across * 2.5 + bend - along * along * 0.3 + time * 0.03;

  // Each fold: a lit face ramping up to a crease, then dropping into shadow.
  float f = fract(u);
  float face = smoothstep(0.0, 0.85, f) * (1.0 - smoothstep(0.85, 1.0, f));
  float ridge = smoothstep(0.7, 0.86, f) * (1.0 - smoothstep(0.86, 0.98, f));
  float depth = 0.55 + 0.45 * sin(floor(u) * 2.3 + 1.0);
  float shade = pow(face, 1.8) * 0.85 * depth + ridge * 0.9;

  float mask;
  if (variant < 0.5) {
    mask = smoothstep(0.08, 0.6, uv.x) * smoothstep(0.0, 0.22, uv.y);
  } else {
    mask = smoothstep(0.58, 1.0, uv.x) * smoothstep(0.0, 0.25, uv.y) * smoothstep(1.0, 0.7, uv.y);
  }

  vec3 base = vec3(0.039);
  vec3 red = vec3(0.5, 0.06, 0.06);
  gl_FragColor = vec4(base + red * shade * mask * 0.6, 1.0);
}`;

export default function SilkCanvas({ variant = "hero" }: { variant?: "hero" | "footer" }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERTEX));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAGMENT));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "res");
    const uTime = gl.getUniformLocation(prog, "time");
    gl.uniform1f(gl.getUniformLocation(prog, "variant"), variant === "hero" ? 0 : 1);

    const SCALE = 0.5;
    const resize = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * SCALE));
      const h = Math.max(1, Math.round(canvas.clientHeight * SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };

    const draw = (seconds: number) => {
      resize();
      gl.uniform1f(uTime, seconds);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    canvas.classList.add("is-ready");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      draw(20);
      const onResize = () => draw(20);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    let frame = 0;
    let visible = false;
    const start = performance.now() - 20000;
    const loop = (now: number) => {
      draw((now - start) / 1000);
      frame = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !visible) {
        visible = true;
        frame = requestAnimationFrame(loop);
      } else if (!entry.isIntersecting && visible) {
        visible = false;
        cancelAnimationFrame(frame);
      }
    });
    io.observe(canvas);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [variant]);

  return <canvas ref={ref} className={`silk silk--${variant}`} aria-hidden="true" />;
}
