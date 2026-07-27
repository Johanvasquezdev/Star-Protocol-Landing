<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;

  onMount(async () => {
    const THREE = await import('three');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // ── STARFIELD ──────────────────────────────────────────────
    const starCount = 6000;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const alphas = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3]     = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = (Math.random() - 0.5) * 2000;
      sizes[i] = Math.random() * 1.8 + 0.2;
      alphas[i] = Math.random() * 0.6 + 0.4;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    starGeo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));

    const starMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;
        varying float vAlpha;
        void main() {
          vAlpha = aAlpha;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (300.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float strength = 1.0 - (dist * 2.0);
          strength = pow(strength, 2.0);
          gl_FragColor = vec4(0.8, 0.92, 1.0, strength * vAlpha);
        }
      `
    });

    const stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    // ── LARGE 4-POINTED SPARKLE STARS (decorative, near-field) ──
    // 4-pointed star shape using custom geometry
    function createSparkleGeo(size: number) {
      const shape = new THREE.Shape();
      const s = size;
      const t = s * 0.12; // thin arms
      shape.moveTo(0, s);
      shape.quadraticCurveTo(t, t, s, 0);
      shape.quadraticCurveTo(t, -t, 0, -s);
      shape.quadraticCurveTo(-t, -t, -s, 0);
      shape.quadraticCurveTo(-t, t, 0, s);
      return new THREE.ShapeGeometry(shape);
    }

    const sparkleMat = new THREE.MeshBasicMaterial({ color: 0x80d4ff, transparent: true, opacity: 0.6 });
    const sparklePositions = [
      [-8, 4, -20], [12, -3, -30], [-15, -8, -25], [6, 10, -18], [-3, -12, -35],
      [20, 5, -40], [-18, 8, -45], [9, -15, -22], [-6, 6, -28], [16, 12, -50]
    ];

    sparklePositions.forEach(([x, y, z]) => {
      const size = Math.random() * 0.08 + 0.04;
      const mesh = new THREE.Mesh(createSparkleGeo(size), sparkleMat.clone());
      mesh.position.set(x as number, y as number, z as number);
      mesh.rotation.z = Math.random() * Math.PI;
      scene.add(mesh);
    });

    // ── SCROLL PARALLAX ─────────────────────────────────────────
    let scrollY = 0;
    let targetScrollY = 0;
    window.addEventListener('scroll', () => { scrollY = window.scrollY; });

    // ── MOUSE PARALLAX ──────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    });

    // ── RESIZE ──────────────────────────────────────────────────
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // ── RENDER LOOP ─────────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    function animate() {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth scroll lerp
      targetScrollY += (scrollY - targetScrollY) * 0.05;

      // Stars drift on scroll
      stars.rotation.y = t * 0.01 + mouseX * 0.5;
      stars.rotation.x = mouseY * 0.3 + targetScrollY * 0.0002;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 z-0 w-full h-full pointer-events-none"
  style="mix-blend-mode: normal;"
/>
