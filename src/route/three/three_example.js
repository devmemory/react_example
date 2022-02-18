import React, { Component } from 'react'
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper'
import disc from './texture/disc.png'
import worldMap from './texture/world_map.png'
import baseColor from './texture/Glass_Window_002_basecolor.jpg'
import mapAO from './texture/Glass_Window_002_ambientOcclusion.jpg'
import mapHeight from './texture/Glass_Window_002_height.png'
import mapNormal from './texture/Glass_Window_002_normal.jpg'
import mapRoughness from './texture/Glass_Window_002_roughness.jpg'
import mapMetallic from './texture/Glass_Window_002_metallic.jpg'
import mapAlpha from './texture/Glass_Window_002_opacity.jpg'
import mapLight from './texture/light2.jpg'

class ThreeExample extends Component {
    componentDidMount() {
        this.setupScene();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        window.cancelAnimationFrame(this.requestID);
        this.controls.dispose();
    }

    setupScene = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new Three.Scene();

        this.setupCamera()
        this.setupControls()

        this.renderer = new Three.WebGLRenderer();
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);
    };

    setupCamera = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.camera = new Three.PerspectiveCamera(
            75,
            width / height,
            0.1,
            100
        );

        this.camera.position.z = 10;
        // this.camera.position.set(7, 7, 0)
        // this.camera.lookAt(0, 0, 0)

        this.scene.add(this.camera)
    }

    setupControls = () => {
        this.controls = new OrbitControls(this.camera, this.mount);
    }

    setupLight() {
        // const color = 0xffffff;
        // const intensity = 0.5;

        // const auxLight = new Three.DirectionalLight(color,intensity)
        // auxLight.position.set(0,0,5)
        // auxLight.target.position.set(0,0,0)
        // this.scene.add(auxLight.target)
        // this.scene.add(auxLight)

        // const light = new Three.DirectionalLight(color, intensity);
        // light.position.set(0,5,0);
        // light.target.position.set(0,0,0)
        // light.shadow.camera.top = light.shadow.camera.right = 6
        // light.shadow.camera.bottom = light.shadow.camera.left = -6
        // this.camera.add(light);
        // this.camera.add(light.target);

        // this.light = light

        // this.renderer.shadowMap.enabled = true
        // this.light.castShadow = true

        const color = 0xffffff;
        const intensity = 2;
        const light = new Three.SpotLight(color, intensity)
        light.position.set(0, 5, 0);
        this.camera.add(light)

        // this.scene.add(light)

        // this.light = light
    }

    addCustomSceneObjects = () => {
        // this.solarSystemModel()
        this.texturedModel()
        // this.lightTestModel()

        this.setupLight()
    };

    lightTestModel = () => {
        const groundGeometry = new Three.PlaneGeometry(10, 10)
        const groundMaterial = new Three.MeshStandardMaterial({
            color: '#2c3e50',
            roughness: 0.5,
            metalness: 0.5,
            side: Three.DoubleSide
        })

        const ground = new Three.Mesh(groundGeometry, groundMaterial)
        ground.rotation.x = Three.MathUtils.degToRad(-90)
        ground.receiveShadow = true
        this.scene.add(ground)

        const bigSphereGeometry = new Three.SphereGeometry(1.5, 64, 64, 0, Math.PI)
        const bigSphereMaterial = new Three.MeshStandardMaterial({
            color: '#ffffff',
            roughness: 0.1,
            metalness: 0.2
        })

        const bigSphere = new Three.Mesh(bigSphereGeometry, bigSphereMaterial)
        bigSphere.rotation.x = Three.MathUtils.degToRad(-90)
        bigSphere.receiveShadow = true
        bigSphere.castShadow = true
        this.scene.add(bigSphere)

        const torusGeometry = new Three.TorusGeometry(0.4, 0.1, 32, 32)
        const torusMaterial = new Three.MeshStandardMaterial({
            color: '#9b59b6',
            roughness: 0.5,
            metalness: 0.9
        })

        for (let i = 0; i < 8; i++) {
            const torusPivot = new Three.Object3D()
            const torus = new Three.Mesh(torusGeometry, torusMaterial)

            torusPivot.rotation.y = Three.MathUtils.degToRad(45 * i)
            torus.position.set(3, 0.5, 0)
            torus.receiveShadow = true
            torus.castShadow = true
            torusPivot.add(torus)
            this.scene.add(torusPivot)
        }

        const smallSphereGeometry = new Three.SphereGeometry(0.3, 32, 32)
        const smallSphereMaterial = new Three.MeshStandardMaterial({
            color: '#e74c3c',
            roughness: 0.2,
            metalness: 0.5
        })

        const smallSpherePivot = new Three.Object3D()
        const smallSphere = new Three.Mesh(smallSphereGeometry, smallSphereMaterial)
        smallSphere.receiveShadow = true
        smallSphere.castShadow = true
        smallSpherePivot.add(smallSphere)
        smallSpherePivot.name = 'smallSpherePivot'
        smallSphere.position.set(3, 0.5, 0)
        this.scene.add(smallSpherePivot)
    }

    // textured model
    texturedModel = () => {
        // const material = new Three.MeshLambertMaterial({
        //     color: 0xff0000,
        //     emissive: 0x222200,
        //     transparent: true,
        //     opacity: 0.7,
        //     side: Three.DoubleSide,
        //     wireframe: false
        // })
        // const material = new Three.MeshPhongMaterial({
        //     color: 0xff0000,
        //     emissive: 0x000000,
        //     specular: 0xffff00,
        //     shininess: 7,
        //     flatShading: true,
        //     wireframe: false
        // })
        // const material = new Three.MeshStandardMaterial({
        //     color: 0xff0000,
        //     emissive: 0x000000,
        //     roughness: 0.25,
        //     metalness: 0.1,
        //     wireframe: false,
        //     flatShading: false
        // })
        // const material = new Three.MeshPhysicalMaterial({
        //     color: 0xff0000,
        //     emissive: 0x000000,
        //     roughness: 1,
        //     metalness: 0,
        //     clearcoat: 1,
        //     clearcoatRoughness: 0,
        //     wireframe: false,
        //     flatShading: false
        // })
        // const wMap = new Three.TextureLoader().load(worldMap)

        // const material = new Three.MeshStandardMaterial({
        //     map: wMap
        // })

        const textureLoader = new Three.TextureLoader()
        const tMap = textureLoader.load(baseColor)
        const tMapAO = textureLoader.load(mapAO)
        const tMapHeight = textureLoader.load(mapHeight)
        const tMapNormal = textureLoader.load(mapNormal)
        const tMapRoughness = textureLoader.load(mapRoughness)
        const tMapMetallic = textureLoader.load(mapMetallic)
        const tMapAlpha = textureLoader.load(mapAlpha)
        const tMapLight = textureLoader.load(mapLight)

        const material = new Three.MeshStandardMaterial({
            map: tMap,
            normalMap: tMapNormal,

            displacementMap: tMapHeight,
            displacementScale: 0.2,
            displacementBias: -0.15,

            aoMap: tMapAO,
            aoMapIntensity: 1,

            roughnessMap: tMapRoughness,
            roughness: 0.5,

            metalnessMap: tMapMetallic,
            metalness: 0.5,

            // alphaMap: tMapAlpha,
            transparent: true,
            side: Three.DoubleSide,

            lightMap: tMapLight,
            lightMapIntensity: 0.8
        })

        const box = new Three.Mesh(new Three.BoxGeometry(1, 1, 1, 256, 256, 256), material)
        box.position.set(-1, 0, 0)
        box.geometry.attributes.uv2 = box.geometry.attributes.uv
        this.scene.add(box)

        const sphere = new Three.Mesh(new Three.SphereGeometry(0.7, 512, 512), material)
        sphere.position.set(1, 0, 0)
        sphere.geometry.attributes.uv2 = sphere.geometry.attributes.uv
        this.scene.add(sphere)
    }

    // line model
    lineModel = () => {
        const vertices = [
            -1, 1, 0,
            1, 1, 0,
            -1, -1, 0,
            1, -1, 0
        ]

        const geometry = new Three.BufferGeometry()
        geometry.setAttribute('position', new Three.Float32BufferAttribute(vertices, 3))

        const material = new Three.LineDashedMaterial({ color: 0xffff00, dashSize: 0.1, gapSize: 0.2, scale: 1 })

        const line = new Three.LineLoop(geometry, material)
        this.scene.add(line)
    }

    // dot images
    dotImagesModel = () => {
        const vertices = []
        for (let i = 0; i < 1000; i++) {
            const x = Three.MathUtils.randFloatSpread(5)
            const y = Three.MathUtils.randFloatSpread(5)
            const z = Three.MathUtils.randFloatSpread(5)

            vertices.push(x, y, z)
        }

        const geometry = new Three.BufferGeometry()
        geometry.setAttribute('position', new Three.Float32BufferAttribute(vertices, 3))

        const sprite = new Three.TextureLoader().load(disc)

        const material = new Three.PointsMaterial({
            map: sprite,
            alphaTest: 0.5,
            color: 0xffffff,
            size: 0.1,
            sizeAttenuation: true
        })

        const points = new Three.Points(geometry, material)
        this.scene.add(points)
    }

    // texture mapping
    mappedModel = () => {
        const rawPositions = [
            -1, -1, 0,
            1, -1, 0,
            -1, 1, 0,
            1, 1, 0
        ]

        const rawNormals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1
        ]

        const rawColors = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
            1, 1, 0
        ]

        const rawUVs = [
            0, 0,
            1, 0,
            0, 1,
            1, 1
        ]

        const positions = new Float32Array(rawPositions)
        const normals = new Float32Array(rawNormals)
        const colors = new Float32Array(rawColors)
        const uvs = new Float32Array(rawUVs)

        const geometry = new Three.BufferGeometry()

        geometry.setAttribute('position', new Three.BufferAttribute(positions, 3))

        geometry.setAttribute('normal', new Three.BufferAttribute(normals, 3))

        geometry.setAttribute('color', new Three.BufferAttribute(colors, 3))

        geometry.setAttribute('uv', new Three.BufferAttribute(uvs, 2))

        geometry.setIndex([
            0, 1, 2,
            2, 1, 3
        ])

        const textureLoader = new Three.TextureLoader()
        const map = textureLoader.load('https://source.unsplash.com/random')

        // geometry.computeVertexNormals()

        const material = new Three.MeshPhongMaterial({
            color: 0xffffff,
            // vertexColors: true,
            map: map
        })

        const box = new Three.Mesh(geometry, material)

        this.scene.add(box)

        const helper = new VertexNormalsHelper(box, 0.1, 0xffff00)
        this.scene.add(helper)
    }

    // solar system
    solarSystemModel = () => {
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

    // basic model
    basicModel = () => {
        // const geometry = new Three.BoxGeometry(1, 1, 1);
        // const geometry = new Three.CircleGeometry(0.7, 10, Math.PI / 2, Math.PI / 2)
        // const geometry = new Three.ConeGeometry(0.5, 0.5, 8, 4, true)
        // const geometry = new Three.CylinderGeometry(0.3, 0.7, 0.8, 8, 4, true)
        const geometry = new Three.SphereGeometry(0.9)
        // const geometry = new Three.RingGeometry(0.8,1,12,1, 0, Math.PI)
        // const geometry = new Three.PlaneGeometry(0.3,0.7,2)
        // const geometry = new TorusGeometry(0.5,0.2,3,8,4)
        // const geometry = new TorusKnotGeometry(0.5,0.15,20,4,4)

        const material = new Three.MeshPhongMaterial({ color: 0x515151 });

        const lineMaterial = new Three.LineBasicMaterial({ color: 0xffff00 })
        this.line = new Three.LineSegments(new Three.WireframeGeometry(geometry), lineMaterial)

        const group = new Three.Group()

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);
        this.scene.add(this.line);
        this.scene.add(group)
    }

    startAnimationLoop = () => {
        // const smallSpherePivot = this.scene.getObjectByName('smallSpherePivot')
        // if (smallSpherePivot) {
        //     smallSpherePivot.rotation.y -= 0.01

        //     if(this.light.target){
        //         const smallSphere = smallSpherePivot.children[0]
        //         smallSphere.getWorldPosition(this.light.target.position)
        //     }
        // }
        // this.solarSystem.rotation.y += 0.01
        // this.earthOrbit.rotation.y += 0.01
        // this.moonOrbit.rotation.y += 0.05

        // this.mesh.rotation.y += 0.001
        // this.line.rotation.y += 0.001

        this.renderer.render(this.scene, this.camera);

        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;

        this.camera.updateProjectionMatrix();
    };

    render() {
        return (
            <div style={{ width: '100%', height: '100vh' }}>
                <div ref={ref => (this.mount = ref)} style={{ width: '100%', height: '100%', border: '0.5px solid red' }} />
            </div>);
    }
}

export default ThreeExample