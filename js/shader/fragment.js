const fragment = /* glsl */ `

varying vec2 vUv;
void main()	{
	// vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	gl_FragColor = vec4(vUv.x, 0.0,1.0,1.);
}

`


export default fragment
