package types

import (
	"github.com/JaTochNietDan/cosmos-sdk/codec"
	cryptocodec "github.com/JaTochNietDan/cosmos-sdk/crypto/codec"
)

var (
	amino = codec.NewLegacyAmino()
)

func init() {
	cryptocodec.RegisterCrypto(amino)
	amino.Seal()
}
