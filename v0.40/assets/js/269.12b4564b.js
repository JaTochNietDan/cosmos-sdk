(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{694:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"generating-signing-and-broadcasting-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-signing-and-broadcasting-transactions"}},[e._v("#")]),e._v(" Generating, Signing and Broadcasting Transactions")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("This document describes how to generate an (unsigned) transaction, signing it (with one or multiple keys), and broadcasting it to the network.")]),e._v(" "),a("h2",{attrs:{id:"using-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli"}},[e._v("#")]),e._v(" Using the CLI")]),e._v(" "),a("p",[e._v("The easiest way to send transactions is using the CLI, as we have seen in the previous page when "),a("RouterLink",{attrs:{to:"/run-node/interact-node.html#using-the-cli"}},[e._v("interacting with a node")]),e._v(". For example, running the following command")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBiYW5rIHNlbmQgJE1ZX1ZBTElEQVRPUl9BRERSRVNTICRSRUNJUElFTlQgMTAwMHN0YWtlIC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbgo="}}),e._v(" "),a("p",[e._v("will run the following steps:")]),e._v(" "),a("ul",[a("li",[e._v("generate a transaction with one "),a("code",[e._v("Msg")]),e._v(" ("),a("code",[e._v("x/bank")]),e._v("'s "),a("code",[e._v("MsgSend")]),e._v("), and print the generated transaction to the console.")]),e._v(" "),a("li",[e._v("ask the user for confirmation to send the transaction from the "),a("code",[e._v("$MY_VALIDATOR_ADDRESS")]),e._v(" account.")]),e._v(" "),a("li",[e._v("fetch "),a("code",[e._v("$MY_VALIDATOR_ADDRESS")]),e._v(" in the keyring. This is possible because we have "),a("RouterLink",{attrs:{to:"/run-node/keyring.html"}},[e._v("set up the CLI's keyring")]),e._v(" in a previous step.")],1),e._v(" "),a("li",[e._v("sign the generated transaction with the keyring's account.")]),e._v(" "),a("li",[e._v("broadcast the signed transaction to the network. This is possible because the CLI connects to the node's Tendermint RPC endpoint.")])]),e._v(" "),a("p",[e._v("The CLI bundles all the necessary steps into a simple-to-use user experience. However, it's possible to run all the steps individually too.")]),e._v(" "),a("h3",{attrs:{id:"generating-a-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-transaction"}},[e._v("#")]),e._v(" Generating a Transaction")]),e._v(" "),a("p",[e._v("Generating a transaction can simply be done by appending the "),a("code",[e._v("--generate-only")]),e._v(" flag on any "),a("code",[e._v("tx")]),e._v(" command, e.g.:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBiYW5rIHNlbmQgJE1ZX1ZBTElEQVRPUl9BRERSRVNTICRSRUNJUElFTlQgMTAwMHN0YWtlIC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbiAtLWdlbmVyYXRlLW9ubHkK"}}),e._v(" "),a("p",[e._v("This will output the unsigned transaction as JSON in the console. We can also save the unsigned transaction to a file (to be passed around between signers more easily) by appending "),a("code",[e._v("> unsigned_tx.json")]),e._v(" to the above command.")]),e._v(" "),a("h3",{attrs:{id:"signing-a-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing-a-transaction"}},[e._v("#")]),e._v(" Signing a Transaction")]),e._v(" "),a("p",[e._v("Signing a transaction using the CLI requires the unsigned transaction to be saved in a file. Let's assume the unsigned transaction is in a file called "),a("code",[e._v("unsigned_tx.json")]),e._v(" in the current directory (see previous paragraph on how to do that). Then, simply run the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBzaWduIHVuc2lnbmVkX3R4Lmpzb24gLS1jaGFpbi1pZCBteS10ZXN0LWNoYWluIC0ta2V5cmluZy1iYWNrZW5kIHRlc3QgLS1mcm9tICRNWV9WQUxJREFUT1JfQUREUkVTUwo="}}),e._v(" "),a("p",[e._v("This command will decode the unsigned transaction and sign it with "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" with "),a("code",[e._v("$MY_VALIDATOR_ADDRESS")]),e._v("'s key, which we already set up in the keyring. The signed transaction will be output as JSON to the console, and, as above, we can save it to a file by appending "),a("code",[e._v("> signed_tx.json")]),e._v(".")]),e._v(" "),a("p",[e._v("Some useful flags to consider in the "),a("code",[e._v("tx sign")]),e._v(" command:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--sign-mode")]),e._v(": you may use "),a("code",[e._v("amino-json")]),e._v(" to sign the transaction using "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(",")]),e._v(" "),a("li",[a("code",[e._v("--offline")]),e._v(": sign in offline mode. This means that the "),a("code",[e._v("tx sign")]),e._v(" command doesn't connect to the node to retrieve the signer's account number and sequence, both needed for signing. In this case, you must manually supply the "),a("code",[e._v("--account-number")]),e._v(" and "),a("code",[e._v("--sequence")]),e._v(" flags. This is useful for offline signing, i.e. signing in a secure environment which doesn't have access to the internet.")])]),e._v(" "),a("h4",{attrs:{id:"signing-with-multiple-signers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing-with-multiple-signers"}},[e._v("#")]),e._v(" Signing with Multiple Signers")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("Please note that signing a transaction with multiple signers or with a multisig account, where at least one signer uses "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(", is not possible as of yet. You may follow "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/8141",target:"_blank",rel:"noopener noreferrer"}},[e._v("this Github issue"),a("OutboundLink")],1),e._v(" for more info.")])]),e._v(" "),a("p",[e._v("Signing with multiple signers is done with the "),a("code",[e._v("tx multisign")]),e._v(" command. This command assumes that all signers use "),a("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(". The flow is similar to the "),a("code",[e._v("tx sign")]),e._v(" command flow, but instead of signing an unsigned transaction file, each signer signs the file signed by previous signer(s). The "),a("code",[e._v("tx multisign")]),e._v(" command will append signatures to the existing transactions. It is important that signers sign the transaction "),a("strong",[e._v("in the same order")]),e._v(" as given by the transaction, which is retrievable using the "),a("code",[e._v("GetSigners()")]),e._v(" method.")]),e._v(" "),a("p",[e._v("For example, starting with the "),a("code",[e._v("unsigned_tx.json")]),e._v(", and assuming the transaction has 4 signers, we would run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBMZXQgc2lnbmVyIDEgc2lnbiB0aGUgdW5zaWduZWQgdHguCnNpbWQgdHggbXVsdGlzaWduc2lnbiB1bnNpZ25lZF90eC5qc29uIHNpZ25lcl9rZXlfMSAtLWNoYWluLWlkIG15LXRlc3QtY2hhaW4gLS1rZXlyaW5nLWJhY2tlbmQgdGVzdCAmZ3Q7IHBhcnRpYWxfdHhfMS5qc29uCiMgU2lnbmVyIDIgYXBwZW5kcyB0aGVpciBzaWduYXR1cmUuCnNpbWQgdHggbXVsdGlzaWduc2lnbiBwYXJ0aWFsX3R4XzEuanNvbiBzaWduZXJfa2V5XzIgLS1jaGFpbi1pZCBteS10ZXN0LWNoYWluIC0ta2V5cmluZy1iYWNrZW5kIHRlc3QgJmd0OyBwYXJ0aWFsX3R4XzIuanNvbgojIFNpZ25lciAzIGFwcGVuZHMgdGhlaXIgc2lnbmF0dXJlLgpzaW1kIHR4IG11bHRpc2lnbnNpZ24gcGFydGlhbF90eF8yLmpzb24gc2lnbmVyX2tleV8zIC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbiAtLWtleXJpbmctYmFja2VuZCB0ZXN0ICZndDsgcGFydGlhbF90eF8zLmpzb24KIyBTaWduZXIgNCBhcHBlbmRzIHRoZWlyIHNpZ25hdHVyZS4gVGhlIGZpbmFsIG91dHB1dCBpcyB0aGUgZnVsbHkgc2lnbmVkIHR4LgpzaW1kIHR4IG11bHRpc2lnbnNpZ24gcGFydGlhbF90eF8zLmpzb24gc2lnbmVyX2tleV80IC0tY2hhaW4taWQgbXktdGVzdC1jaGFpbiAtLWtleXJpbmctYmFja2VuZCB0ZXN0ICZndDsgc2lnbmVkX3R4Lmpzb24K"}}),e._v(" "),a("h3",{attrs:{id:"broadcasting-a-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting-a-transaction"}},[e._v("#")]),e._v(" Broadcasting a Transaction")]),e._v(" "),a("p",[e._v("Broadcasting a transaction is done using the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2ltZCB0eCBicm9hZGNhc3QgdHhfc2lnbmVkLmpzb24K"}}),e._v(" "),a("p",[e._v("You may optionally pass the "),a("code",[e._v("--broadcast-mode")]),e._v(" flag to specify which response to receive from the node:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("block")]),e._v(": the CLI waits for the tx to be committed in a block.")]),e._v(" "),a("li",[a("code",[e._v("sync")]),e._v(": the CLI waits for a CheckTx execution response only.")]),e._v(" "),a("li",[a("code",[e._v("async")]),e._v(": the CLI returns immediately (transaction might fail).")])]),e._v(" "),a("h2",{attrs:{id:"programmatically-with-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#programmatically-with-go"}},[e._v("#")]),e._v(" Programmatically with Go")]),e._v(" "),a("p",[e._v("It is possible to manipulate transactions programmatically via Go using the Cosmos SDK's "),a("code",[e._v("TxBuilder")]),e._v(" interface.")]),e._v(" "),a("h3",{attrs:{id:"generating-a-transaction-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-transaction-2"}},[e._v("#")]),e._v(" Generating a Transaction")]),e._v(" "),a("p",[e._v("Before generating a transaction, a new instance of a "),a("code",[e._v("TxBuilder")]),e._v(" needs to be created. Since the SDK supports both Amino and Protobuf transactions, the first step would be to decide which encoding scheme to use. All the subsequent steps remain unchanged, whether you're using Amino or Protobuf, as "),a("code",[e._v("TxBuilder")]),e._v(" abstracts the encoding mechanisms. In the following snippet, we will use Protobuf.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc2ltYXBwJnF1b3Q7CikKCmZ1bmMgc2VuZFR4KCkgZXJyb3IgewogICAgLy8gQ2hvb3NlIHlvdXIgY29kZWM6IEFtaW5vIG9yIFByb3RvYnVmLiBIZXJlLCB3ZSB1c2UgUHJvdG9idWYsIGdpdmVuIGJ5IHRoZQogICAgLy8gZm9sbG93aW5nIGZ1bmN0aW9uLgogICAgZW5jQ2ZnIDo9IHNpbWFwcC5NYWtlVGVzdEVuY29kaW5nQ29uZmlnKCkKCiAgICAvLyBDcmVhdGUgYSBuZXcgVHhCdWlsZGVyLgogICAgdHhCdWlsZGVyIDo9IGVuY0NmZy5UeENvbmZpZy5OZXdUeEJ1aWxkZXIoKQoKICAgIC8vIC0tc25pcC0tCn0K"}}),e._v(" "),a("p",[e._v("We can also set up some keys and addresses that will send and receive the transactions. Here, for the purpose of the tutorial, we will be using some dummy data to create keys.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdGVzdHV0aWwvdGVzdGRhdGEmcXVvdDsKKQoKcHJpdjEsIF8sIGFkZHIxIDo9IHRlc3RkYXRhLktleVRlc3RQdWJBZGRyKCkKcHJpdjIsIF8sIGFkZHIyIDo9IHRlc3RkYXRhLktleVRlc3RQdWJBZGRyKCkKcHJpdjMsIF8sIGFkZHIzIDo9IHRlc3RkYXRhLktleVRlc3RQdWJBZGRyKCkK"}}),e._v(" "),a("p",[e._v("Populating the "),a("code",[e._v("TxBuilder")]),e._v(" can be done via its "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.40.0-rc6/client/tx_config.go#L32-L45",target:"_blank",rel:"noopener noreferrer"}},[e._v("methods"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKCWJhbmt0eXBlcyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYmFuay90eXBlcyZxdW90OwopCgpmdW5jIHNlbmRUeCgpIGVycm9yIHsKICAgIC8vIC0tc25pcC0tCgogICAgLy8gRGVmaW5lIHR3byB4L2JhbmsgTXNnU2VuZCBtZXNzYWdlczoKICAgIC8vIC0gZnJvbSBhZGRyMSB0byBhZGRyMywKICAgIC8vIC0gZnJvbSBhZGRyMiB0byBhZGRyMy4KICAgIC8vIFRoaXMgbWVhbnMgdGhhdCB0aGUgdHJhbnNhY3Rpb25zIG5lZWRzIHR3byBzaWduZXJzOiBhZGRyMSBhbmQgYWRkcjIuCiAgICBtc2cxIDo9IGJhbmt0eXBlcy5OZXdNc2dTZW5kKGFkZHIxLCBhZGRyMywgdHlwZXMuTmV3Q29pbnModHlwZXMuTmV3SW50NjRDb2luKCZxdW90O2F0b20mcXVvdDssIDEyKSkpCiAgICBtc2cyIDo9IGJhbmt0eXBlcy5OZXdNc2dTZW5kKGFkZHIyLCBhZGRyMywgdHlwZXMuTmV3Q29pbnModHlwZXMuTmV3SW50NjRDb2luKCZxdW90O2F0b20mcXVvdDssIDM0KSkpCgogICAgZXJyIDo9IHR4QnVpbGRlci5TZXRNc2dzKG1zZzEsIG1zZzIpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgdHhCdWlsZGVyLlNldEdhc0xpbWl0KC4uLikKICAgIHR4QnVpbGRlci5TZXRGZWVBbW91bnQoLi4uKQogICAgdHhCdWlsZGVyLlNldE1lbW8oLi4uKQogICAgdHhCdWlsZGVyLlNldFRpbWVvdXRIZWlnaHQoLi4uKQp9Cg=="}}),e._v(" "),a("p",[e._v("At this point, "),a("code",[e._v("TxBuilder")]),e._v("'s underlying transaction is ready to be signed.")]),e._v(" "),a("h3",{attrs:{id:"signing-a-transaction-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing-a-transaction-2"}},[e._v("#")]),e._v(" Signing a Transaction")]),e._v(" "),a("p",[e._v("We chose our encoding config to use Protobuf, which will use "),a("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" by default. As per "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.40.0-rc6/docs/architecture/adr-020-protobuf-transaction-encoding.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ADR-020"),a("OutboundLink")],1),e._v(", each signer needs to sign the "),a("code",[e._v("SignerInfo")]),e._v("s of all other signers. This means that we need to perform two steps sequentially:")]),e._v(" "),a("ul",[a("li",[e._v("for each signer, populate the signer's "),a("code",[e._v("SignerInfo")]),e._v(" inside "),a("code",[e._v("TxBuilder")]),e._v(",")]),e._v(" "),a("li",[e._v("once all "),a("code",[e._v("SignerInfo")]),e._v("s are populated, for each signer, sign the "),a("code",[e._v("SignDoc")]),e._v(" (the payload to be signed).")])]),e._v(" "),a("p",[e._v("In the current "),a("code",[e._v("TxBuilder")]),e._v("'s API, both steps are done using the same method: "),a("code",[e._v("SetSignatures()")]),e._v(". The current API requires us to first perform a round of "),a("code",[e._v("SetSignatures()")]),e._v(" "),a("em",[e._v("with empty signatures")]),e._v(", only to populate "),a("code",[e._v("SignerInfo")]),e._v("s, and a second round of "),a("code",[e._v("SetSignatures()")]),e._v(" to actually sign the correct payload.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgIGNyeXB0b3R5cGVzICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY3J5cHRvL3R5cGVzJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4L3NpZ25pbmcmcXVvdDsKCXhhdXRoc2lnbmluZyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYXV0aC9zaWduaW5nJnF1b3Q7CikKCmZ1bmMgc2VuZFR4KCkgZXJyb3IgewogICAgLy8gLS1zbmlwLS0KCiAgICBwcml2cyA6PSBbXWNyeXB0b3R5cGVzLlByaXZLZXl7cHJpdjEsIHByaXYyfQogICAgYWNjTnVtczo9IFtddWludDY0ey4uLiwgLi4ufSAvLyBUaGUgYWNjb3VudHMnIGFjY291bnQgbnVtYmVycwogICAgYWNjU2Vxczo9IFtddWludDY0ey4uLiwgLi4ufSAvLyBUaGUgYWNjb3VudHMnIHNlcXVlbmNlIG51bWJlcnMKCiAgICAvLyBGaXJzdCByb3VuZDogd2UgZ2F0aGVyIGFsbCB0aGUgc2lnbmVyIGluZm9zLiBXZSB1c2UgdGhlICZxdW90O3NldCBlbXB0eQogICAgLy8gc2lnbmF0dXJlJnF1b3Q7IGhhY2sgdG8gZG8gdGhhdC4KICAgIHZhciBzaWdzVjIgW11zaWduaW5nLlNpZ25hdHVyZVYyCiAgICBmb3IgaSwgcHJpdiA6PSByYW5nZSBwcml2cyB7CiAgICAgICAgc2lnVjIgOj0gc2lnbmluZy5TaWduYXR1cmVWMnsKICAgICAgICAgICAgUHViS2V5OiBwcml2LlB1YktleSgpLAogICAgICAgICAgICBEYXRhOiAmYW1wO3NpZ25pbmcuU2luZ2xlU2lnbmF0dXJlRGF0YXsKICAgICAgICAgICAgICAgIFNpZ25Nb2RlOiAgZW5jQ2ZnLlR4Q29uZmlnLlNpZ25Nb2RlSGFuZGxlcigpLkRlZmF1bHRNb2RlKCksCiAgICAgICAgICAgICAgICBTaWduYXR1cmU6IG5pbCwKICAgICAgICAgICAgfSwKICAgICAgICAgICAgU2VxdWVuY2U6IGFjY1NlcXNbaV0sCiAgICAgICAgfQoKICAgICAgICBzaWdzVjIgPSBhcHBlbmQoc2lnc1YyLCBzaWdWMikKICAgIH0KICAgIGVyciA6PSB0eEJ1aWxkZXIuU2V0U2lnbmF0dXJlcyhzaWdzVjIuLi4pCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgICByZXR1cm4gZXJyCiAgICB9CgogICAgLy8gU2Vjb25kIHJvdW5kOiBhbGwgc2lnbmVyIGluZm9zIGFyZSBzZXQsIHNvIGVhY2ggc2lnbmVyIGNhbiBzaWduLgogICAgc2lnc1YyID0gW11zaWduaW5nLlNpZ25hdHVyZVYye30KICAgIGZvciBpLCBwcml2IDo9IHJhbmdlIHByaXZzIHsKICAgICAgICBzaWduZXJEYXRhIDo9IHhhdXRoc2lnbmluZy5TaWduZXJEYXRhewogICAgICAgICAgICBDaGFpbklEOiAgICAgICBjaGFpbklELAogICAgICAgICAgICBBY2NvdW50TnVtYmVyOiBhY2NOdW1zW2ldLAogICAgICAgICAgICBTZXF1ZW5jZTogICAgICBhY2NTZXFzW2ldLAogICAgICAgIH0KICAgICAgICBzaWdWMiwgZXJyIDo9IHR4LlNpZ25XaXRoUHJpdktleSgKICAgICAgICAgICAgZW5jQ2ZnLlR4Q29uZmlnLlNpZ25Nb2RlSGFuZGxlcigpLkRlZmF1bHRNb2RlKCksIHNpZ25lckRhdGEsCiAgICAgICAgICAgIHR4QnVpbGRlciwgcHJpdiwgZW5jQ2ZnLlR4Q29uZmlnLCBhY2NTZXFzW2ldKQogICAgICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgICAgICByZXR1cm4gbmlsLCBlcnIKICAgICAgICB9CgogICAgICAgIHNpZ3NWMiA9IGFwcGVuZChzaWdzVjIsIHNpZ1YyKQogICAgfQogICAgZXJyID0gdHhCdWlsZGVyLlNldFNpZ25hdHVyZXMoc2lnc1YyLi4uKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQp9Cg=="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TxBuilder")]),e._v(" is now correctly populated. To print it, you can use the "),a("code",[e._v("TxConfig")]),e._v(" interface from the initial encoding config "),a("code",[e._v("encCfg")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBzZW5kVHgoKSBlcnJvciB7CiAgICAvLyAtLXNuaXAtLQoKICAgIC8vIEdlbmVyYXRlZCBQcm90b2J1Zi1lbmNvZGVkIGJ5dGVzLgogICAgdHhCeXRlcywgZXJyIDo9IGVuY0NmZy5UeENvbmZpZy5UeEVuY29kZXIoKSh0eEJ1aWxkZXIuR2V0VHgoKSkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICAvLyBHZW5lcmF0ZSBhIEpTT04gc3RyaW5nLgogICAgdHhKU09OQnl0ZXMsIGVyciA6PSBlbmNDZmcuVHhDb25maWcuVHhKU09ORW5jb2RlcigpKHR4QnVpbGRlci5HZXRUeCgpKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQogICAgdHhKU09OIDo9IHN0cmluZyh0eEpTT05CeXRlcykKfQo="}}),e._v(" "),a("h3",{attrs:{id:"broadcasting-a-transaction-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting-a-transaction-2"}},[e._v("#")]),e._v(" Broadcasting a Transaction")]),e._v(" "),a("p",[e._v("The preferred way to broadcast a transaction is to use gRPC, though using REST (via "),a("code",[e._v("gRPC-gateway")]),e._v(") or the Tendermint RPC is also posible. An overview of the differences between these methods is exposed "),a("RouterLink",{attrs:{to:"/core/grpc_rest.html"}},[e._v("here")]),e._v(". For this tutorial, we will only describe the gRPC method.")],1),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKICAgICZxdW90O2NvbnRleHQmcXVvdDsKICAgICZxdW90O2ZtdCZxdW90OwoKCSZxdW90O2dvb2dsZS5nb2xhbmcub3JnL2dycGMmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7CikKCmZ1bmMgc2VuZFR4KCkgZXJyb3IgewogICAgLy8gLS1zbmlwLS0KCiAgICAvLyBDcmVhdGUgYSBjb25uZWN0aW9uIHRvIHRoZSBnUlBDIHNlcnZlci4KICAgIGdycGNDb25uIDo9IGdycGMuRGlhbCgKICAgICAgICAmcXVvdDsxMjcuMC4wLjE6OTA5MCZxdW90OywgLy8gT3IgeW91ciBnUlBDIHNlcnZlciBhZGRyZXNzLgogICAgICAgIGdycGMuV2l0aEluc2VjdXJlKCksIC8vIFRoZSBTREsgZG9lc24ndCBzdXBwb3J0IGFueSB0cmFuc3BvcnQgc2VjdXJpdHkgbWVjaGFuaXNtLgogICAgKQogICAgZGVmZXIgZ3JwY0Nvbm4uQ2xvc2UoKQoKICAgIC8vIEJyb2FkY2FzdCB0aGUgdHggdmlhIGdSUEMuIFdlIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIHRoZSBQcm90b2J1ZiBUeAogICAgLy8gc2VydmljZS4KICAgIHR4Q2xpZW50IDo9IHR4Lk5ld1NlcnZpY2VDbGllbnQoZ3JwY0Nvbm4pCiAgICAvLyBXZSB0aGVuIGNhbGwgdGhlIEJyb2FkY2FzdFR4IG1ldGhvZCBvbiB0aGlzIGNsaWVudC4KICAgIGdycGNSZXMsIGVyciA6PSB0eENsaWVudC5Ccm9hZGNhc3RUeCgKICAgICAgICBjb250ZXh0LkJhY2tncm91bmQoKSwKICAgICAgICAmYW1wO3R4LkJyb2FkY2FzdFR4UmVxdWVzdHsKICAgICAgICAgICAgTW9kZTogICAgdHguQnJvYWRjYXN0TW9kZV9CUk9BRENBU1RfTU9ERV9TWU5DLAogICAgICAgICAgICBUeEJ5dGVzOiB0eEJ5dGVzLCAvLyBQcm90by1iaW5hcnkgb2YgdGhlIHNpZ25lZCB0cmFuc2FjdGlvbiwgc2VlIHByZXZpb3VzIHN0ZXAuCiAgICAgICAgfSwKICAgICkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICBmbXQuUHJpbnRsbihncnBjUmVzLlR4UmVzcG9uc2UuQ29kZSkgLy8gU2hvdWxkIGJlIGAwYCBpZiB0aGUgdHggaXMgc3VjY2Vzc2Z1bAoKICAgIHJldHVybiBuaWwKfQo="}}),e._v(" "),a("h4",{attrs:{id:"simulating-a-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulating-a-transaction"}},[e._v("#")]),e._v(" Simulating a Transaction")]),e._v(" "),a("p",[e._v("Before broadcasting a transaction, we sometimes may want to dry-run the transaction, to estimate some information about the transaction without actually committing it. This is called simulating a transaction, and can be done as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKCSZxdW90O2NvbnRleHQmcXVvdDsKCSZxdW90O2ZtdCZxdW90OwoJJnF1b3Q7dGVzdGluZyZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY2xpZW50JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL3R4JnF1b3Q7CglhdXRodHggJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2F1dGgvdHgmcXVvdDsKKQoKZnVuYyBzaW11bGF0ZVR4KCkgZXJyb3IgewogICAgLy8gLS1zbmlwLS0KCiAgICAvLyBTaW11bGF0ZSB0aGUgdHggdmlhIGdSUEMuIFdlIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIHRoZSBQcm90b2J1ZiBUeAogICAgLy8gc2VydmljZS4KICAgIHR4Q2xpZW50IDo9IHR4Lk5ld1NlcnZpY2VDbGllbnQoZ3JwY0Nvbm4pCiAgICAvLyBXZSB0aGVuIGNhbGwgdGhlIEJyb2FkY2FzdFR4IG1ldGhvZCBvbiB0aGlzIGNsaWVudC4KICAgIHByb3RvVHggOj0gdHhCdWlsZGVyVG9Qcm90b1R4KHR4QnVpbGRlcikKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KICAgIGdycGNSZXMsIGVyciA6PSB0eENsaWVudC5TaW11bGF0ZSgKICAgICAgICBjb250ZXh0LkJhY2tncm91bmQoKSwKICAgICAgICAmYW1wO3R4LlNpbXVsYXRlUmVxdWVzdHsKICAgICAgICAgICAgVHg6IHByb3RvVHgsCiAgICAgICAgfSwKICAgICkKICAgIGlmIGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICBmbXQuUHJpbnRsbihncnBjUmVzLkdhc0luZm8pIC8vIFByaW50cyBlc3RpbWF0ZWQgZ2FzIHVzZWQuCgogICAgcmV0dXJuIG5pbAp9CgovLyB0eEJ1aWxkZXJUb1Byb3RvVHggY29udmVydHMgYSB0eEJ1aWxkZXIgaW50byBhIHByb3RvIHR4LlR4LgpmdW5jIHR4QnVpbGRlclRvUHJvdG9UeCh0eEJ1aWxkZXIgY2xpZW50LlR4QnVpbGRlcikgKCp0eC5UeCwgZXJyb3IpIHsgLy8gbm9saW50Cglwcm90b1Byb3ZpZGVyLCBvayA6PSB0eEJ1aWxkZXIuKGF1dGh0eC5Qcm90b1R4UHJvdmlkZXIpCglpZiAhb2sgewoJCXJldHVybiBuaWwsIGZtdC5FcnJvcmYoJnF1b3Q7ZXhwZWN0ZWQgcHJvdG8gdHggYnVpbGRlciwgZ290ICVUJnF1b3Q7LCB0eEJ1aWxkZXIpCgl9CgoJcmV0dXJuIHByb3RvUHJvdmlkZXIuR2V0UHJvdG9UeCgpLCBuaWwKfQo="}}),e._v(" "),a("h2",{attrs:{id:"using-rest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-rest"}},[e._v("#")]),e._v(" Using REST")]),e._v(" "),a("p",[e._v("It is not possible to generate or sign a transaction using REST, only to broadcast one.")]),e._v(" "),a("h3",{attrs:{id:"broadcasting-a-transaction-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting-a-transaction-3"}},[e._v("#")]),e._v(" Broadcasting a Transaction")]),e._v(" "),a("p",[e._v("Broadcasting a transaction using the REST endpoint (served by "),a("code",[e._v("gRPC-gateway")]),e._v(") can be done by sending a POST request as follows, where the "),a("code",[e._v("txBytes")]),e._v(" are the protobuf-encoded bytes of a signed transaction:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtWCBQT1NUIFwKICAgIC1IICZxdW90O0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvbiZxdW90OwogICAgLWQneyZxdW90O3R4X2J5dGVzJnF1b3Q7OiZxdW90O3t7dHhCeXRlc319JnF1b3Q7LCZxdW90O21vZGUmcXVvdDs6JnF1b3Q7QlJPQURDQVNUX01PREVfU1lOQyZxdW90O30nCiAgICBsb2NhbGhvc3Q6MTMxNy9jb3Ntb3MvdHgvdjFiZXRhMS90eHMK"}}),e._v(" "),a("h2",{attrs:{id:"using-cosmjs-javascript-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-cosmjs-javascript-typescript"}},[e._v("#")]),e._v(" Using CosmJS (JavaScript & TypeScript)")]),e._v(" "),a("p",[e._v("CosmJS aims to build client libraries in JavaScript that can be embedded in web applications. Please see "),a("a",{attrs:{href:"https://cosmos.github.io/cosmjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cosmos.github.io/cosmjs"),a("OutboundLink")],1),e._v(" for more information. As of January 2021, CosmJS documentation is still work in progress.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);