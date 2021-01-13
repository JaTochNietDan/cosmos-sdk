(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{704:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"gas-and-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-and-fees"}},[e._v("#")]),e._v(" Gas and Fees")]),e._v(" "),a("h2",{attrs:{hide:"",id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK Application")])],1)]),e._v(" "),a("h2",{attrs:{id:"introduction-to-gas-and-fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-gas-and-fees"}},[e._v("#")]),e._v(" Introduction to "),a("code",[e._v("Gas")]),e._v(" and "),a("code",[e._v("Fees")])]),e._v(" "),a("p",[e._v("In the Cosmos SDK, "),a("code",[e._v("gas")]),e._v(" is a special unit that is used to track the consumption of resources during execution. "),a("code",[e._v("gas")]),e._v(" is typically consumed whenever read and writes are made to the store, but it can also be consumed if expensive computation needs to be done. It serves two main purposes:")]),e._v(" "),a("ul",[a("li",[e._v("Make sure blocks are not consuming too many resources and will be finalized. This is implemented by default in the SDK via the "),a("a",{attrs:{href:"#block-gas-meter"}},[e._v("block gas meter")]),e._v(".")]),e._v(" "),a("li",[e._v("Prevent spam and abuse from end-user. To this end, "),a("code",[e._v("gas")]),e._v(" consumed during "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[a("code",[e._v("message")])]),e._v(" execution is typically priced, resulting in a "),a("code",[e._v("fee")]),e._v(" ("),a("code",[e._v("fees = gas * gas-prices")]),e._v("). "),a("code",[e._v("fees")]),e._v(" generally have to be paid by the sender of the "),a("code",[e._v("message")]),e._v(". Note that the SDK does not enforce "),a("code",[e._v("gas")]),e._v(" pricing by default, as there may be other ways to prevent spam (e.g. bandwidth schemes). Still, most applications will implement "),a("code",[e._v("fee")]),e._v(" mechanisms to prevent spam. This is done via the "),a("a",{attrs:{href:"#antehandler"}},[a("code",[e._v("AnteHandler")])]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"gas-meter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-meter"}},[e._v("#")]),e._v(" Gas Meter")]),e._v(" "),a("p",[e._v("In the Cosmos SDK, "),a("code",[e._v("gas")]),e._v(" is a simple alias for "),a("code",[e._v("uint64")]),e._v(", and is managed by an object called a "),a("em",[e._v("gas meter")]),e._v(". Gas meters implement the "),a("code",[e._v("GasMeter")]),e._v(" interface")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gR2FzTWV0ZXIgaW50ZXJmYWNlIHRvIHRyYWNrIGdhcyBjb25zdW1wdGlvbgp0eXBlIEdhc01ldGVyIGludGVyZmFjZSB7CglHYXNDb25zdW1lZCgpIEdhcwoJR2FzQ29uc3VtZWRUb0xpbWl0KCkgR2FzCglMaW1pdCgpIEdhcwoJQ29uc3VtZUdhcyhhbW91bnQgR2FzLCBkZXNjcmlwdG9yIHN0cmluZykKCUlzUGFzdExpbWl0KCkgYm9vbAoJSXNPdXRPZkdhcygpIGJvb2wKfQ=="}})],1),e._v(" "),a("p",[e._v("where:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("GasConsumed()")]),e._v(" returns the amount of gas that was consumed by the gas meter instance.")]),e._v(" "),a("li",[a("code",[e._v("GasConsumedToLimit()")]),e._v(" returns the amount of gas that was consumed by gas meter instance, or the limit if it is reached.")]),e._v(" "),a("li",[a("code",[e._v("Limit()")]),e._v(" returns the limit of the gas meter instance. "),a("code",[e._v("0")]),e._v(" if the gas meter is infinite.")]),e._v(" "),a("li",[a("code",[e._v("ConsumeGas(amount Gas, descriptor string)")]),e._v(" consumes the amount of "),a("code",[e._v("gas")]),e._v(" provided. If the "),a("code",[e._v("gas")]),e._v(" overflows, it panics with the "),a("code",[e._v("descriptor")]),e._v(" message. If the gas meter is not infinite, it panics if "),a("code",[e._v("gas")]),e._v(" consumed goes above the limit.")]),e._v(" "),a("li",[a("code",[e._v("IsPastLimit()")]),e._v(" returns "),a("code",[e._v("true")]),e._v(" if the amount of gas consumed by the gas meter instance is strictly above the limit, "),a("code",[e._v("false")]),e._v(" otherwise.")]),e._v(" "),a("li",[a("code",[e._v("IsOutOfGas()")]),e._v(" returns "),a("code",[e._v("true")]),e._v(" if the amount of gas consumed by the gas meter instance is above or equal to the limit, "),a("code",[e._v("false")]),e._v(" otherwise.")])]),e._v(" "),a("p",[e._v("The gas meter is generally held in "),a("RouterLink",{attrs:{to:"/core/context.html"}},[a("code",[e._v("ctx")])]),e._v(", and consuming gas is done with the following pattern:")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyhhbW91bnQsICZxdW90O2Rlc2NyaXB0aW9uJnF1b3Q7KQo="}}),e._v(" "),a("p",[e._v("By default, the Cosmos SDK makes use of two different gas meters, the "),a("a",{attrs:{href:"#main-gas-metter%5B"}},[e._v("main gas meter")]),e._v(" and the "),a("a",{attrs:{href:"#block-gas-meter"}},[e._v("block gas meter")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"main-gas-meter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-gas-meter"}},[e._v("#")]),e._v(" Main Gas Meter")]),e._v(" "),a("p",[a("code",[e._v("ctx.GasMeter()")]),e._v(" is the main gas meter of the application. The main gas meter is initialized in "),a("code",[e._v("BeginBlock")]),e._v(" via "),a("code",[e._v("setDeliverState")]),e._v(", and then tracks gas consumption during execution sequences that lead to state-transitions, i.e. those originally triggered by "),a("RouterLink",{attrs:{to:"/core/baseapp.html#beginblock"}},[a("code",[e._v("BeginBlock")])]),e._v(", "),a("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[a("code",[e._v("DeliverTx")])]),e._v(" and "),a("RouterLink",{attrs:{to:"/core/baseapp.html#endblock"}},[a("code",[e._v("EndBlock")])]),e._v(". At the beginning of each "),a("code",[e._v("DeliverTx")]),e._v(", the main gas meter "),a("strong",[e._v("must be set to 0")]),e._v(" in the "),a("a",{attrs:{href:"#antehandler"}},[a("code",[e._v("AnteHandler")])]),e._v(", so that it can track gas comsumption per-transaction.")],1),e._v(" "),a("p",[e._v("Gas comsumption can be done manually, generally by the module developer in the "),a("RouterLink",{attrs:{to:"/building-modules/beginblock-endblock.html"}},[a("code",[e._v("BeginBlocker")]),e._v(", "),a("code",[e._v("EndBlocker")])]),e._v(" or "),a("RouterLink",{attrs:{to:"/building-modules/handler.html"}},[a("code",[e._v("handler")])]),e._v(", but most of the time it is done automatically whenever there is a read or write to the store. This automatic gas consumption logic is implemented in a special store called "),a("RouterLink",{attrs:{to:"/core/store.html#gaskv-store"}},[a("code",[e._v("GasKv")])]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"block-gas-meter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-gas-meter"}},[e._v("#")]),e._v(" Block Gas Meter")]),e._v(" "),a("p",[a("code",[e._v("ctx.BlockGasMeter()")]),e._v(" is the gas meter used to track gas consumption per block and make sure it does not go above a certain limit. A new instance of the "),a("code",[e._v("BlockGasMeter")]),e._v(" is created each time "),a("RouterLink",{attrs:{to:"/core/baseapp.html#beginblock"}},[a("code",[e._v("BeginBlock")])]),e._v(" is called. The "),a("code",[e._v("BlockGasMeter")]),e._v(" is finite, and the limit of gas per block is defined in the application's consensus parameters. By default Cosmos SDK applications use the default consensus parameters provided by Tendermint:")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRGVmYXVsdEJsb2NrUGFyYW1zIHJldHVybnMgYSBkZWZhdWx0IEJsb2NrUGFyYW1zLgpmdW5jIERlZmF1bHRCbG9ja1BhcmFtcygpIEJsb2NrUGFyYW1zIHsKCXJldHVybiBCbG9ja1BhcmFtc3sKCQlNYXhCeXRlczogICAyMjAyMDA5NiwgLy8gMjFNQgoJCU1heEdhczogICAgIC0xLAoJCVRpbWVJb3RhTXM6IDEwMDAsIC8vIDFzCgl9Cn0="}})],1),e._v(" "),a("p",[e._v("When a new "),a("RouterLink",{attrs:{to:"/core/transactions.html"}},[e._v("transaction")]),e._v(" is being processed via "),a("code",[e._v("DeliverTx")]),e._v(", the current value of "),a("code",[e._v("BlockGasMeter")]),e._v(" is checked to see if it is above the limit. If it is, "),a("code",[e._v("DeliverTx")]),e._v(" returns immediately. This can happen even with the first transaction in a block, as "),a("code",[e._v("BeginBlock")]),e._v(" itself can consume gas. If not, the transaction is processed normally. At the end of "),a("code",[e._v("DeliverTx")]),e._v(", the gas tracked by "),a("code",[e._v("ctx.BlockGasMeter()")]),e._v(" is increased by the amount consumed to process the transaction:")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkJsb2NrR2FzTWV0ZXIoKS5Db25zdW1lR2FzKAoJY3R4Lkdhc01ldGVyKCkuR2FzQ29uc3VtZWRUb0xpbWl0KCksCgkmcXVvdDtibG9jayBnYXMgbWV0ZXImcXVvdDssCikK"}}),e._v(" "),a("h2",{attrs:{id:"antehandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antehandler"}},[e._v("#")]),e._v(" AnteHandler")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("AnteHandler")]),e._v(" is a special "),a("code",[e._v("handler")]),e._v(" that is run for every transaction during "),a("code",[e._v("CheckTx")]),e._v(" and "),a("code",[e._v("DeliverTx")]),e._v(", before the "),a("code",[e._v("handler")]),e._v(" of each "),a("code",[e._v("message")]),e._v(" in the transaction. "),a("code",[e._v("AnteHandler")]),e._v("s have a different signature than "),a("code",[e._v("handler")]),e._v("s:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQW50ZUhhbmRsZXIgYXV0aGVudGljYXRlcyB0cmFuc2FjdGlvbnMsIGJlZm9yZSB0aGVpciBpbnRlcm5hbCBtZXNzYWdlcyBhcmUgaGFuZGxlZC4KLy8gSWYgbmV3Q3R4LklzWmVybygpLCBjdHggaXMgdXNlZCBpbnN0ZWFkLgp0eXBlIEFudGVIYW5kbGVyIGZ1bmMoY3R4IENvbnRleHQsIHR4IFR4LCBzaW11bGF0ZSBib29sKSAobmV3Q3R4IENvbnRleHQsIHJlc3VsdCBSZXN1bHQsIGFib3J0IGJvb2wpCg=="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("anteHandler")]),e._v(" is not implemented in the core SDK but in a module. This gives the possibility to developers to choose which version of "),a("code",[e._v("AnteHandler")]),e._v("  fits their application's needs. That said, most applications today use the default implementation defined in the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/auth",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("auth")]),e._v(" module"),a("OutboundLink")],1),e._v(". Here is what the "),a("code",[e._v("anteHandler")]),e._v(" is intended to do in a normal Cosmos SDK application:")]),e._v(" "),a("ul",[a("li",[e._v("Verify that the transaction are of the correct type. Transaction types are defined in the module that implements the "),a("code",[e._v("anteHandler")]),e._v(", and they follow the transaction interface:\n"),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHJhbnNhY3Rpb25zIG9iamVjdHMgbXVzdCBmdWxmaWxsIHRoZSBUeAp0eXBlIFR4IGludGVyZmFjZSB7CgkvLyBHZXRzIHRoZSBhbGwgdGhlIHRyYW5zYWN0aW9uJ3MgbWVzc2FnZXMuCglHZXRNc2dzKCkgW11Nc2cKCgkvLyBWYWxpZGF0ZUJhc2ljIGRvZXMgYSBzaW1wbGUgYW5kIGxpZ2h0d2VpZ2h0IHZhbGlkYXRpb24gY2hlY2sgdGhhdCBkb2Vzbid0CgkvLyByZXF1aXJlIGFjY2VzcyB0byBhbnkgb3RoZXIgaW5mb3JtYXRpb24uCglWYWxpZGF0ZUJhc2ljKCkgRXJyb3IKfQ=="}}),e._v("\nThis enables developers to play with various types for the transaction of their application. In the default "),a("code",[e._v("auth")]),e._v(" module, the standard transaction type is "),a("code",[e._v("StdTx")]),e._v(":\n"),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU3RkVHggaXMgYSBzdGFuZGFyZCB3YXkgdG8gd3JhcCBhIE1zZyB3aXRoIEZlZSBhbmQgU2lnbmF0dXJlcy4KLy8gTk9URTogdGhlIGZpcnN0IHNpZ25hdHVyZSBpcyB0aGUgZmVlIHBheWVyIChTaWduYXR1cmVzIG11c3Qgbm90IGJlIG5pbCkuCnR5cGUgU3RkVHggc3RydWN0IHsKCU1zZ3MgICAgICAgW11zZGsuTXNnICAgICAgYGpzb246JnF1b3Q7bXNnJnF1b3Q7IHlhbWw6JnF1b3Q7bXNnJnF1b3Q7YAoJRmVlICAgICAgICBTdGRGZWUgICAgICAgICBganNvbjomcXVvdDtmZWUmcXVvdDsgeWFtbDomcXVvdDtmZWUmcXVvdDtgCglTaWduYXR1cmVzIFtdU3RkU2lnbmF0dXJlIGBqc29uOiZxdW90O3NpZ25hdHVyZXMmcXVvdDsgeWFtbDomcXVvdDtzaWduYXR1cmVzJnF1b3Q7YAoJTWVtbyAgICAgICBzdHJpbmcgICAgICAgICBganNvbjomcXVvdDttZW1vJnF1b3Q7IHlhbWw6JnF1b3Q7bWVtbyZxdW90O2AKfQ=="}})],1),e._v(" "),a("li",[e._v("Verify signatures for each "),a("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[a("code",[e._v("message")])]),e._v(" contained in the transaction. Each "),a("code",[e._v("message")]),e._v(" should be signed by one or multiple sender(s), and these signatures must be verified in the "),a("code",[e._v("anteHandler")]),e._v(".")],1),e._v(" "),a("li",[e._v("During "),a("code",[e._v("CheckTx")]),e._v(", verify that the gas prices provided with the transaction is greater than the local "),a("code",[e._v("min-gas-prices")]),e._v(" (as a reminder, gas-prices can be deducted from the following equation: "),a("code",[e._v("fees = gas * gas-prices")]),e._v("). "),a("code",[e._v("min-gas-prices")]),e._v(" is a parameter local to each full-node and used during "),a("code",[e._v("CheckTx")]),e._v(" to discard transactions that do not provide a minimum amount of fees. This ensure that the mempool cannot be spammed with garbage transactions.")]),e._v(" "),a("li",[e._v("Verify that the sender of the transaction has enough funds to cover for the "),a("code",[e._v("fees")]),e._v(". When the end-user generates a transaction, they must indicate 2 of the 3 following parameters (the third one being implicit): "),a("code",[e._v("fees")]),e._v(", "),a("code",[e._v("gas")]),e._v(" and "),a("code",[e._v("gas-prices")]),e._v(". This signals how much they are willing to pay for nodes to execute their transaction. The provided "),a("code",[e._v("gas")]),e._v(" value is stored in a parameter called "),a("code",[e._v("GasWanted")]),e._v(" for later use.")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("newCtx.GasMeter")]),e._v(" to 0, with a limit of "),a("code",[e._v("GasWanted")]),e._v(". "),a("strong",[e._v("This step is extremely important")]),e._v(", as it not only makes sure the transaction cannot consume infinite gas, but also that "),a("code",[e._v("ctx.GasMeter")]),e._v(" is reset in-between each "),a("code",[e._v("DeliverTx")]),e._v(" ("),a("code",[e._v("ctx")]),e._v(" is set to "),a("code",[e._v("newCtx")]),e._v(" after "),a("code",[e._v("anteHandler")]),e._v(" is run, and the "),a("code",[e._v("anteHandler")]),e._v(" is run each time "),a("code",[e._v("DeliverTx")]),e._v(" is called).")])]),e._v(" "),a("p",[e._v("As explained above, the "),a("code",[e._v("anteHandler")]),e._v(" returns a maximum limit of "),a("code",[e._v("gas")]),e._v(" the transaction can consume during execution called "),a("code",[e._v("GasWanted")]),e._v(". The actual amount consumed in the end is denominated "),a("code",[e._v("GasUsed")]),e._v(", and we must therefore have "),a("code",[e._v("GasUsed =< GasWanted")]),e._v(". Both "),a("code",[e._v("GasWanted")]),e._v(" and "),a("code",[e._v("GasUsed")]),e._v(" are relayed to the underlying consensus engine when "),a("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[a("code",[e._v("DeliverTx")])]),e._v(" returns.")],1),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about "),a("RouterLink",{attrs:{to:"/core/baseapp.html"}},[e._v("baseapp")])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);