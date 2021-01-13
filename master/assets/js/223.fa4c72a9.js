(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{783:function(c,o,v){"use strict";v.r(o);var l=v(1),g=Object(l.a)({},(function(){var c=this,o=c.$createElement,v=c._self._c||o;return v("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[v("h1",{attrs:{id:"messages"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[c._v("#")]),c._v(" Messages")]),c._v(" "),v("h2",{attrs:{id:"proposal-submission"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#proposal-submission"}},[c._v("#")]),c._v(" Proposal Submission")]),c._v(" "),v("p",[c._v("Proposals can be submitted by any Atom holder via a "),v("code",[c._v("TxGovSubmitProposal")]),c._v("\ntransaction.")]),c._v(" "),v("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBUeEdvdlN1Ym1pdFByb3Bvc2FsIHN0cnVjdCB7CglDb250ZW50ICAgICAgICBDb250ZW50CglJbml0aWFsRGVwb3NpdCBzZGsuQ29pbnMKCVByb3Bvc2VyICAgICAgIHNkay5BY2NBZGRyZXNzCn0K"}}),c._v(" "),v("p",[c._v("The "),v("code",[c._v("Content")]),c._v(" of a "),v("code",[c._v("TxGovSubmitProposal")]),c._v(" message must have an appropriate router\nset in the governance module.")]),c._v(" "),v("p",[v("strong",[c._v("State modifications:")])]),c._v(" "),v("ul",[v("li",[c._v("Generate new "),v("code",[c._v("proposalID")])]),c._v(" "),v("li",[c._v("Create new "),v("code",[c._v("Proposal")])]),c._v(" "),v("li",[c._v("Initialise "),v("code",[c._v("Proposals")]),c._v(" attributes")]),c._v(" "),v("li",[c._v("Decrease balance of sender by "),v("code",[c._v("InitialDeposit")])]),c._v(" "),v("li",[c._v("If "),v("code",[c._v("MinDeposit")]),c._v(" is reached:\n"),v("ul",[v("li",[c._v("Push "),v("code",[c._v("proposalID")]),c._v(" in "),v("code",[c._v("ProposalProcessingQueue")])])])]),c._v(" "),v("li",[c._v("Transfer "),v("code",[c._v("InitialDeposit")]),c._v(" from the "),v("code",[c._v("Proposer")]),c._v(" to the governance "),v("code",[c._v("ModuleAccount")])])]),c._v(" "),v("p",[c._v("A "),v("code",[c._v("TxGovSubmitProposal")]),c._v(" transaction can be handled according to the following\npseudocode.")]),c._v(" "),v("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUFNFVURPQ09ERSAvLwovLyBDaGVjayBpZiBUeEdvdlN1Ym1pdFByb3Bvc2FsIGlzIHZhbGlkLiBJZiBpdCBpcywgY3JlYXRlIHByb3Bvc2FsIC8vCgp1cG9uIHJlY2VpdmluZyB0eEdvdlN1Ym1pdFByb3Bvc2FsIGZyb20gc2VuZGVyIGRvCgogIGlmICFjb3JyZWN0bHlGb3JtYXR0ZWQodHhHb3ZTdWJtaXRQcm9wb3NhbCkKICAgIC8vIGNoZWNrIGlmIHByb3Bvc2FsIGlzIGNvcnJlY3RseSBmb3JtYXR0ZWQuIEluY2x1ZGVzIGZlZSBwYXltZW50LgogICAgdGhyb3cKCiAgaW5pdGlhbERlcG9zaXQgPSB0eEdvdlN1Ym1pdFByb3Bvc2FsLkluaXRpYWxEZXBvc2l0CiAgaWYgKGluaXRpYWxEZXBvc2l0LkF0b21zICZsdDs9IDApIE9SIChzZW5kZXIuQXRvbUJhbGFuY2UgJmx0OyBpbml0aWFsRGVwb3NpdC5BdG9tcykKICAgIC8vIEluaXRpYWxEZXBvc2l0IGlzIG5lZ2F0aXZlIG9yIG51bGwgT1Igc2VuZGVyIGhhcyBpbnN1ZmZpY2llbnQgZnVuZHMKICAgIHRocm93CgogIGlmICh0eEdvdlN1Ym1pdFByb3Bvc2FsLlR5cGUgIT0gUHJvcG9zYWxUeXBlUGxhaW5UZXh0KSBPUiAodHhHb3ZTdWJtaXRQcm9wb3NhbC5UeXBlICE9IFByb3Bvc2FsVHlwZVNvZnR3YXJlVXBncmFkZSkKCiAgc2VuZGVyLkF0b21CYWxhbmNlIC09IGluaXRpYWxEZXBvc2l0LkF0b21zCgogIGRlcG9zaXRQYXJhbSA9IGxvYWQoR2xvYmFsUGFyYW1zLCAnRGVwb3NpdFBhcmFtJykKCiAgcHJvcG9zYWxJRCA9IGdlbmVyYXRlIG5ldyBwcm9wb3NhbElECiAgcHJvcG9zYWwgPSBOZXdQcm9wb3NhbCgpCgogIHByb3Bvc2FsLlRpdGxlID0gdHhHb3ZTdWJtaXRQcm9wb3NhbC5UaXRsZQogIHByb3Bvc2FsLkRlc2NyaXB0aW9uID0gdHhHb3ZTdWJtaXRQcm9wb3NhbC5EZXNjcmlwdGlvbgogIHByb3Bvc2FsLlR5cGUgPSB0eEdvdlN1Ym1pdFByb3Bvc2FsLlR5cGUKICBwcm9wb3NhbC5Ub3RhbERlcG9zaXQgPSBpbml0aWFsRGVwb3NpdAogIHByb3Bvc2FsLlN1Ym1pdFRpbWUgPSAmbHQ7Q3VycmVudFRpbWUmZ3Q7CiAgcHJvcG9zYWwuRGVwb3NpdEVuZFRpbWUgPSAmbHQ7Q3VycmVudFRpbWUmZ3Q7LkFkZChkZXBvc2l0UGFyYW0uTWF4RGVwb3NpdFBlcmlvZCkKICBwcm9wb3NhbC5EZXBvc2l0cy5hcHBlbmQoe2luaXRpYWxEZXBvc2l0LCBzZW5kZXJ9KQogIHByb3Bvc2FsLlN1Ym1pdHRlciA9IHNlbmRlcgogIHByb3Bvc2FsLlllc1ZvdGVzID0gMAogIHByb3Bvc2FsLk5vVm90ZXMgPSAwCiAgcHJvcG9zYWwuTm9XaXRoVmV0b1ZvdGVzID0gMAogIHByb3Bvc2FsLkFic3RhaW5Wb3RlcyA9IDAKICBwcm9wb3NhbC5DdXJyZW50U3RhdHVzID0gUHJvcG9zYWxTdGF0dXNPcGVuCgogIHN0b3JlKFByb3Bvc2FscywgJmx0O3Byb3Bvc2FsSUR8J3Byb3Bvc2FsJyZndDssIHByb3Bvc2FsKSAvLyBTdG9yZSBwcm9wb3NhbCBpbiBQcm9wb3NhbHMgbWFwcGluZwogIHJldHVybiBwcm9wb3NhbElECg=="}}),c._v(" "),v("h2",{attrs:{id:"deposit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[c._v("#")]),c._v(" Deposit")]),c._v(" "),v("p",[c._v("Once a proposal is submitted, if\n"),v("code",[c._v("Proposal.TotalDeposit < ActiveParam.MinDeposit")]),c._v(", Atom holders can send\n"),v("code",[c._v("TxGovDeposit")]),c._v(" transactions to increase the proposal's deposit.")]),c._v(" "),v("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBUeEdvdkRlcG9zaXQgc3RydWN0IHsKICBQcm9wb3NhbElEICAgIGludDY0ICAgICAgIC8vIElEIG9mIHRoZSBwcm9wb3NhbAogIERlcG9zaXQgICAgICAgc2RrLkNvaW5zICAgLy8gTnVtYmVyIG9mIEF0b21zIHRvIGFkZCB0byB0aGUgcHJvcG9zYWwncyBkZXBvc2l0Cn0K"}}),c._v(" "),v("p",[v("strong",[c._v("State modifications:")])]),c._v(" "),v("ul",[v("li",[c._v("Decrease balance of sender by "),v("code",[c._v("deposit")])]),c._v(" "),v("li",[c._v("Add "),v("code",[c._v("deposit")]),c._v(" of sender in "),v("code",[c._v("proposal.Deposits")])]),c._v(" "),v("li",[c._v("Increase "),v("code",[c._v("proposal.TotalDeposit")]),c._v(" by sender's "),v("code",[c._v("deposit")])]),c._v(" "),v("li",[c._v("If "),v("code",[c._v("MinDeposit")]),c._v(" is reached:\n"),v("ul",[v("li",[c._v("Push "),v("code",[c._v("proposalID")]),c._v(" in "),v("code",[c._v("ProposalProcessingQueueEnd")])])])]),c._v(" "),v("li",[c._v("Transfer "),v("code",[c._v("Deposit")]),c._v(" from the "),v("code",[c._v("proposer")]),c._v(" to the governance "),v("code",[c._v("ModuleAccount")])])]),c._v(" "),v("p",[c._v("A "),v("code",[c._v("TxGovDeposit")]),c._v(" transaction has to go through a number of checks to be valid.\nThese checks are outlined in the following pseudocode.")]),c._v(" "),v("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUFNFVURPQ09ERSAvLwovLyBDaGVjayBpZiBUeEdvdkRlcG9zaXQgaXMgdmFsaWQuIElmIGl0IGlzLCBpbmNyZWFzZSBkZXBvc2l0IGFuZCBjaGVjayBpZiBNaW5EZXBvc2l0IGlzIHJlYWNoZWQKCnVwb24gcmVjZWl2aW5nIHR4R292RGVwb3NpdCBmcm9tIHNlbmRlciBkbwogIC8vIGNoZWNrIGlmIHByb3Bvc2FsIGlzIGNvcnJlY3RseSBmb3JtYXR0ZWQuIEluY2x1ZGVzIGZlZSBwYXltZW50LgoKICBpZiAhY29ycmVjdGx5Rm9ybWF0dGVkKHR4R292RGVwb3NpdCkKICAgIHRocm93CgogIHByb3Bvc2FsID0gbG9hZChQcm9wb3NhbHMsICZsdDt0eEdvdkRlcG9zaXQuUHJvcG9zYWxJRHwncHJvcG9zYWwnJmd0OykgLy8gcHJvcG9zYWwgaXMgYSBjb25zdCBrZXksIHByb3Bvc2FsSUQgaXMgdmFyaWFibGUKCiAgaWYgKHByb3Bvc2FsID09IG5pbCkKICAgIC8vIFRoZXJlIGlzIG5vIHByb3Bvc2FsIGZvciB0aGlzIHByb3Bvc2FsSUQKICAgIHRocm93CgogIGlmICh0eEdvdkRlcG9zaXQuRGVwb3NpdC5BdG9tcyAmbHQ7PSAwKSBPUsKgKHNlbmRlci5BdG9tQmFsYW5jZSAmbHQ7IHR4R292RGVwb3NpdC5EZXBvc2l0LkF0b21zKSBPUiAocHJvcG9zYWwuQ3VycmVudFN0YXR1cyAhPSBQcm9wb3NhbFN0YXR1c09wZW4pCgogICAgLy8gZGVwb3NpdCBpcyBuZWdhdGl2ZSBvciBudWxsCiAgICAvLyBPUiBzZW5kZXIgaGFzIGluc3VmZmljaWVudCBmdW5kcwogICAgLy8gT1IgcHJvcG9zYWwgaXMgbm90IG9wZW4gZm9yIGRlcG9zaXQgYW55bW9yZQoKICAgIHRocm93CgogIGRlcG9zaXRQYXJhbSA9IGxvYWQoR2xvYmFsUGFyYW1zLCAnRGVwb3NpdFBhcmFtJykKCiAgaWYgKEN1cnJlbnRCbG9jayAmZ3Q7PSBwcm9wb3NhbC5TdWJtaXRCbG9jayArIGRlcG9zaXRQYXJhbS5NYXhEZXBvc2l0UGVyaW9kKQogICAgcHJvcG9zYWwuQ3VycmVudFN0YXR1cyA9IFByb3Bvc2FsU3RhdHVzQ2xvc2VkCgogIGVsc2UKICAgIC8vIHNlbmRlciBjYW4gZGVwb3NpdAogICAgc2VuZGVyLkF0b21CYWxhbmNlIC09IHR4R292RGVwb3NpdC5EZXBvc2l0LkF0b21zCgogICAgcHJvcG9zYWwuRGVwb3NpdHMuYXBwZW5kKHt0eEdvdlZvdGUuRGVwb3NpdCwgc2VuZGVyfSkKICAgIHByb3Bvc2FsLlRvdGFsRGVwb3NpdC5QbHVzKHR4R292RGVwb3NpdC5EZXBvc2l0KQoKICAgIGlmIChwcm9wb3NhbC5Ub3RhbERlcG9zaXQgJmd0Oz0gZGVwb3NpdFBhcmFtLk1pbkRlcG9zaXQpCiAgICAgIC8vIE1pbkRlcG9zaXQgaXMgcmVhY2hlZCwgdm90ZSBvcGVucwoKICAgICAgcHJvcG9zYWwuVm90aW5nU3RhcnRCbG9jayA9IEN1cnJlbnRCbG9jawogICAgICBwcm9wb3NhbC5DdXJyZW50U3RhdHVzID0gUHJvcG9zYWxTdGF0dXNBY3RpdmUKICAgICAgUHJvcG9zYWxQcm9jZXNzaW5nUXVldWUucHVzaCh0eEdvdkRlcG9zaXQuUHJvcG9zYWxJRCkKCiAgc3RvcmUoUHJvcG9zYWxzLCAmbHQ7dHhHb3ZWb3RlLlByb3Bvc2FsSUR8J3Byb3Bvc2FsJyZndDssIHByb3Bvc2FsKQo="}}),c._v(" "),v("h2",{attrs:{id:"vote"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vote"}},[c._v("#")]),c._v(" Vote")]),c._v(" "),v("p",[c._v("Once "),v("code",[c._v("ActiveParam.MinDeposit")]),c._v(" is reached, voting period starts. From there,\nbonded Atom holders are able to send "),v("code",[c._v("TxGovVote")]),c._v(" transactions to cast their\nvote on the proposal.")]),c._v(" "),v("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICB0eXBlIFR4R292Vm90ZSBzdHJ1Y3QgewogICAgUHJvcG9zYWxJRCAgICAgICAgICAgaW50NjQgICAgICAgICAvLyAgcHJvcG9zYWxJRCBvZiB0aGUgcHJvcG9zYWwKICAgIFZvdGUgICAgICAgICAgICAgICAgIGJ5dGUgICAgICAgICAgLy8gIG9wdGlvbiBmcm9tIE9wdGlvblNldCBjaG9zZW4gYnkgdGhlIHZvdGVyCiAgfQo="}}),c._v(" "),v("p",[v("strong",[c._v("State modifications:")])]),c._v(" "),v("ul",[v("li",[c._v("Record "),v("code",[c._v("Vote")]),c._v(" of sender")])]),c._v(" "),v("p",[v("em",[c._v("Note: Gas cost for this message has to take into account the future tallying of the vote in EndBlocker")])]),c._v(" "),v("p",[c._v("Next is a pseudocode proposal of the way "),v("code",[c._v("TxGovVote")]),c._v(" transactions are\nhandled:")]),c._v(" "),v("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICAvLyBQU0VVRE9DT0RFIC8vCiAgLy8gQ2hlY2sgaWYgVHhHb3ZWb3RlIGlzIHZhbGlkLiBJZiBpdCBpcywgY291bnQgdm90ZS8vCgogIHVwb24gcmVjZWl2aW5nIHR4R292Vm90ZSBmcm9tIHNlbmRlciBkbwogICAgLy8gY2hlY2sgaWYgcHJvcG9zYWwgaXMgY29ycmVjdGx5IGZvcm1hdHRlZC4gSW5jbHVkZXMgZmVlIHBheW1lbnQuCgogICAgaWYgIWNvcnJlY3RseUZvcm1hdHRlZCh0eEdvdkRlcG9zaXQpCiAgICAgIHRocm93CgogICAgcHJvcG9zYWwgPSBsb2FkKFByb3Bvc2FscywgJmx0O3R4R292RGVwb3NpdC5Qcm9wb3NhbElEfCdwcm9wb3NhbCcmZ3Q7KQoKICAgIGlmIChwcm9wb3NhbCA9PSBuaWwpCiAgICAgIC8vIFRoZXJlIGlzIG5vIHByb3Bvc2FsIGZvciB0aGlzIHByb3Bvc2FsSUQKICAgICAgdGhyb3cKCgogICAgaWYgIChwcm9wb3NhbC5DdXJyZW50U3RhdHVzID09IFByb3Bvc2FsU3RhdHVzQWN0aXZlKQoKCiAgICAgICAgLy8gU2VuZGVyIGNhbiB2b3RlIGlmCiAgICAgICAgLy8gUHJvcG9zYWwgaXMgYWN0aXZlCiAgICAgICAgLy8gU2VuZGVyIGhhcyBzb21lIGJvbmRzCgogICAgICAgIHN0b3JlKEdvdmVybmFuY2UsICZsdDt0eEdvdlZvdGUuUHJvcG9zYWxJRHwnYWRkcmVzc2VzJ3xzZW5kZXImZ3Q7LCB0eEdvdlZvdGUuVm90ZSkgICAvLyBWb3RlcnMgY2FuIHZvdGUgbXVsdGlwbGUgdGltZXMuIFJlLXZvdGluZyBvdmVycmlkZXMgcHJldmlvdXMgdm90ZS4gVGhpcyBpcyBvayBiZWNhdXNlIHRhbGx5aW5nIGlzIGRvbmUgb25jZSBhdCB0aGUgZW5kLgo="}})],1)}),[],!1,null,null,null);o.default=g.exports}}]);