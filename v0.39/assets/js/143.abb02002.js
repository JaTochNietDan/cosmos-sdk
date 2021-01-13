(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{829:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[t._v("#")]),t._v(" Types")]),t._v(" "),a("p",[t._v("Besides accounts (specified in "),a("RouterLink",{attrs:{to:"/modules/auth/02_state.html"}},[t._v("State")]),t._v("), the types exposed by the auth module\nare "),a("code",[t._v("StdFee")]),t._v(", the combination of an amount and gas limit, "),a("code",[t._v("StdSignature")]),t._v(", the combination\nof an optional public key and a cryptographic signature as a byte array, "),a("code",[t._v("StdTx")]),t._v(",\na struct which implements the "),a("code",[t._v("sdk.Tx")]),t._v(" interface using "),a("code",[t._v("StdFee")]),t._v(" and "),a("code",[t._v("StdSignature")]),t._v(", and\n"),a("code",[t._v("StdSignDoc")]),t._v(", a replay-prevention structure for "),a("code",[t._v("StdTx")]),t._v(" which transaction senders must sign over.")],1),t._v(" "),a("h2",{attrs:{id:"stdfee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdfee"}},[t._v("#")]),t._v(" StdFee")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("StdFee")]),t._v(' is simply the combination of a fee amount, in any number of denominations,\nand a gas limit (where dividing the amount by the gas limit gives a "gas price").')]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdGRGZWUgc3RydWN0IHsKICBBbW91bnQgQ29pbnMKICBHYXMgICAgdWludDY0Cn0K"}}),t._v(" "),a("h2",{attrs:{id:"stdsignature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdsignature"}},[t._v("#")]),t._v(" StdSignature")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("StdSignature")]),t._v(" is the combination of an optional public key and a cryptographic signature\nas a byte array. The SDK is agnostic to particular key or signature formats and supports any\nsupported by the "),a("code",[t._v("PubKey")]),t._v(" interface.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdGRTaWduYXR1cmUgc3RydWN0IHsKICBQdWJLZXkgICAgUHViS2V5CiAgU2lnbmF0dXJlIFtdYnl0ZQp9Cg=="}}),t._v(" "),a("h2",{attrs:{id:"stdtx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdtx"}},[t._v("#")]),t._v(" StdTx")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("StdTx")]),t._v(" is a struct which implements the "),a("code",[t._v("sdk.Tx")]),t._v(" interface, and is likely to be generic\nenough to serve the purposes of many Cosmos SDK blockchains.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdGRUeCBzdHJ1Y3QgewogIE1zZ3MgICAgICAgIFtdc2RrLk1zZwogIEZlZSAgICAgICAgIFN0ZEZlZSAgCiAgU2lnbmF0dXJlcyAgW11TdGRTaWduYXR1cmUKICBNZW1vICAgICAgICBzdHJpbmcKfQo="}}),t._v(" "),a("h2",{attrs:{id:"stdsigndoc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdsigndoc"}},[t._v("#")]),t._v(" StdSignDoc")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("StdSignDoc")]),t._v(" is a replay-prevention structure to be signed over, which ensures that\nany submitted transaction (which is simply a signature over a particular bytestring)\nwill only be executable once on a particular blockchain.")]),t._v(" "),a("p",[a("code",[t._v("json.RawMessage")]),t._v(" is preferred over using the SDK types for future compatibility.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdGRTaWduRG9jIHN0cnVjdCB7CiAgQWNjb3VudE51bWJlciB1aW50NjQKICBDaGFpbklEICAgICAgIHN0cmluZwogIEZlZSAgICAgICAgICAganNvbi5SYXdNZXNzYWdlCiAgTWVtbyAgICAgICAgICBzdHJpbmcKICBNc2dzICAgICAgICAgIFtdanNvbi5SYXdNZXNzYWdlCiAgU2VxdWVuY2UgICAgICB1aW50NjQKfQo="}})],1)}),[],!1,null,null,null);e.default=n.exports}}]);