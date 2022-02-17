import React, { Component } from 'react'
import * as Three from 'three'
import { TorusGeometry, TorusKnotGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

class ThreeExample extends Component {
    constructor() {
        super()
        const renderer = new Three.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);

        this.renderer = renderer;

        this.scene = new Three.Scene();

        this.setupCamera();
        this.setupLight();
        this.setupModel();

        window.onresize = this.resize.bind(this);

        requestAnimationFrame(this.render.bind(this));
    }

    componentDidMount() {
        this.divContainer = document.getElementById('div-three')

        this.element.appendChild(this.renderer.domElement);

        this.resize();

        this.setupControls();
    }

    setupControls() {
        new OrbitControls(this.camera, this.divContainer);
    }

    setupModel() {
        const solarSystem = new Three.Object3D()
        this.scene.add(solarSystem)

        const sphere = new Three.SphereGeometry(1, 12, 12)
        const sunMaterial = new Three.MeshPhongMaterial({ emissive: 0xffff00, flatShading: true })

        const sunMesh = new Three.Mesh(sphere, sunMaterial)
        sunMesh.scale.set(3, 3, 3)
        solarSystem.add(sunMesh)

        const earthOrbit = new Three.Object3D()
        solarSystem.add(earthOrbit)

        const earthMaterial = new Three.MeshPhongMaterial({ color: 0x2233ff, emissive: 0x112244, flatShading: true })

        const earthMesh = new Three.Mesh(sphere, earthMaterial)

        earthOrbit.position.x = 10

        earthOrbit.add(earthMesh)

        const moonOrbit = new Three.Object3D()
        moonOrbit.position.x = 2
        earthOrbit.add(moonOrbit)

        const moonMaterial = new Three.MeshPhongMaterial({
            color: 0x888888, emissive: 0x222222, flatShading: true
        })

        const moonMesh = new Three.Mesh(sphere, moonMaterial)
        moonMesh.scale.set(0.5, 0.5, 0.5)
        moonOrbit.add(moonMesh)

        this.solarSystem = solarSystem
        this.earthOrbit = earthOrbit
        this.moonOrbit = moonOrbit
    }

    // setupModel() {
    //     // const geometry = new Three.BoxGeometry(1, 1, 1);
    //     // const geometry = new Three.CircleGeometry(0.7, 10, Math.PI / 2, Math.PI / 2)
    //     // const geometry = new Three.ConeGeometry(0.5, 0.5, 8, 4, true)
    //     // const geometry = new Three.CylinderGeometry(0.3, 0.7, 0.8, 8, 4, true)
    //     const geometry = new Three.SphereGeometry(0.9)
    //     // const geometry = new Three.RingGeometry(0.8,1,12,1, 0, Math.PI)
    //     // const geometry = new Three.PlaneGeometry(0.3,0.7,2)
    //     // const geometry = new TorusGeometry(0.5,0.2,3,8,4)
    //     // const geometry = new TorusKnotGeometry(0.5,0.15,20,4,4)

    //     const material = new Three.MeshPhongMaterial({ color: 0x515151 });

    //     const lineMaterial = new Three.LineBasicMaterial({ color: 0xffff00 })
    //     this.line = new Three.LineSegments(new Three.WireframeGeometry(geometry), lineMaterial)

    //     const group = new Three.Group()

    //     this.mesh = new Three.Mesh(geometry, material);
    //     this.scene.add(this.mesh);
    //     this.scene.add(this.line);
    //     this.scene.add(group)
    // }

    setupCamera() {
        const camera = new Three.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );

        camera.position.z = 25;
        this.camera = camera;
    }

    setupLight() {
        const color = 0xffffff;
        const intensity = 1;
        const light = new Three.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        this.scene.add(light);
    }

    update(time) {
        this.renderer.render(this.scene, this.camera);

        time *= 0.001;
        this.solarSystem.rotation.y = time / 2
        this.earthOrbit.rotation.y = time / 2
        this.moonOrbit.rotation.y = time * 5
        // this.mesh.rotation.y = time
        // this.line.rotation.y = time

        requestAnimationFrame(this.render.bind(this));
    }

    render(time) {
        this.update(time);

        return (
            <div ref={(el) => this.element = el} id='div-three' style={{ width: '100%', height: '100vh', border: '1px solid red' }} />
        )
    }

    resize() {
        const width = this.divContainer.clientWidth;
        const height = this.divContainer.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }
}

export default ThreeExample