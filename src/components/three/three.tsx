import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import createScene from './renderCanvas';

import './canvasContaier.css'
import createUserParticles from './createUserParticles';
import { useScrollTrigger } from '@mui/material';
import createText from './createText';

interface ChatData {
  message: string;
  userName: string;
  action: string;
};


export default function Three(props:any) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);

  useEffect(() => {
    // シーンの作成
    const { scene, camera, renderer } = createScene(canvasRef);
    setScene(scene);
    // モデルの読み込み
    let model: THREE.Object3D;
    const loader = new GLTFLoader();
    loader.load('assets/earth.glb', (gltf) => {
      model = gltf.scene;
      scene.add(model);

      // カメラの位置を設定
      camera.position.set(0, 1, 5);
      camera.lookAt(0, 3, 0);

      // レンダリングループ
      const animate = () => {
        requestAnimationFrame(animate);
        // モデルの回転
        if (model) {
          model.rotation.y += 0.001;
        }

        renderer.render(scene, camera);
      };
      animate();
    });
  }, []);

  useEffect(()=>{
    if(props.chatMessage)
    switch(props.chatMessage.action){
      case "join":
        if(scene!=null && props.chatMessage.length!=0 ){
          console.log(props.chatMessage)
          createUserParticles(scene,1);
        }
        break;
      case "message":
        console.log(props.chatMessage.message)
        if(scene!=null){
          createText(scene, props.chatMessage.message+"★",  new THREE.Vector3(1, 2, 3))
        }
        break;
      case "leave":
        //userName一意である必要がある
        console.log(props.chatMessage.userName);
        break;
    }
  },[props.chatMessage])

  return <canvas ref={canvasRef} className='canvasContaier'/>;
}
