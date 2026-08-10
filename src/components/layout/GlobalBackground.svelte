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
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── STARFIELD ──────────────────────────────────────────────
    const starCount = 6000;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const alphas = new Float32Array(starCount);
    const speeds = new Float32Array(starCount);
    const twinkles = new Float32Array(starCount);
    const tints = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      positions[i3]     = (Math.random() - 0.5) * 2000;
      positions[i3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i3 + 2] = (Math.random() - 0.5) * 2000;
      sizes[i] = Math.random() * 1.8 + 0.2;
      alphas[i] = Math.random() * 0.6 + 0.4;
      speeds[i] = Math.random();
      twinkles[i] = Math.random() * Math.PI * 2;
      tints[i] = Math.random();
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    starGeo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
    starGeo.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));
    starGeo.setAttribute('aTwinkle', new THREE.BufferAttribute(twinkles, 1));
    starGeo.setAttribute('aTint', new THREE.BufferAttribute(tints, 1));

    const starMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;
        attribute float aSpeed;
        attribute float aTwinkle;
        attribute float aTint;
        uniform float uTime;
        varying float vAlpha;
        varying float vSpeed;
        varying float vTint;
        void main() {
          vec3 animatedPosition = position;
          float driftSpeed = 3.5 + aSpeed * 10.0;
          animatedPosition.x = mod(position.x + uTime * driftSpeed + 1000.0, 2000.0) - 1000.0;
          animatedPosition.y += sin(uTime * 0.15 + position.z * 0.01 + aTwinkle) * (0.6 + aSpeed);
          vAlpha = aAlpha * (0.78 + 0.22 * sin(uTime * (0.55 + aSpeed) + aTwinkle));
          vSpeed = aSpeed;
          vTint = aTint;
          vec4 mvPos = modelViewMatrix * vec4(animatedPosition, 1.0);
          gl_PointSize = aSize * (300.0 / -mvPos.z) * (0.9 + aSpeed * 0.25);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying float vSpeed;
        varying float vTint;
        void main() {
          vec2 point = gl_PointCoord - vec2(0.5);
          point.x *= 1.0 + vSpeed * 0.35;
          float dist = length(point);
          if (dist > 0.5) discard;
          float strength = 1.0 - (dist * 2.0);
          strength = pow(strength, 2.0);
          vec3 cool = vec3(0.72, 0.9, 1.0);
          vec3 violet = vec3(0.8, 0.62, 1.0);
          vec3 color = mix(cool, violet, vTint * 0.35);
          gl_FragColor = vec4(color, strength * vAlpha);
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
    const sparkleMeshes: { mesh: THREE.Mesh; baseY: number; phase: number; baseOpacity: number; drift: number }[] = [];
    const sparklePositions = [
      [-8, 4, -20], [12, -3, -30], [-15, -8, -25], [6, 10, -18], [-3, -12, -35],
      [20, 5, -40], [-18, 8, -45], [9, -15, -22], [-6, 6, -28], [16, 12, -50]
    ];

    sparklePositions.forEach(([x, y, z]) => {
      const size = Math.random() * 0.08 + 0.04;
      const mesh = new THREE.Mesh(createSparkleGeo(size), sparkleMat.clone());
      mesh.position.set(x as number, y as number, z as number);
      mesh.rotation.z = Math.random() * Math.PI;
      sparkleMeshes.push({
        mesh,
        baseY: y as number,
        phase: Math.random() * Math.PI * 2,
        baseOpacity: (mesh.material as THREE.MeshBasicMaterial).opacity,
        drift: Math.random() * 0.35 + 0.15
      });
      scene.add(mesh);
    });

    // ── SCROLL PARALLAX ─────────────────────────────────────────
    let scrollY = 0;
    let targetScrollY = 0;
    const handleScroll = () => { scrollY = window.scrollY; };

    // ── MOUSE PARALLAX ──────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };

    // ── RESIZE ──────────────────────────────────────────────────
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    if (!reduceMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // ── RENDER LOOP ─────────────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    function animate() {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      starMaterial.uniforms.uTime.value = t;

      // Smooth scroll lerp
      targetScrollY += (scrollY - targetScrollY) * 0.05;

      // Stars drift on scroll
      stars.rotation.y = t * 0.01 + mouseX * 0.5;
      stars.rotation.x = mouseY * 0.3 + targetScrollY * 0.0002;

      sparkleMeshes.forEach(({ mesh, baseY, phase, baseOpacity, drift }) => {
        mesh.position.y = baseY + Math.sin(t * drift + phase) * 0.22;
        mesh.rotation.z += 0.0015 + drift * 0.002;
        (mesh.material as THREE.MeshBasicMaterial).opacity = baseOpacity * (0.72 + Math.sin(t * drift * 1.8 + phase) * 0.28);
      });

      renderer.render(scene, camera);
    }

    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      starGeo.dispose();
      starMaterial.dispose();
      sparkleMeshes.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 z-0 w-full h-full pointer-events-none"
  style="mix-blend-mode: normal;"
/>
