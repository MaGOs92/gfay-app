import React, { useEffect, useRef } from 'react';
import { GameState, Player } from '../Connect4/connect4.types';
import { useConnect4 } from '../Connect4/useConnect4';
import * as THREE from 'three';

interface IProps {
  onPlayed?: (gameState: GameState) => void;
  iaDifficulty?: number;
}

export function Connect43d({ iaDifficulty = 4 }: IProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { play, gameState, board } = useConnect4(iaDifficulty);

  useEffect(() => {
    if (canvasRef.current) {
      initScene();
    }
  }, []);

  const initScene = () => {
    if (!canvasRef.current) {
      return;
    }

    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
    });
    renderer.setSize(width, height);

    const mainCamera = new THREE.PerspectiveCamera(
      60,
      width / height,
      0.1,
      100
    );

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2e294e);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({ color: 0xffad00 });

    const cube = new THREE.Mesh(geometry, material);
    cube.position.z = -3;
    cube.position.y = -1;
    cube.position.x = 0.5;

    mainCamera.lookAt(cube.position);

    scene.add(cube);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 4, 2);

    scene.add(light);

    renderer.render(scene, mainCamera);
  };

  return (
    <canvas
      style={{ width: '100%', height: '100%', display: 'block' }}
      ref={canvasRef}
    />
  );
}
