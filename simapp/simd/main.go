package main

import (
	"os"

	"github.com/JaTochNietDan/cosmos-sdk/server"
	svrcmd "github.com/JaTochNietDan/cosmos-sdk/server/cmd"
	"github.com/JaTochNietDan/cosmos-sdk/simapp"
	"github.com/JaTochNietDan/cosmos-sdk/simapp/simd/cmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()

	if err := svrcmd.Execute(rootCmd, simapp.DefaultNodeHome); err != nil {
		switch e := err.(type) {
		case server.ErrorCode:
			os.Exit(e.Code)

		default:
			os.Exit(1)
		}
	}
}
