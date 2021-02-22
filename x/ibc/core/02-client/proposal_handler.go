package client

import (
	sdk "github.com/JaTochNietDan/cosmos-sdk/types"
	sdkerrors "github.com/JaTochNietDan/cosmos-sdk/types/errors"
	govtypes "github.com/JaTochNietDan/cosmos-sdk/x/gov/types"
	"github.com/JaTochNietDan/cosmos-sdk/x/ibc/core/02-client/keeper"
	"github.com/JaTochNietDan/cosmos-sdk/x/ibc/core/02-client/types"
)

// NewClientUpdateProposalHandler defines the client update proposal handler
func NewClientUpdateProposalHandler(k keeper.Keeper) govtypes.Handler {
	return func(ctx sdk.Context, content govtypes.Content) error {
		switch c := content.(type) {
		case *types.ClientUpdateProposal:
			return k.ClientUpdateProposal(ctx, c)

		default:
			return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unrecognized ibc proposal content type: %T", c)
		}
	}
}
