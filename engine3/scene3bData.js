var level0 = { 

"type": "node",
"name": "rootNode",

"children":
[
	{
		// "CAMERA --------------------------------------------------------",
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [8, 3, 8],
		"center": [0, 0.25, 0],
		"vup": [0, 1, 0],
		"fov": 20,
		"userData": 
		{ 
			"scripts": ["cameraScript"]
		}
	},
	{
		// "LIGHTS --------------------------------------------------------",
		"type": "hemisphereLight",
		"name": "hlight",
		"skyColor": [0.3, 0.3, 0.5],
		"groundColor": [0.2, 0.1, 0.0],
		"intensity": 0.6 
	},
	{
		"type": "node",
		"name": "spotTarget",
		"translate": [0,0,0]
	},
	{
		"type": "spotLight",
		"name": "slight", 
		"position": [-1.5,8,5],
		"target": "spotTarget",
		"color": [1.3, 1.0, 0.7],
		"intensity": 1.0,
		"angle": 0.7,
		"penumbra": 0.2,
		"decay": 1.0,
		"distance": 100,
		"castShadow": true
	},

	{
		// "FLOOR --------------------------------------------------------",
		"type": "mesh",
		"name": "floor",
		"translate": [0, 0, 0],
		"rotate": [1, 0, 0, -1.57],
		"geometry": "plane",
		"width": 8,
		"height": 8,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.5, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"bumpMap": "earth2k.jpg",
			"bumpScale": 0.02,
			"shininess": 100
		}
	},

	{
		// "SPHERE --------------------------------------------------------",
		"type": "mesh",
		"name": "sphere",
		"scale": [0.5, 0.5, 0.5],
		"translate": [0, 1.3, 0],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 32,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "earth2k.jpg",
			"bumpMap": "earth2k.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		},
		"userData": 
		{ 
			"scripts": ["rotateScript", "bounceScript"],
			"rotationSpeed": 0.5,
			"bounceBottom": 0.5,
			"bounceHeight": 0.5,
			"index": 0
		}
	},

	{
		// "CONE --------------------------------------------------------",
		"type": "mesh",
		"name": "cone",
		"scale": [0.5, 0.5, 0.5],
		"translate": [1.3, 1.3, 0],
		"geometry": "cone",
		"radius": 0.75,
		"height": 2.0,
		"radiusSegments": 16,
		"heightSegments": 4,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 0.8, 0.5],
			"specularColor": [0.04, 0.04, 0.04],
			"bumpMap": "earth2k.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		},
		"userData": 
		{ 
			"scripts": ["rotateScript", "bounceScript"],
			"rotationSpeed": 0.5,
			"bounceBottom": 0.5,
			"bounceHeight": 0.5,
			"index": 1
		}
	},

	{
		// "CYLINDER --------------------------------------------------------",
		"type": "mesh",
		"name": "cylinder",
		"scale": [0.5, 0.5, 0.5],
		"translate": [-1.3, 1.3, 0],
		"geometry": "cylinder",
		"radiusTop": 0.75,
		"radiusBottom": 0.5,
		"height": 2.0,
		"radiusSegments": 16,
		"heightSegments": 4,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [0.5, 0.8, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"bumpMap": "earth2k.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		},
		"userData": 
		{ 
			"scripts": ["rotateScript", "bounceScript"],
			"rotationSpeed": 0.5,
			"bounceBottom": 0.5,
			"bounceHeight": 0.5,
			"index": 2
		}
	},

	{
		// "TORUS --------------------------------------------------------",
		"type": "mesh",
		"name": "torus",
		"scale": [0.5, 0.5, 0.5],
		"translate": [-1.3, 1.3, 0],
		"geometry": "torus",
		"radius": 1.0,
		"tube": 0.25,
		"radialSegments": 10,
		"tubularSegments": 28,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [0.5, 1, 0.8],
			"specularColor": [0.04, 0.04, 0.04],
			"bumpMap": "earth2k.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		},
		"userData": 
		{ 
			"scripts": ["rotateScript", "bounceScript"],
			"rotationSpeed": 0.5,
			"bounceBottom": 0.5,
			"bounceHeight": 0.5,
			"index": 3
		}
	},

	{
		// "CUBE --------------------------------------------------------",
		"type": "mesh",
		"name": "cube",
		"scale": [0.3, 0.5, 0.3],
		"translate": [0, 1.3, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 0.7, 0.7],
			"specularColor": [0.04, 0.04, 0.04],
			"bumpMap": "earth2k.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		},
		"userData": 
		{ 
			"scripts": ["rotateScript", "bounceScript"],
			"rotationSpeed": 0.5,
			"bounceBottom": 0.5,
			"bounceHeight": 0.5,
			"index": 4
		}
	}
]
}

