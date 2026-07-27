<script>
  import { T, useTask } from '@threlte/core';
  import { OrbitControls, Stars, Float, Grid } from '@threlte/extras';

  let rotation = 0;
  let scrollY = 0;
  
  useTask((delta) => {
    rotation += delta;
  });
</script>

<svelte:window bind:scrollY={scrollY} />

<!-- Camera moves forward (negative Z) and slightly down based on scroll -->
<T.PerspectiveCamera 
  makeDefault 
  position={[0, 2 - (scrollY * 0.002), 6 - (scrollY * 0.005)]} 
  fov={45} 
/>

<!-- Deep space / Cyberpunk lighting -->
<T.AmbientLight intensity={0.2} color="#ffffff" />
<T.PointLight position={[4, 3, 2]} intensity={25} color="#25d6ff" />
<T.PointLight position={[-4, -2, 2]} intensity={25} color="#e244ff" />

<!-- Stars background -->
<Stars radius={50} depth={50} count={3000} factor={4} saturation={0.5} fade speed={1} />

<!-- Cyberpunk Floor Grid -->
<Grid 
  position.y={-2} 
  cellColor="#25d6ff" 
  sectionColor="#8d4dff" 
  sectionSize={2} 
  cellSize={0.5} 
  infiniteGrid 
  fadeDistance={15} 
/>

<Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
  <!-- Core Cyberpunk geometric object (Planet) -->
  <T.Mesh rotation.x={rotation * 0.1} rotation.y={rotation * 0.2}>
    <T.SphereGeometry args={[1.5, 32, 32]} />
    <T.MeshStandardMaterial color="#0a0a0a" roughness={0.1} metalness={0.9} />
  </T.Mesh>
  
  <!-- Holographic Grid / Wireframe -->
  <T.Mesh rotation.x={rotation * 0.1} rotation.y={rotation * 0.2}>
    <T.SphereGeometry args={[1.51, 16, 16]} />
    <T.MeshBasicMaterial color="#25d6ff" wireframe={true} transparent opacity={0.6} />
  </T.Mesh>

  <!-- Orbital Ring 1 -->
  <T.Mesh rotation.x={Math.PI / 2 + 0.2} rotation.y={rotation * -0.5}>
    <T.TorusGeometry args={[2.5, 0.02, 32, 100]} />
    <T.MeshBasicMaterial color="#e244ff" transparent opacity={0.8} />
  </T.Mesh>
  
  <!-- Orbital Ring 2 -->
  <T.Mesh rotation.x={Math.PI / 2 - 0.4} rotation.y={rotation * 0.8}>
    <T.TorusGeometry args={[3.2, 0.01, 32, 100]} />
    <T.MeshBasicMaterial color="#25d6ff" transparent opacity={0.5} />
  </T.Mesh>
</Float>

<OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} maxPolarAngle={Math.PI / 2} />
