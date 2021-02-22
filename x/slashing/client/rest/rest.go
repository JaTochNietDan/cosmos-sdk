package rest

import (
	"github.com/gorilla/mux"

	"github.com/JaTochNietDan/cosmos-sdk/client/rest"

	"github.com/JaTochNietDan/cosmos-sdk/client"
)

func RegisterHandlers(clientCtx client.Context, rtr *mux.Router) {
	r := rest.WithHTTPDeprecationHeaders(rtr)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)
}
