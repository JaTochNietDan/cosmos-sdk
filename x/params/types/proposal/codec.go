package proposal

import (
	"github.com/JaTochNietDan/cosmos-sdk/codec"
	"github.com/JaTochNietDan/cosmos-sdk/codec/types"
	govtypes "github.com/JaTochNietDan/cosmos-sdk/x/gov/types"
)

// RegisterLegacyAminoCodec registers all necessary param module types with a given LegacyAmino codec.
func RegisterLegacyAminoCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&ParameterChangeProposal{}, "cosmos-sdk/ParameterChangeProposal", nil)
}

func RegisterInterfaces(registry types.InterfaceRegistry) {
	registry.RegisterImplementations(
		(*govtypes.Content)(nil),
		&ParameterChangeProposal{},
	)
}
