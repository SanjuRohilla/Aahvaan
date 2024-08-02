 import React from 'react';
 import { Canvas } from '@react-three/fiber';


function Sphere() {
      return (
        <mesh>
          <sphereBufferGeometry args={[1, 30, 30]} />
          <meshStandardMaterial color={'green'} />
        </mesh>
      );
    }

	function Experience (){
	return(
		<>
		<Canvas>
			<Sphere/>
		</Canvas>
		</>
	)
}
export default Experience;

