(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{719:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-035-rosetta-api-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-035-rosetta-api-support"}},[e._v("#")]),e._v(" ADR 035: Rosetta API Support")]),e._v(" "),a("h2",{attrs:{id:"authors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authors"}},[e._v("#")]),e._v(" Authors")]),e._v(" "),a("ul",[a("li",[e._v("Jonathan Gimeno (@jgimeno)")]),e._v(" "),a("li",[e._v("David Grierson (@senormonito)")]),e._v(" "),a("li",[e._v("Alessio Treglia (@alessio)")])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.rosetta-api.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rosetta API"),a("OutboundLink")],1),e._v(" is an open-source specification and set of tools developed by Coinbase to\nstandardise blockchain interactions.")]),e._v(" "),a("p",[e._v("Through the use of a standard API for integrating blockchain applications it will")]),e._v(" "),a("ul",[a("li",[e._v("Be easier for a user to interact with a given blockchain")]),e._v(" "),a("li",[e._v("Allow exchanges to integrate new blockchains quickly and easily")]),e._v(" "),a("li",[e._v("Enable application developers to build cross-blockchain applications such as block explorers, wallets and dApps at\nconsiderably lower cost and effort.")])]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("It is clear that adding Rosetta API support to the Cosmos SDK will bring value to all the developers and\nCosmos SDK based chains in the ecosystem. How it is implemented is key.")]),e._v(" "),a("p",[e._v("The driving principles of the proposed design are:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Extensibility:")]),e._v(" it must be as riskless and painless as possible for application developers to set-up network\nconfigurations to expose Rosetta API-compliant services.")]),e._v(" "),a("li",[a("strong",[e._v("Long term support:")]),e._v(" This proposal aims to provide support for all the supported Cosmos SDK release series.")]),e._v(" "),a("li",[a("strong",[e._v("Cost-efficiency:")]),e._v(" Backporting changes to Rosetta API specifications from "),a("code",[e._v("master")]),e._v(" to the various stable\nbranches of Cosmos SDK is a cost that needs to be reduced.")])]),e._v(" "),a("p",[e._v("We will achieve these delivering on these principles by the following:")]),e._v(" "),a("ol",[a("li",[e._v("There will be an external repo called "),a("a",{attrs:{href:"https://github.com/tendermint/cosmos-rosetta-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos-rosetta-gateway"),a("OutboundLink")],1),e._v("\nfor the implementation of the core Rosetta API features, particularly:\na. The types and interfaces. This separates design from implementation detail.\nb. Some core implementations: specifically, the "),a("code",[e._v("Service")]),e._v(" functionality as this is independent of the Cosmos SDK version.")]),e._v(" "),a("li",[e._v("Due to differences between the Cosmos release series, each series will have its own specific API implementations of "),a("code",[e._v("Network")]),e._v(" struct and "),a("code",[e._v("Adapter")]),e._v(" interface.")]),e._v(" "),a("li",[e._v("There will be two options for starting an API service in applications:\na. API shares the application process\nb. API-specific process.")])]),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("h3",{attrs:{id:"the-external-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-external-repo"}},[e._v("#")]),e._v(" The External Repo")]),e._v(" "),a("p",[e._v("As section will describe the proposed external library, including the service implementation, plus the defined types and interfaces.")]),e._v(" "),a("h4",{attrs:{id:"service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[e._v("#")]),e._v(" Service")]),e._v(" "),a("p",[a("code",[e._v("Service")]),e._v(" is a simple "),a("code",[e._v("struct")]),e._v(" that is started and listens to the port specified in the options. This is meant to be used across all the Cosmos SDK versions that are actively supported.")]),e._v(" "),a("p",[e._v("The constructor follows:")]),e._v(" "),a("p",[a("code",[e._v("func New(options Options, network Network) (*Service, error)")])]),e._v(" "),a("h4",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),a("p",[a("code",[e._v("Service")]),e._v(" accepts an "),a("code",[e._v("Options")]),e._v(" "),a("code",[e._v("struct")]),e._v(" that holds service configuration values, such as the port the service would be listening to:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBPcHRpb25zIHN0cnVjdCB7CiAgICBMaXN0ZW5BZGRyZXNzIHN0cmluZwp9Cg=="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Network")]),e._v(" type holds network-specific properties (i.e. configuration values) and adapters. Pre-configured concrete types will be available for each Cosmos SDK release. Applications can also create their own custom types.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBOZXR3b3JrIHN0cnVjdCB7CglQcm9wZXJ0aWVzIHJvc2V0dGEuTmV0d29ya1Byb3BlcnRpZXMKCUFkYXB0ZXIgICAgcm9zZXR0YS5BZGFwdGVyCn0K"}}),e._v(" "),a("p",[e._v("A "),a("code",[e._v("NetworkProperties")]),e._v(" "),a("code",[e._v("struct")]),e._v(" comprises basic values that are required by a Rosetta API "),a("code",[e._v("Service")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBOZXR3b3JrUHJvcGVydGllcyBzdHJ1Y3QgewoJLy8gTWFuZGF0b3J5IHByb3BlcnRpZXMKCUJsb2NrY2hhaW4gICAgICAgICAgc3RyaW5nCglOZXR3b3JrICAgICAgICAgICAgIHN0cmluZwoJU3VwcG9ydGVkT3BlcmF0aW9ucyBbXXN0cmluZwp9Cg=="}}),e._v(" "),a("p",[e._v("Rosetta API services use "),a("code",[e._v("Blockchain")]),e._v(" and "),a("code",[e._v("Network")]),e._v(" as identifiers, e.g. the developers of "),a("em",[e._v("gaia")]),e._v(", the application that powers the Cosmos Hub, may want to set those to "),a("code",[e._v("Cosmos Hub")]),e._v(" and "),a("code",[e._v("cosmos-hub-3")]),e._v(" respectively.")]),e._v(" "),a("p",[a("code",[e._v("SupportedOperations")]),e._v(" contains the transaction types that are supported by the library. At the present time,\nonly "),a("code",[e._v("cosmos-sdk/MsgSend")]),e._v(" is supported in Launchpad. Additional operations will be added in due time.")]),e._v(" "),a("p",[e._v("For Launchpad we will map the amino type name to the operation supported, in Stargate we will use the protoc one.")]),e._v(" "),a("h4",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),a("p",[e._v("Every SDK version uses a different format to connect (rpc, gRpc, etc), we have abstracted this in what is called the\nAdapter. This is an interface that defines the methods an adapter implementation must provide in order to be used\nin the "),a("code",[e._v("Network")]),e._v(" interface.")]),e._v(" "),a("p",[e._v("Each Cosmos SDK release series will have their own Adapter implementations.\nDevelopers can implement their own custom adapters as required.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBBZGFwdGVyIGludGVyZmFjZSB7CglEYXRhQVBJCglDb25zdHJ1Y3Rpb25BUEkKfQoKdHlwZSBEYXRhQVBJIGludGVyZmFjZSB7CglzZXJ2ZXIuTmV0d29ya0FQSVNlcnZpY2VyCglzZXJ2ZXIuQWNjb3VudEFQSVNlcnZpY2VyCglzZXJ2ZXIuTWVtcG9vbEFQSVNlcnZpY2VyCglzZXJ2ZXIuQmxvY2tBUElTZXJ2aWNlcgoJc2VydmVyLkNvbnN0cnVjdGlvbkFQSVNlcnZpY2VyCn0KCnR5cGUgQ29uc3RydWN0aW9uQVBJIGludGVyZmFjZSB7CglzZXJ2ZXIuQ29uc3RydWN0aW9uQVBJU2VydmljZXIKfQo="}}),e._v(" "),a("p",[e._v("Example in pseudo-code of an Adapter interface:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBTb21lQWRhcHRlciBzdHJ1Y3QgewoJY29zbW9zQ2xpZW50ICAgICBjbGllbnQKCXRlbmRlcm1pbnRDbGllbnQgY2xpZW50Cn0KCmZ1bmMgTmV3U29tZUFkYXB0ZXIoY29zbW9zQ2xpZW50IGNsaWVudCwgdGVuZGVybWludENsaWVudCBjbGllbnQpIHJvc2V0dGEuQWRhcHRlciB7CglyZXR1cm4gJmFtcDtTb21lQWRhcHRlcntjb3Ntb3NDbGllbnQ6IGNvc21vc0NsaWVudCwgdGVuZGVybWludENsaWVudDogdGVuZGVybWludENsaWVudH0KfQoKZnVuYyAocyBTb21lQWRhcHRlcikgTmV0d29ya1N0YXR1cyhjdHggY29udGV4dC5Db250ZXh0LCByZXF1ZXN0ICp0eXBlcy5OZXR3b3JrUmVxdWVzdCkgKCp0eXBlcy5OZXR3b3JrU3RhdHVzUmVzcG9uc2UsICp0eXBlcy5FcnJvcikgewoJcmVzcCA6PSBzLnRlbmRlcm1pbnRDbGllbnQuQ2FsbFN0YXR1cygpCgkvLyAuLi4gUGFyc2Ugc3RhdHVzIFJlc3BvbnNlCgkvLyBidWlsZCBOZXR3b3JrU3RhdHVzUmVzcG9uc2UKCXJldHVybiBuZXR3b3JrU3RhdHVzUmVzcCwgbmlsCn0KCmZ1bmMgKHMgU29tZUFkYXB0ZXIpIEFjY291bnRCYWxhbmNlKGN0eCBjb250ZXh0LkNvbnRleHQsIHJlcXVlc3QgKnR5cGVzLkFjY291bnRCYWxhbmNlUmVxdWVzdCkgKCp0eXBlcy5BY2NvdW50QmFsYW5jZVJlc3BvbnNlLCAqdHlwZXMuRXJyb3IpIHsKCXJlc3AgOj0gcy5jb3Ntb3NDbGllbnQuQWNjb3VudCgpCgkvLyAuLi4gUGFyc2UgY29zbW9zIHNwZWNpZmljIGFjY291bnQgcmVzcG9uc2UKCS8vIGJ1aWxkIEFjY291bnRCYWxhbmNlUmVzcG9uc2UKCXJldHVybiBBY2NvdW50QmFsYW5jZVJlc3BvbnNlLCBuaWwKfQoKLy8gQW5kIHdlIHJlcGVhdCBmb3IgYWxsIHRoZSBtZXRob2RzIGRlZmluZWQgaW4gdGhlIGludGVyZmFjZS4K"}}),e._v(" "),a("p",[e._v("For further information about the "),a("code",[e._v("Servicer")]),e._v(" interfaces, please refer to the "),a("a",{attrs:{href:"https://pkg.go.dev/github.com/coinbase/rosetta-sdk-go@v0.5.9/server",target:"_blank",rel:"noopener noreferrer"}},[e._v("Coinbase's rosetta-sdk-go's documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_2-cosmos-sdk-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-cosmos-sdk-implementation"}},[e._v("#")]),e._v(" 2. Cosmos SDK Implementation")]),e._v(" "),a("p",[e._v("As described, each Cosmos SDK release series will have version specific implementations of "),a("code",[e._v("Network")]),e._v(" and "),a("code",[e._v("Adapter")]),e._v(", as\nwell as a "),a("code",[e._v("NewNetwork")]),e._v(" constructor.")]),e._v(" "),a("p",[e._v("Due to separation of interface and implementation, application developers have the option to override as needed,\nusing this code as reference.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gTmV3TmV0d29yayByZXR1cm5zIHRoZSBkZWZhdWx0IGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb24uCmZ1bmMgTmV3TmV0d29yayhvcHRpb25zIE9wdGlvbnMpIHNlcnZpY2UuTmV0d29yayB7Cgljb3Ntb3NDbGllbnQgOj0gY29zbW9zLk5ld0NsaWVudChmbXQuU3ByaW50ZigmcXVvdDtodHRwOi8vJXMmcXVvdDssIG9wdGlvbnMuQ29zbW9zRW5kcG9pbnQpKQoJdGVuZGVybWludENsaWVudCA6PSB0ZW5kZXJtaW50Lk5ld0NsaWVudChmbXQuU3ByaW50ZigmcXVvdDtodHRwOi8vJXMmcXVvdDssIG9wdGlvbnMuVGVuZGVybWludEVuZHBvaW50KSkKCglyZXR1cm4gc2VydmljZS5OZXR3b3JrewoJCVByb3BlcnRpZXM6IHJvc2V0dGEuTmV0d29ya1Byb3BlcnRpZXN7CgkJCUJsb2NrY2hhaW46ICAgICAgICAgIG9wdGlvbnMuQmxvY2tjaGFpbiwKCQkJTmV0d29yazogICAgICAgICAgICAgb3B0aW9ucy5OZXR3b3JrLAoJCQlTdXBwb3J0ZWRPcGVyYXRpb25zOiBbXXN0cmluZ3tPcGVyYXRpb25UcmFuc2Zlcn0sCgkJfSwKCQlBZGFwdGVyOiBuZXdBZGFwdGVyKAoJCQljb3Ntb3NDbGllbnQsCgkJCXRlbmRlcm1pbnRDbGllbnQsCgkJCXByb3BlcnRpZXN7CgkJCQlCbG9ja2NoYWluOiAgIG9wdGlvbnMuQmxvY2tjaGFpbiwKCQkJCU5ldHdvcms6ICAgICAgb3B0aW9ucy5OZXR3b3JrLAoJCQkJT2ZmbGluZU1vZGU6ICBvcHRpb25zLk9mZmxpbmVNb2RlLAoJCQl9LAoJCSksCgl9Cn0K"}}),e._v(" "),a("h3",{attrs:{id:"_3-api-service-invocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-api-service-invocation"}},[e._v("#")]),e._v(" 3. API service invocation")]),e._v(" "),a("p",[e._v("As stated at the start, application developers will have two methods for invocation of the Rosetta API service:")]),e._v(" "),a("ol",[a("li",[e._v("Shared process for both application and API")]),e._v(" "),a("li",[e._v("Standalone API service")])]),e._v(" "),a("h4",{attrs:{id:"shared-process-only-stargate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-process-only-stargate"}},[e._v("#")]),e._v(" Shared Process (Only Stargate)")]),e._v(" "),a("p",[e._v("Rosetta API service could run within the same execution process as the application. New configuration option and\ncommand line flags would be provided to support this:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"CWlmIGNvbmZpZy5Sb3NldHRhLkVuYWJsZSB7CiAgICAgLi4uLgogICAgICAgICAgICBnZXQgY29udGVjeHQsIGZsYWdzLCBldGMKICAgICAgICAJLi4uCiAgICAgICAgICAgIAogICAgICAgICAgICBoLCBlcnIgOj0gc2VydmljZS5OZXcoCiAgICAgICAgICAgICAgICBzZXJ2aWNlLk9wdGlvbnN7TGlzdGVuQWRkcmVzczogY29uZmlnLlJvc2V0dGEuTGlzdGVuQWRkcmVzc30sCiAgICAgICAgICAgICAgICByb3NldHRhLk5ld05ldHdvcmsoY2RjLCBvcHRpb25zKSwKICAgICAgICAgICAgKQogICAgICAgICAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICAgICAgfQogICAgICAgICAgICAKICAgICAgICAgICAgLi4uCiAgICAgICAgICAgIAogICAgICAgICAgICBnbyBmdW5jKCkgewoJCQlpZiBlcnIgOj0gaC5TdGFydChjb25maWcpOyBlcnIgIT0gbmlsIHsKCQkJCWVyckNoICZsdDstIGVycgoJCQl9CgkJICAgIH0oKQogICAgfQoK"}}),e._v(" "),a("h4",{attrs:{id:"separate-api-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#separate-api-service"}},[e._v("#")]),e._v(" Separate API service")]),e._v(" "),a("p",[e._v("Client application developers can write a new command to launch a Rosetta API server as a separate process too:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"ZnVuYyBSb3NldHRhQ29tbWFuZChjZGMgKmNvZGVjLkNvZGVjKSAqY29icmEuQ29tbWFuZCB7CgogICAgLi4uCiAgICBjbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewogICAgCVVzZTogICAmcXVvdDtyb3NldHRhJnF1b3Q7LAogICAgICAgIC4uLi4KICAgICAgICAKCQlSdW5FOiBmdW5jKGNtZCAqY29icmEuQ29tbWFuZCwgYXJncyBbXXN0cmluZykgZXJyb3IgewogICAgICAgICAgICAuLi4uCiAgICAgICAgICAgIGdldCBjb250ZWN4dCwgZmxhZ3MsIGV0YwogICAgICAgIAkuLi4KICAgICAgICAgICAgCiAgICAgICAgICAgIGgsIGVyciA6PSBzZXJ2aWNlLk5ldygKICAgICAgICAgICAgICAgICAgc2VydmljZS5PcHRpb25ze0VuZHBvaW50OiBlbmRwb2ludH0sCiAgICAgICAgICAgICAgICAgIHJvc2V0dGEuTmV3TmV0d29yayhjZGMsIG9wdGlvbnMpLAogICAgICAgICAgICApCiAgICAgICAgICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgICAgICAJcmV0dXJuIGVycgogICAgICAgICAgICB9CiAgICAgICAgICAgIAogICAgICAgICAgICAuLi4KICAgICAgICAgICAgCiAgICAgICAgICAgIGguU3RhcnQoKQogICAgICAgIH0KICAgIH0KICAgIC4uLgoKfQo="}}),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposed")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Out-of-the-box Rosetta API support within Cosmos SDK.")]),e._v(" "),a("li",[e._v("Blockchain interface standardisation")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[e._v("https://www.rosetta-api.org/")]),e._v(" "),a("li",[e._v("https://github.com/tendermint/cosmos-rosetta-gateway")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);