/* eslint-disable react/no-unknown-property */
import { Environment, Stats, OrbitControls, Html, useGLTF, useProgress } from '@react-three/drei';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import annotations from './annotations.json';
import { Suspense, useRef, useState } from 'react';
import TWEEN from '@tweenjs/tween.js';

function Annotations({ controls }) {
	const { camera } = useThree();
	const [selected, setSelected] = useState(-1);

	return (
		<>
			{annotations.map((a, i) => {
				return (
					<Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
						<svg height='34' width='34' transform='translate(-16 -16)' style={{ cursor: 'pointer' }}>
							<circle
								cx='17'
								cy='17'
								r='16'
								stroke='white'
								strokeWidth='2'
								fill='rgba(0,0,0,.66)'
								onPointerDown={() => {
									setSelected(i);
									// change target
									new TWEEN.Tween(controls.current.target)
										.to(
											{
												x: a.lookAt.x,
												y: a.lookAt.y,
												z: a.lookAt.z,
											},
											1000
										)
										.easing(TWEEN.Easing.Cubic.Out)
										.start();

									// change camera position
									new TWEEN.Tween(camera.position)
										.to(
											{
												x: a.camPos.x,
												y: a.camPos.y,
												z: a.camPos.z,
											},
											1000
										)
										.easing(TWEEN.Easing.Cubic.Out)
										.start();
								}}
							/>
							<text x='12' y='22' fill='white' fontSize={17} fontFamily='monospace' style={{ pointerEvents: 'none' }}>
								{i + 1}
							</text>
						</svg>
						{a.description && i === selected && (
							<div id={'desc_' + i} className='annotationDescription' dangerouslySetInnerHTML={{ __html: a.description }} />
						)}
					</Html>
				);
			})}
		</>
	);
}
function Loader() {
	const { progress } = useProgress()
	return <Html center>{progress} % loaded</Html>
  }
function Tween() {
	useFrame(() => {
		TWEEN.update();
	});
}
export default function Viewer() {
	const ref = useRef();
	const gltf = useLoader(GLTFLoader, '/models/glb-sample.glb');
	const { nodes, materials } = gltf;

	return (
		<Canvas camera={{ position: [12, 0, 0] }} shadows>
			<OrbitControls ref={ref} target={[0, 1, 0]} />
			<directionalLight position={[3.3, 1.0, 4.4]} intensity={Math.PI} castShadow />

			<Suspense fallback={<Loader />}>
				<Environment preset='forest' background blur={0.5} />
				{/* <primitive object={gltf.scene} position={[0, 1, 0]} children-0-castShadow /> */}
				<group rotation={[-1.75, 0.5, 0.25]} scale={1}>
					<mesh
						geometry={nodes['Mesh_0_Part_0'].geometry}
						material={materials.default_tex0}
						material-transparent
						material-opacity={1}
						material-depthWrite={false}
					/>
				</group>
				<Annotations controls={ref} />
				<Tween />
			</Suspense>

			{/* <axesHelper args={[5]} /> */}
			<Stats />
		</Canvas>
	);
}

useGLTF.preload('/models/glb-sample.glb');
