package main

import (
  "fmt"
  "os"
  "encoding/json"
  "io/ioutil"
)
func main() {
  filePath := "./inputs/freqs.json";
  fmt.Printf( "// reading file %s\n", filePath )
  file, err1 := ioutil.ReadFile( filePath )
  if err1 != nil {
      fmt.Printf( "// error while reading file %s\n", filePath )
      fmt.Printf("File error: %v\n", err1)
      os.Exit(1)
  }

  fmt.Println( "// defining array of struct shipObject" )

  err2 := json.Unmarshal(file, [])
  if err2 != nil {
    fmt.Println("error:", err2)
    os.Exit(1)
  }

  fmt.Println( "// loop over array of structs of shipObject" )
  for k := range freqs {
    fmt.Printf( "The ship '%s' first appeared on '%s'\n", freqs[k], freqs[k] );
  }
}
