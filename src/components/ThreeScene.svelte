<script>
  import { T, useTask } from '@threlte/core';
  import { OrbitControls, Stars, Float, Grid, HTML } from '@threlte/extras';

  let rotation = 0;
  let scrollY = 0;
  let pointerX = 0;
  let pointerY = 0;
  
  // Smoothly interpolate current pointer rotation for cinematic feel
  let targetRotationX = 0;
  let targetRotationY = 0;
  let currentRotationX = 0;
  let currentRotationY = 0;
  
  useTask((delta) => {
    rotation += delta;
    
    // Smooth interpolation (lerp) for mouse tracking
    currentRotationX += (targetRotationX - currentRotationX) * delta * 5;
    currentRotationY += (targetRotationY - currentRotationY) * delta * 5;
  });

  function onPointerMove(e) {
    // Normalize coordinates between -1 and 1
    pointerX = (e.clientX / window.innerWidth) * 2 - 1;
    pointerY = -(e.clientY / window.innerHeight) * 2 + 1;
    
    // Set target rotation (max tilt of ~15 degrees)
    targetRotationY = pointerX * 0.25;
    targetRotationX = -pointerY * 0.25;
  }
</script>

<svelte:window bind:scrollY={scrollY} on:mousemove={onPointerMove} />

<!-- Camera remains static (no zoom on scroll) -->
<T.PerspectiveCamera 
  makeDefault 
  position={[0, 2, 6]} 
  fov={45} 
/>

<!-- Deep space / Cyberpunk lighting -->
<T.AmbientLight intensity={0.2} color="#ffffff" />
<T.PointLight position={[4, 3, 2]} intensity={25} color="#25d6ff" />
<T.PointLight position={[-4, -2, 2]} intensity={25} color="#e244ff" />

<!-- Stars background -->
<Stars radius={50} depth={50} count={800} factor={7} saturation={0.5} fade speed={0.3} />

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
  <!-- Group that tilts towards mouse -->
  <T.Group rotation.x={currentRotationX} rotation.y={currentRotationY}>
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

    <!-- Floating Tech Logos Orbiting the Planet -->
    <T.Group rotation.y={rotation * 0.4} rotation.x={Math.sin(rotation * 0.2) * 0.2}>
      <HTML position={[3, 1, 0]} transform>
        <div class="bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
          <img src="/images/tech/aws.png" alt="AWS" class="w-6 h-6 object-contain" />
          <span class="font-bold text-sm text-[#FF9900]">AWS</span>
        </div>
      </HTML>
      <HTML position={[-1.5, -1, 2.5]} transform>
        <div class="bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
          <img src="/images/tech/postgresql.png" alt="Postgres" class="w-6 h-6 object-contain" />
          <span class="font-bold text-sm text-[#336791]">Postgres</span>
        </div>
      </HTML>
      <HTML position={[-1.5, 2, -2]} transform>
        <div class="bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
          <img src="/images/tech/git.png" alt="Git" class="w-6 h-6 object-contain" />
          <span class="font-bold text-sm text-[#F05032]">Git</span>
        </div>
      </HTML>
      <HTML position={[2, -2, -1.5]} transform>
        <div class="bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
          <img src="/images/tech/dotnet.png" alt=".NET" class="w-6 h-6 object-contain" />
          <span class="font-bold text-sm text-[#512BD4]">.NET</span>
        </div>
      </HTML>
      <HTML position={[0, 2.5, 2]} transform>
        <div class="bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
          <img src="/images/tech/linux.png" alt="Linux" class="w-6 h-6 object-contain" />
          <span class="font-bold text-sm text-[#FCC624]">Linux</span>
        </div>
      </HTML>
      <HTML position={[-3, 0.5, -1]} transform>
        <div class="bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
          <img src="/images/tech/svelte.png" alt="Svelte" class="w-6 h-6 object-contain" />
          <span class="font-bold text-sm text-[#FF3E00]">Svelte</span>
        </div>
      </HTML>
      <HTML position={[1.5, -3, 1]} transform>
        <div class="bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
          <img src="/images/tech/docker.png" alt="Docker" class="w-6 h-6 object-contain" />
          <span class="font-bold text-sm text-[#2496ED]">Docker</span>
        </div>
      </HTML>
    </T.Group>
  </T.Group>
</Float>

<OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} maxPolarAngle={Math.PI / 2} />
