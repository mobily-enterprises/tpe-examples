/*
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
<script src="https://unpkg.com/tpe/distr/material.js"></script>
<script src="https://unpkg.com/tpe/distr/tpe.js"></script>
*/

const script1 = window.document.createElement('SCRIPT')
script1.setAttribute('src', 'https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js')
const script2 = window.document.createElement('SCRIPT')
script2.setAttribute('src', 'https://unpkg.com/tpe/distr/theme-material.js')
const script3 = window.document.createElement('SCRIPT')
script3.setAttribute('src', 'https://unpkg.com/tpe/distr/tpe.js')
window.document.head.appendChild(script1)
window.document.head.appendChild(script2)
window.document.head.appendChild(script3)
