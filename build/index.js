!function(){"use strict";var M,N={743:function(){var M=window.wp.element,N=window.wp.richText,I=window.wp.i18n,g=window.wp.blockEditor,T=window.wp.components;window.React;const{createHigherOrderComponent:D}=wp.compose,{InspectorControls:j}=wp.blockEditor,{BaseControl:z,PanelBody:A,__experimentalUnitControl:c,ToggleControl:t}=wp.components,{Fragment:e}=wp.element;(0,N.registerFormatType)("bee-addons-blocks/low-highlight-format",{title:(0,I.__)("Low Highlight","beeAddonsBlocks"),tagName:"span",className:"beeAddonsBlocks-low-highlight",edit:({onChange:D,value:j,contentRef:z,isActive:A})=>{const[c,t]=(0,M.useState)(!1),e=j.activeFormats?.find((M=>"bee-addons-blocks/low-highlight-format"===M.type)),y={...e?.attributes||{},...e?.unregisteredAttributes||{}};return(0,M.createElement)(M.Fragment,null,(0,M.createElement)(g.RichTextToolbarButton,{icon:(0,M.createElement)("img",{height:24,width:24,src:A?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTAwIiB6b29tQW5kUGFuPSJtYWduaWZ5IiB2aWV3Qm94PSIwIDAgMzc1IDM3NC45OTk5OTEiIGhlaWdodD0iNTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2ZXJzaW9uPSIxLjAiPjxkZWZzPjxnLz48Y2xpcFBhdGggaWQ9ImFlMjFlOTE3ZDMiPjxwYXRoIGQ9Ik0gMCAyMTMuODc4OTA2IEwgMzc1IDIxMy44Nzg5MDYgTCAzNzUgMzA0Ljg2NzE4OCBMIDAgMzA0Ljg2NzE4OCBaIE0gMCAyMTMuODc4OTA2ICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9IjE4ZWE0NTBiZGEiPjxwYXRoIGQ9Ik0gMTcuMjUgMjEzLjg3ODkwNiBMIDM1Ny43NSAyMTMuODc4OTA2IEMgMzYyLjMyNDIxOSAyMTMuODc4OTA2IDM2Ni43MTA5MzggMjE1LjY5NTMxMiAzNjkuOTQ5MjE5IDIxOC45MzM1OTQgQyAzNzMuMTgzNTk0IDIyMi4xNjc5NjkgMzc1IDIyNi41NTQ2ODggMzc1IDIzMS4xMjg5MDYgTCAzNzUgMjg3LjYxNzE4OCBDIDM3NSAyOTIuMTkxNDA2IDM3My4xODM1OTQgMjk2LjU3ODEyNSAzNjkuOTQ5MjE5IDI5OS44MTI1IEMgMzY2LjcxMDkzOCAzMDMuMDUwNzgxIDM2Mi4zMjQyMTkgMzA0Ljg2NzE4OCAzNTcuNzUgMzA0Ljg2NzE4OCBMIDE3LjI1IDMwNC44NjcxODggQyAxMi42NzU3ODEgMzA0Ljg2NzE4OCA4LjI4OTA2MiAzMDMuMDUwNzgxIDUuMDUwNzgxIDI5OS44MTI1IEMgMS44MTY0MDYgMjk2LjU3ODEyNSAwIDI5Mi4xOTE0MDYgMCAyODcuNjE3MTg4IEwgMCAyMzEuMTI4OTA2IEMgMCAyMjYuNTU0Njg4IDEuODE2NDA2IDIyMi4xNjc5NjkgNS4wNTA3ODEgMjE4LjkzMzU5NCBDIDguMjg5MDYyIDIxNS42OTUzMTIgMTIuNjc1NzgxIDIxMy44Nzg5MDYgMTcuMjUgMjEzLjg3ODkwNiAiIGNsaXAtcnVsZT0ibm9uemVybyIvPjwvY2xpcFBhdGg+PC9kZWZzPjxyZWN0IHg9Ii0zNy41IiB3aWR0aD0iNDUwIiBmaWxsPSIjZmZmZmZmIiB5PSItMzcuNDk5OTk5IiBoZWlnaHQ9IjQ0OS45OTk5ODkiIGZpbGwtb3BhY2l0eT0iMSIvPjxyZWN0IHg9Ii0zNy41IiB3aWR0aD0iNDUwIiBmaWxsPSIjZmZmZmZmIiB5PSItMzcuNDk5OTk5IiBoZWlnaHQ9IjQ0OS45OTk5ODkiIGZpbGwtb3BhY2l0eT0iMSIvPjxyZWN0IHg9Ii0zNy41IiB3aWR0aD0iNDUwIiBmaWxsPSIjMDAwMDAwIiB5PSItMzcuNDk5OTk5IiBoZWlnaHQ9IjQ0OS45OTk5ODkiIGZpbGwtb3BhY2l0eT0iMSIvPjxnIGNsaXAtcGF0aD0idXJsKCNhZTIxZTkxN2QzKSI+PGcgY2xpcC1wYXRoPSJ1cmwoIzE4ZWE0NTBiZGEpIj48cGF0aCBmaWxsPSIjZmYzMTMxIiBkPSJNIDAgMjEzLjg3ODkwNiBMIDM3NSAyMTMuODc4OTA2IEwgMzc1IDMwNC44NjcxODggTCAwIDMwNC44NjcxODggWiBNIDAgMjEzLjg3ODkwNiAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA1ODYzODcsIDMwNC4xMzQ2NTkpIj48Zz48cGF0aCBkPSJNIDIwMy4yODEyNSAwIEwgMTU5LjIzNDM3NSAwIEwgMTQzLjI5Njg3NSAtNDguODI4MTI1IEwgNjIuMTU2MjUgLTQ4LjgyODEyNSBMIDQ2LjIxODc1IDAgTCAzLjE4NzUgMCBMIDc2LjM1OTM3NSAtMjExLjgyODEyNSBMIDEzMC4xMDkzNzUgLTIxMS44MjgxMjUgWiBNIDEwMC43MDMxMjUgLTE2Ny42NDA2MjUgTCA3My40NTMxMjUgLTg0LjAzMTI1IEwgMTMxLjcwMzEyNSAtODQuMDMxMjUgTCAxMDQuMzI4MTI1IC0xNjcuNjQwNjI1IFogTSAxMDAuNzAzMTI1IC0xNjcuNjQwNjI1ICIvPjwvZz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA2LjQ3NjAyOSwgMzA0LjEzNDY1OSkiPjxnPjxwYXRoIGQ9Ik0gNjIuMjk2ODc1IDMuMDQ2ODc1IEMgNTIuMDU0Njg4IDMuMDQ2ODc1IDQzLjE3MTg3NSAxLjE2MDE1NiAzNS42NDA2MjUgLTIuNjA5Mzc1IEMgMjguMTA5Mzc1IC02LjM3ODkwNiAyMi4zMTI1IC0xMS45MTAxNTYgMTguMjUgLTE5LjIwMzEyNSBDIDE0LjE5NTMxMiAtMjYuNDkyMTg4IDEyLjE3MTg3NSAtMzUuMjU3ODEyIDEyLjE3MTg3NSAtNDUuNSBDIDEyLjE3MTg3NSAtNTQuOTU3MDMxIDE0LjE5NTMxMiAtNjIuODk4NDM4IDE4LjI1IC02OS4zMjgxMjUgQyAyMi4zMTI1IC03NS43NTM5MDYgMjguNTkzNzUgLTgxLjAxOTUzMSAzNy4wOTM3NSAtODUuMTI1IEMgNDUuNTkzNzUgLTg5LjIyNjU2MiA1Ni43MDMxMjUgLTkyLjM5MDYyNSA3MC40MjE4NzUgLTk0LjYwOTM3NSBDIDc5Ljk4NDM3NSAtOTYuMTYwMTU2IDg3LjI1IC05Ny44NTE1NjIgOTIuMjE4NzUgLTk5LjY4NzUgQyA5Ny4xOTUzMTIgLTEwMS41MTk1MzEgMTAwLjU1NDY4OCAtMTAzLjU5Mzc1IDEwMi4yOTY4NzUgLTEwNS45MDYyNSBDIDEwNC4wMzUxNTYgLTEwOC4yMjY1NjIgMTA0LjkwNjI1IC0xMTEuMTc1NzgxIDEwNC45MDYyNSAtMTE0Ljc1IEMgMTA0LjkwNjI1IC0xMTkuODc1IDEwMy4xMTMyODEgLTEyMy43ODUxNTYgOTkuNTMxMjUgLTEyNi40ODQzNzUgQyA5NS45NTcwMzEgLTEyOS4xOTE0MDYgOTAuMDE5NTMxIC0xMzAuNTQ2ODc1IDgxLjcxODc1IC0xMzAuNTQ2ODc1IEMgNzIuODMyMDMxIC0xMzAuNTQ2ODc1IDY0LjM3ODkwNiAtMTI4LjU2NjQwNiA1Ni4zNTkzNzUgLTEyNC42MDkzNzUgQyA0OC4zNDc2NTYgLTEyMC42NDg0MzggNDEuMzk0NTMxIC0xMTUuNDI5Njg4IDM1LjUgLTEwOC45NTMxMjUgTCAzMi41OTM3NSAtMTA4Ljk1MzEyNSBMIDE1Ljc5Njg3NSAtMTM0LjMxMjUgQyAyMy45MTAxNTYgLTE0My4yODkwNjIgMzMuODEyNSAtMTUwLjI4OTA2MiA0NS41IC0xNTUuMzEyNSBDIDU3LjE4NzUgLTE2MC4zNDM3NSA2OS45Mzc1IC0xNjIuODU5Mzc1IDgzLjc1IC0xNjIuODU5Mzc1IEMgMTA0LjkwNjI1IC0xNjIuODU5Mzc1IDEyMC4yMTA5MzggLTE1OC4zNjMyODEgMTI5LjY3MTg3NSAtMTQ5LjM3NSBDIDEzOS4xNDA2MjUgLTE0MC4zOTQ1MzEgMTQzLjg3NSAtMTI3LjY0NDUzMSAxNDMuODc1IC0xMTEuMTI1IEwgMTQzLjg3NSAtNDEuNzM0Mzc1IEMgMTQzLjg3NSAtMzQuNTc4MTI1IDE0Ny4wMTU2MjUgLTMxIDE1My4yOTY4NzUgLTMxIEMgMTU1LjcxMDkzOCAtMzEgMTU4LjA3ODEyNSAtMzEuNDM3NSAxNjAuMzkwNjI1IC0zMi4zMTI1IEwgMTYyLjQyMTg3NSAtMzEuNzM0Mzc1IEwgMTY1LjMxMjUgLTMuNzY1NjI1IEMgMTYzLjA5Mzc1IC0yLjMxNjQwNiAxNjAuMDAzOTA2IC0xLjEzMjgxMiAxNTYuMDQ2ODc1IC0wLjIxODc1IEMgMTUyLjA4NTkzOCAwLjY5NTMxMiAxNDcuNzM4MjgxIDEuMTU2MjUgMTQzIDEuMTU2MjUgQyAxMzMuNDM3NSAxLjE1NjI1IDEyNS45NzI2NTYgLTAuNjc1NzgxIDEyMC42MDkzNzUgLTQuMzQzNzUgQyAxMTUuMjUzOTA2IC04LjAxOTUzMSAxMTEuNDIxODc1IC0xMy43Njk1MzEgMTA5LjEwOTM3NSAtMjEuNTkzNzUgTCAxMDYuMDYyNSAtMjEuODc1IEMgOTguMjM4MjgxIC01LjI1NzgxMiA4My42NDg0MzggMy4wNDY4NzUgNjIuMjk2ODc1IDMuMDQ2ODc1IFogTSA3NS4wNDY4NzUgLTI2Ljk1MzEyNSBDIDg0LjMyODEyNSAtMjYuOTUzMTI1IDkxLjc0MjE4OCAtMzAuMDY2NDA2IDk3LjI5Njg3NSAtMzYuMjk2ODc1IEMgMTAyLjg0NzY1NiAtNDIuNTIzNDM4IDEwNS42MjUgLTUxLjE5MTQwNiAxMDUuNjI1IC02Mi4yOTY4NzUgTCAxMDUuNjI1IC03OC41MzEyNSBMIDEwMi44NzUgLTc5LjEwOTM3NSBDIDEwMC40NTcwMzEgLTc3LjE3OTY4OCA5Ny4yODkwNjIgLTc1LjU2MjUgOTMuMzc1IC03NC4yNSBDIDg5LjQ2ODc1IC03Mi45NDUzMTIgODMuODQzNzUgLTcxLjY3MTg3NSA3Ni41IC03MC40MjE4NzUgQyA2Ny44MTI1IC02OC45NzI2NTYgNjEuNTU0Njg4IC02Ni40ODQzNzUgNTcuNzM0Mzc1IC02Mi45NTMxMjUgQyA1My45MjE4NzUgLTU5LjQyOTY4OCA1Mi4wMTU2MjUgLTU0LjQyOTY4OCA1Mi4wMTU2MjUgLTQ3Ljk1MzEyNSBDIDUyLjAxNTYyNSAtNDEuMDk3NjU2IDU0LjAzOTA2MiAtMzUuODgyODEyIDU4LjA5Mzc1IC0zMi4zMTI1IEMgNjIuMTU2MjUgLTI4LjczODI4MSA2Ny44MDQ2ODggLTI2Ljk1MzEyNSA3NS4wNDY4NzUgLTI2Ljk1MzEyNSBaIE0gNzUuMDQ2ODc1IC0yNi45NTMxMjUgIi8+PC9nPjwvZz48L2c+PC9zdmc+":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIHpvb21BbmRQYW49Im1hZ25pZnkiIHZpZXdCb3g9IjAgMCAzNzUgMzc0Ljk5OTk5MSIgaGVpZ2h0PSIyNCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmVyc2lvbj0iMS4wIj48ZGVmcz48Zy8+PGNsaXBQYXRoIGlkPSI2MzBiNDVlNzY0Ij48cGF0aCBkPSJNIDAgMjEzLjg3ODkwNiBMIDM3NSAyMTMuODc4OTA2IEwgMzc1IDMwNSBMIDAgMzA1IFogTSAwIDIxMy44Nzg5MDYgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iNDg1M2E1N2I5MiI+PHBhdGggZD0iTSAxNy4yNSAyMTMuODc4OTA2IEwgMzU3Ljc1IDIxMy44Nzg5MDYgQyAzNjIuMzI0MjE5IDIxMy44Nzg5MDYgMzY2LjcxMDkzOCAyMTUuNjk1MzEyIDM2OS45NDkyMTkgMjE4LjkzMzU5NCBDIDM3My4xODM1OTQgMjIyLjE2Nzk2OSAzNzUgMjI2LjU1NDY4OCAzNzUgMjMxLjEyODkwNiBMIDM3NSAyODcuNjE3MTg4IEMgMzc1IDI5Mi4xOTE0MDYgMzczLjE4MzU5NCAyOTYuNTc4MTI1IDM2OS45NDkyMTkgMjk5LjgxMjUgQyAzNjYuNzEwOTM4IDMwMy4wNTA3ODEgMzYyLjMyNDIxOSAzMDQuODY3MTg4IDM1Ny43NSAzMDQuODY3MTg4IEwgMTcuMjUgMzA0Ljg2NzE4OCBDIDEyLjY3NTc4MSAzMDQuODY3MTg4IDguMjg5MDYyIDMwMy4wNTA3ODEgNS4wNTA3ODEgMjk5LjgxMjUgQyAxLjgxNjQwNiAyOTYuNTc4MTI1IDAgMjkyLjE5MTQwNiAwIDI4Ny42MTcxODggTCAwIDIzMS4xMjg5MDYgQyAwIDIyNi41NTQ2ODggMS44MTY0MDYgMjIyLjE2Nzk2OSA1LjA1MDc4MSAyMTguOTMzNTk0IEMgOC4yODkwNjIgMjE1LjY5NTMxMiAxMi42NzU3ODEgMjEzLjg3ODkwNiAxNy4yNSAyMTMuODc4OTA2ICIgY2xpcC1ydWxlPSJub256ZXJvIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoIzYzMGI0NWU3NjQpIj48ZyBjbGlwLXBhdGg9InVybCgjNDg1M2E1N2I5MikiPjxwYXRoIGZpbGw9IiNmZjMxMzEiIGQ9Ik0gMCAyMTMuODc4OTA2IEwgMzc1IDIxMy44Nzg5MDYgTCAzNzUgMzA0LjY5OTIxOSBMIDAgMzA0LjY5OTIxOSBaIE0gMCAyMTMuODc4OTA2ICIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9nPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDQ1LCAyOTguNzc4NTExKSI+PGc+PHBhdGggZD0iTSAyMDMuMjY1NjI1IDAgTCAxNTkuMjE4NzUgMCBMIDE0My4yODEyNSAtNDguODI4MTI1IEwgNjIuMTU2MjUgLTQ4LjgyODEyNSBMIDQ2LjIxODc1IDAgTCAzLjE4NzUgMCBMIDc2LjM1OTM3NSAtMjExLjgxMjUgTCAxMzAuMTA5Mzc1IC0yMTEuODEyNSBaIE0gMTAwLjY4NzUgLTE2Ny42MjUgTCA3My40NTMxMjUgLTg0LjAzMTI1IEwgMTMxLjcwMzEyNSAtODQuMDMxMjUgTCAxMDQuMzEyNSAtMTY3LjYyNSBaIE0gMTAwLjY4NzUgLTE2Ny42MjUgIi8+PC9nPjwvZz48L2c+PGcgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDYuNDUzNzI0LCAyOTguNzc4NTExKSI+PGc+PHBhdGggZD0iTSA2Mi4yOTY4NzUgMy4wNDY4NzUgQyA1Mi4wNTQ2ODggMy4wNDY4NzUgNDMuMTcxODc1IDEuMTYwMTU2IDM1LjY0MDYyNSAtMi42MDkzNzUgQyAyOC4xMDkzNzUgLTYuMzc4OTA2IDIyLjMxMjUgLTExLjkxMDE1NiAxOC4yNSAtMTkuMjAzMTI1IEMgMTQuMTk1MzEyIC0yNi40OTIxODggMTIuMTcxODc1IC0zNS4yNTc4MTIgMTIuMTcxODc1IC00NS41IEMgMTIuMTcxODc1IC01NC45NTcwMzEgMTQuMTk1MzEyIC02Mi44OTQ1MzEgMTguMjUgLTY5LjMxMjUgQyAyMi4zMTI1IC03NS43MzgyODEgMjguNTkzNzUgLTgxLjAwMzkwNiAzNy4wOTM3NSAtODUuMTA5Mzc1IEMgNDUuNTkzNzUgLTg5LjIyMjY1NiA1Ni42OTUzMTIgLTkyLjM5MDYyNSA3MC40MDYyNSAtOTQuNjA5Mzc1IEMgNzkuOTY4NzUgLTk2LjE0ODQzOCA4Ny4yMzQzNzUgLTk3LjgzNTkzOCA5Mi4yMDMxMjUgLTk5LjY3MTg3NSBDIDk3LjE3OTY4OCAtMTAxLjUxNTYyNSAxMDAuNTM5MDYyIC0xMDMuNTkzNzUgMTAyLjI4MTI1IC0xMDUuOTA2MjUgQyAxMDQuMDE5NTMxIC0xMDguMjI2NTYyIDEwNC44OTA2MjUgLTExMS4xNzU3ODEgMTA0Ljg5MDYyNSAtMTE0Ljc1IEMgMTA0Ljg5MDYyNSAtMTE5Ljg2MzI4MSAxMDMuMTAxNTYyIC0xMjMuNzY5NTMxIDk5LjUzMTI1IC0xMjYuNDY4NzUgQyA5NS45NTcwMzEgLTEyOS4xNzU3ODEgOTAuMDE5NTMxIC0xMzAuNTMxMjUgODEuNzE4NzUgLTEzMC41MzEyNSBDIDcyLjgzMjAzMSAtMTMwLjUzMTI1IDY0LjM3ODkwNiAtMTI4LjU1MDc4MSA1Ni4zNTkzNzUgLTEyNC41OTM3NSBDIDQ4LjMzNTkzOCAtMTIwLjYzMjgxMiA0MS4zODI4MTIgLTExNS40MjE4NzUgMzUuNSAtMTA4Ljk1MzEyNSBMIDMyLjU5Mzc1IC0xMDguOTUzMTI1IEwgMTUuNzk2ODc1IC0xMzQuMzEyNSBDIDIzLjkxMDE1NiAtMTQzLjI4OTA2MiAzMy44MTI1IC0xNTAuMjg5MDYyIDQ1LjUgLTE1NS4zMTI1IEMgNTcuMTg3NSAtMTYwLjMzMjAzMSA2OS45Mjk2ODggLTE2Mi44NDM3NSA4My43MzQzNzUgLTE2Mi44NDM3NSBDIDEwNC44OTA2MjUgLTE2Mi44NDM3NSAxMjAuMjAzMTI1IC0xNTguMzUxNTYyIDEyOS42NzE4NzUgLTE0OS4zNzUgQyAxMzkuMTQwNjI1IC0xNDAuMzk0NTMxIDE0My44NzUgLTEyNy42NDQ1MzEgMTQzLjg3NSAtMTExLjEyNSBMIDE0My44NzUgLTQxLjcxODc1IEMgMTQzLjg3NSAtMzQuNTcwMzEyIDE0Ny4wMDc4MTIgLTMxIDE1My4yODEyNSAtMzEgQyAxNTUuNjk1MzEyIC0zMSAxNTguMDY2NDA2IC0zMS40Mzc1IDE2MC4zOTA2MjUgLTMyLjMxMjUgTCAxNjIuNDA2MjUgLTMxLjczNDM3NSBMIDE2NS4zMTI1IC0zLjc2NTYyNSBDIDE2My4wOTM3NSAtMi4zMTY0MDYgMTYwIC0xLjEzMjgxMiAxNTYuMDMxMjUgLTAuMjE4NzUgQyAxNTIuMDcwMzEyIDAuNjk1MzEyIDE0Ny43MjY1NjIgMS4xNTYyNSAxNDMgMS4xNTYyNSBDIDEzMy40Mzc1IDEuMTU2MjUgMTI1Ljk3MjY1NiAtMC42NzU3ODEgMTIwLjYwOTM3NSAtNC4zNDM3NSBDIDExNS4yNTM5MDYgLTguMDE5NTMxIDExMS40MTQwNjIgLTEzLjc2OTUzMSAxMDkuMDkzNzUgLTIxLjU5Mzc1IEwgMTA2LjA0Njg3NSAtMjEuODc1IEMgOTguMjIyNjU2IC01LjI1NzgxMiA4My42NDA2MjUgMy4wNDY4NzUgNjIuMjk2ODc1IDMuMDQ2ODc1IFogTSA3NS4wNDY4NzUgLTI2Ljk1MzEyNSBDIDg0LjMxNjQwNiAtMjYuOTUzMTI1IDkxLjcyNjU2MiAtMzAuMDY2NDA2IDk3LjI4MTI1IC0zNi4yOTY4NzUgQyAxMDIuODQzNzUgLTQyLjUyMzQzOCAxMDUuNjI1IC01MS4xOTE0MDYgMTA1LjYyNSAtNjIuMjk2ODc1IEwgMTA1LjYyNSAtNzguNTMxMjUgTCAxMDIuODU5Mzc1IC03OS4xMDkzNzUgQyAxMDAuNDUzMTI1IC03Ny4xNzE4NzUgOTcuMjg5MDYyIC03NS41NTA3ODEgOTMuMzc1IC03NC4yNSBDIDg5LjQ2ODc1IC03Mi45NDUzMTIgODMuODQzNzUgLTcxLjY2NDA2MiA3Ni41IC03MC40MDYyNSBDIDY3LjgwMDc4MSAtNjguOTU3MDMxIDYxLjU0Njg3NSAtNjYuNDY4NzUgNTcuNzM0Mzc1IC02Mi45Mzc1IEMgNTMuOTIxODc1IC01OS40MTQwNjIgNTIuMDE1NjI1IC01NC40MjE4NzUgNTIuMDE1NjI1IC00Ny45NTMxMjUgQyA1Mi4wMTU2MjUgLTQxLjA5NzY1NiA1NC4wMzkwNjIgLTM1Ljg4MjgxMiA1OC4wOTM3NSAtMzIuMzEyNSBDIDYyLjE1NjI1IC0yOC43MzgyODEgNjcuODA0Njg4IC0yNi45NTMxMjUgNzUuMDQ2ODc1IC0yNi45NTMxMjUgWiBNIDc1LjA0Njg3NSAtMjYuOTUzMTI1ICIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="}),title:(0,I.__)("Low Highlight","beeAddonsBlocks"),onClick:()=>{t(!0)}}),!!c&&(0,M.createElement)(T.Popover,{anchor:z?.current,onClose:()=>t(!1)},(0,M.createElement)(T.PanelBody,{title:(0,I.__)("Low Highlight","beeAddonsBlocks")},(0,M.createElement)(g.ColorPalette,{value:y?.["data-color"],onChange:M=>{D(M?(0,N.applyFormat)(j,{type:"bee-addons-blocks/low-highlight-format",attributes:{"data-color":M,style:`background-image: linear-gradient(to right, ${M}, ${M})`}}):(0,N.removeFormat)(j,"bee-addons-blocks/low-highlight-format"))}}))))}}),class{namespace="beeAddonsBlock/spacer";static register(){const M=new this;M.registerSpacerSettings(),M.registerSpacerControls(),M.registerSpacerProps()}registerSpacerSettings(){wp.hooks.addFilter("blocks.registerBlockType",`${this.namespace}/settings`,this.addSpacerSettings)}addSpacerSettings(M){return"core/spacer"!==M.name||(M.supports={...M.supports,color:!0},M.attributes={...M.attributes,mobileHeight:{type:"string",default:"0"},showOnMobile:{type:"boolean",default:!1}}),M}registerSpacerControls(){wp.hooks.addFilter("editor.BlockEdit",`${this.namespace}/controls`,this.addSpacerControls)}addSpacerControls=D((N=>g=>{if("core/spacer"!==g.name)return(0,M.createElement)(N,{...g});const{attributes:T,setAttributes:D}=g,{mobileHeight:y}=T;return(0,M.createElement)(e,null,(0,M.createElement)(j,null,(0,M.createElement)(A,{title:(0,I.__)("Responsive Settings","beeAddonsBlocks"),initialOpen:!1},(0,M.createElement)("div",{style:{display:"flex"}},(0,M.createElement)(t,{onChange:M=>{g.setAttributes({showOnMobile:M})},checked:g.attributes.showOnMobile}),(0,M.createElement)("span",null,(0,I.__)("Enable spacer on mobile","beeAddonsBlocks"))),g.attributes.showOnMobile&&(0,M.createElement)(z,{label:(0,I.__)("Height","beeAddonsBlocks")},(0,M.createElement)(c,{type:"number",min:0,step:1,value:y||80,onChange:M=>D({mobileHeight:M})})))),(0,M.createElement)(N,{...g}))}),"addSpacerControls");registerSpacerProps(){wp.hooks.addFilter("blocks.getSaveContent.extraProps",`${this.namespace}/props`,this.addSpacerProps)}addSpacerProps(M,N,I){if("core/spacer"!==N.name)return M;const{mobileHeight:g,showOnMobile:T}=I,D=+g.match(/\d+/)[0],j=+T?"block":"hidden";return M.style={...M.style,"--spacerMobileShow":j},!0===T&&g&&D>0&&(M.style={...M.style,"--spacerMobileHeight":g}),M}}.register()}},I={};function g(M){var T=I[M];if(void 0!==T)return T.exports;var D=I[M]={exports:{}};return N[M](D,D.exports,g),D.exports}g.m=N,M=[],g.O=function(N,I,T,D){if(!I){var j=1/0;for(t=0;t<M.length;t++){I=M[t][0],T=M[t][1],D=M[t][2];for(var z=!0,A=0;A<I.length;A++)(!1&D||j>=D)&&Object.keys(g.O).every((function(M){return g.O[M](I[A])}))?I.splice(A--,1):(z=!1,D<j&&(j=D));if(z){M.splice(t--,1);var c=T();void 0!==c&&(N=c)}}return N}D=D||0;for(var t=M.length;t>0&&M[t-1][2]>D;t--)M[t]=M[t-1];M[t]=[I,T,D]},g.o=function(M,N){return Object.prototype.hasOwnProperty.call(M,N)},function(){var M={826:0,431:0};g.O.j=function(N){return 0===M[N]};var N=function(N,I){var T,D,j=I[0],z=I[1],A=I[2],c=0;if(j.some((function(N){return 0!==M[N]}))){for(T in z)g.o(z,T)&&(g.m[T]=z[T]);if(A)var t=A(g)}for(N&&N(I);c<j.length;c++)D=j[c],g.o(M,D)&&M[D]&&M[D][0](),M[D]=0;return g.O(t)},I=self.webpackChunkcurvy=self.webpackChunkcurvy||[];I.forEach(N.bind(null,0)),I.push=N.bind(null,I.push.bind(I))}();var T=g.O(void 0,[431],(function(){return g(743)}));T=g.O(T)}();