(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{689:function(C,t,g){"use strict";g.r(t);var I=g(1),A=Object(I.a)({},(function(){var C=this,t=C.$createElement,g=C._self._c||t;return g("ContentSlotsDistributor",{attrs:{"slot-key":C.$parent.slotKey}},[g("h1",{attrs:{id:"архитектура-sdk-приложения"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#архитектура-sdk-приложения"}},[C._v("#")]),C._v(" Архитектура SDK-приложения")]),C._v(" "),g("h2",{attrs:{id:"конечныи-автомат-state-machine"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#конечныи-автомат-state-machine"}},[C._v("#")]),C._v(" Конечный автомат (state machine)")]),C._v(" "),g("p",[C._v("В ядре блокчейна находится "),g("a",{attrs:{href:"https://en.wikipedia.org/wiki/State_machine_replication",target:"_blank",rel:"noopener noreferrer"}},[C._v("реплицированный детерминированный конечный автомат"),g("OutboundLink")],1),C._v(".")]),C._v(" "),g("p",[C._v("В информатике конечный автомат — это математическая абстракция, имеющая один вход, один выход и в каждый момент времени находящаяся в одном из множества состояний. "),g("strong",[C._v("Состояние")]),C._v(" описывает текущее состояние автомата, а "),g("strong",[C._v("транзакции")]),C._v(" описывают изменения текущего состояния.")]),C._v(" "),g("p",[C._v("Принимая в качестве входа состояние "),g("code",[C._v("S")]),C._v(" и транзакцию "),g("code",[C._v("T")]),C._v(", автомат вернет новое состояние "),g("code",[C._v("S'")]),C._v(".")]),C._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tKyAgICAgICAgICAgICAgICAgKy0tLS0tLS0tKwp8ICAgICAgICB8ICAgICAgICAgICAgICAgICB8ICAgICAgICB8CnwgICBTICAgICstLS0tLS0tLS0tLS0tLS0tJmd0OysgICBTJyAgIHwKfCAgICAgICAgfCAgICBhcHBseShUKSAgICAgfCAgICAgICAgfAorLS0tLS0tLS0rICAgICAgICAgICAgICAgICArLS0tLS0tLS0rCg=="}}),C._v(" "),g("p",[C._v("На практике транзакции сгруппированы в блоки, что позволяет сделать процесс более эффективным. Принимая в качестве входа состояние "),g("code",[C._v("S")]),C._v(" и блок транзакций "),g("code",[C._v("B")]),C._v(", автомат вернет новое состояние "),g("code",[C._v("S'")]),C._v(".")]),C._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLSsKfCAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgIHwKfCAgIFMgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0mZ3Q7IHwgICBTJyAgIHwKfCAgICAgICAgfCAgIEZvciBlYWNoIFQgaW4gQjogYXBwbHkoVCkgIHwgICAgICAgIHwKKy0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLSsK"}}),C._v(" "),g("p",[C._v("В контексте блокчейна, конечный автомат является детерминированным. Детерминированность означает, что применение к одному состоянию одной и той же последовательности транзакций всегда приводит к одному и тому же конечному состоянию.")]),C._v(" "),g("p",[C._v("Cosmos SDK дает максимальную гибкость в определеини состояния разрабатываемого приложения, типов транзакций и функций изменения состояния. Процесс разработки конечного автомата с помощью SDK будет описан в следующих главах. В начале рассмотрим процесс репликации с использованием "),g("strong",[C._v("Tendermint")]),C._v(".")]),C._v(" "),g("h3",{attrs:{id:"tendermint"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#tendermint"}},[C._v("#")]),C._v(" Tendermint")]),C._v(" "),g("p",[C._v("Единственное, что нужно сделать разработчику, это описать конечный автомат с помощью Cosmos SDK. Процесс репликации через сеть берет на себя "),g("a",{attrs:{href:"https://tendermint.com/docs/introduction/what-is-tendermint.html",target:"_blank",rel:"noopener noreferrer"}},[g("em",[C._v("Tendermint")]),g("OutboundLink")],1),C._v(".")]),C._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgICAgICAgICAgIF4gICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgXgogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8ICAgQnVpbHQgd2l0aCBDb3Ntb3MgU0RLCiAgICAgICAgICAgICAgICB8ICB8INCa0L7QvdC10YfQvdGL0Lkg0LDQstGC0L7QvNCw0YIgPSDQv9GA0LjQu9C+0LbQtdC90LjQtSB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHYKICAgICAgICAgICAgICAgIHwgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBeCiDQndC+0LTQsCDQsdC70L7QutGH0LXQudC90LAgfCAgfCAgICAgICAgICAg0JrQvtC90YHQtdC90YHRg9GBICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHwgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgfCAgIFRlbmRlcm1pbnQgQ29yZQogICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICDQodC10YLRjCAgICAgICAgICAgICB8ICB8CiAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHwKICAgICAgICAgICAgICAgIHYgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKyAgdgo="}}),C._v(" "),g("p",[C._v("Tendermint — это независимая от разрабатываемого приложения программа, ответственная за "),g("strong",[C._v("сетевое взаимодействие")]),C._v(" и "),g("strong",[C._v("консенсус")]),C._v(". На практике это означает, что Tendermint отвечает за передачу и упорядочивание байтов транзакций. "),g("a",{attrs:{href:"https://tendermint.com/docs/introduction/what-is-tendermint.html",target:"_blank",rel:"noopener noreferrer"}},[C._v("Tendermint Core"),g("OutboundLink")],1),C._v(" основан на алгоритме Byzantine-Fault-Tolerant (BFT) для достижения консенсуса о порядке транзакций.")]),C._v(" "),g("p",[C._v("Алгоритм консенсуса Tendermint работает на множестве специальных нод, называемых "),g("strong",[C._v("валидаторами")]),C._v(". Валидаторы отвечают за добавление блоков транзакций в блокчейн. В момент работы с каждым блоком существует множество валидаторов "),g("code",[C._v("V")]),C._v(". Из этого множества алгоритмом выбирается валидатор, который будет предлагать следующий блок. Блок считается валидным, если более чем две трети валидаторов подписали "),g("em",[g("a",{attrs:{href:"https://tendermint.com/docs/spec/consensus/consensus.html#prevote-step-height-h-round-r",target:"_blank",rel:"noopener noreferrer"}},[C._v("prevote"),g("OutboundLink")],1)]),C._v(" и "),g("em",[g("a",{attrs:{href:"https://tendermint.com/docs/spec/consensus/consensus.html#precommit-step-height-h-round-r",target:"_blank",rel:"noopener noreferrer"}},[C._v("precommit"),g("OutboundLink")],1)]),C._v(", и все транзакции в блоке валидны. Множество валидаторов может быть изменено в правилах, по которым работает конечный автомат. Узнать подробнее о работе алгоритма можно на "),g("a",{attrs:{href:"https://tendermint.com/docs/introduction/what-is-tendermint.html#consensus-overview",target:"_blank",rel:"noopener noreferrer"}},[C._v("следующей странице"),g("OutboundLink")],1),C._v(".")]),C._v(" "),g("p",[C._v("Основной частью приложения, написанного с помощью Cosmos SDK, является фоновая программа (daemon), которая запускается на каждой ноде. Если в множестве валидаторов злоумышленниками являются менее одной трети валидаторов, то при запросе каждая нода должна получить одно и то же состояние в данный момент времени.")]),C._v(" "),g("h2",{attrs:{id:"abci"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[C._v("#")]),C._v(" ABCI")]),C._v(" "),g("p",[C._v("Tendermint передает приложению транзакции по сети через интерфейс "),g("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci",target:"_blank",rel:"noopener noreferrer"}},[C._v("ABCI"),g("OutboundLink")],1),C._v(", который приложение должно реализовать.")]),C._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgICAgICAgIHwKfCAgICAgINCf0YDQuNC70L7QttC10L3QuNC1ICAgICB8CnwgICAgICAgICAgICAgICAgICAgICB8CistLS0tLS0tLSstLS0rLS0tLS0tLS0rCiAgICAgICAgIF4gICB8CiAgICAgICAgIHwgICB8IEFCQ0kKICAgICAgICAgfCAgIHYKKy0tLS0tLS0tKy0tLSstLS0tLS0tLSsKfCAgICAgICAgICAgICAgICAgICAgIHwKfCAgICAgICAgICAgICAgICAgICAgIHwKfCAgICAgVGVuZGVybWludCAgICAgIHwKfCAgICAgICAgICAgICAgICAgICAgIHwKfCAgICAgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0tLS0tLSsK"}}),C._v(" "),g("p",[g("strong",[C._v("Tendermint работает с байтами транзакций")]),C._v(", но не имеет информации о том, что эти байты означают. Все, что делает Tendermint, — это детерминировано упорядочивает эти байты. Tendermint передает байты приложению через ABCI и ожидает получить код возврата, который содержит сообщение о том, успешно ли были обработаны транзакции.")]),C._v(" "),g("p",[C._v("Наиболее важные типы сообщений ABCI:")]),C._v(" "),g("ul",[g("li",[g("p",[g("code",[C._v("CheckTx")]),C._v(": после принятия транзации Tendermint Core, транзакция передается приложению для проверки базовых требований. "),g("code",[C._v("CheckTx")]),C._v(" используется для защиты мемпула (mempool) нод от спама. Предварительный обработчик (Ante Handler) используется для выполнения последовательности валидационных шагов, таких как проверка вознаграждений (fees) и подписей валидаторов. Если транзакция валидна, она добавляется в "),g("a",{attrs:{href:"https://tendermint.com/docs/spec/reactors/mempool/functionality.html#mempool-functionality",target:"_blank",rel:"noopener noreferrer"}},[C._v("mempool"),g("OutboundLink")],1),C._v(" и транслируется другим нодам. Следует заметить, что "),g("code",[C._v("CheckTx")]),C._v(" не обрабатывает транзакции, то есть изменения состояния не происходит, потому что транзакции на этом этапе еще не были включены в блок.")])]),C._v(" "),g("li",[g("p",[g("code",[C._v("DeliverTx")]),C._v(": когда Tendermint Core принимает "),g("a",{attrs:{href:"https://tendermint.com/docs/spec/blockchain/blockchain.html#validation",target:"_blank",rel:"noopener noreferrer"}},[C._v("валидный блок"),g("OutboundLink")],1),C._v(", каждая транзакция в данном блоке передается приложению через "),g("code",[C._v("DeliverTx")]),C._v(" для обработки. Именно на этом этапе происходит изменение состояния. Обработчик (Ante Handler) выполняется повторно вместе с остальными обработчиками для каждого сообщения в транзакции.")])]),C._v(" "),g("li",[g("p",[g("code",[C._v("BeginBlock")]),C._v(" / "),g("code",[C._v("EndBlock")]),C._v(": эти сообщения выполняются в начале и конце блока, вне зависимости от того, содержит блок транзакции или нет. Это удобно, если необходимо автоматически выполнить код. Следует заметить, что процессы, требующие больших вычислительных ресурсов, могут замедлить работу блокчейна или вовсе привести к остановке в случае бесконечного цикла.")])])]),C._v(" "),g("p",[C._v("Более подробный обзор методов и типов ABCI находится на "),g("a",{attrs:{href:"https://tendermint.com/docs/spec/abci/abci.html#overview",target:"_blank",rel:"noopener noreferrer"}},[C._v("следующей странице"),g("OutboundLink")],1),C._v(".")]),C._v(" "),g("p",[C._v("Построенное на Tendermint приложение должно реализовать интерфейс ABCI для взаимодействия с локально запущенной программой Tendermint. К счастью, реализовывать интерфейс самостоятельно не нужно, потому что в составе Cosmos SDK уже есть его реализация в виде "),g("RouterLink",{attrs:{to:"/ru/intro/sdk-design.html#baseapp"}},[C._v("baseapp")]),C._v(".")],1)],1)}),[],!1,null,null,null);t.default=A.exports}}]);