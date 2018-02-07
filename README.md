# Parse run times

JS Shell: `mkdir build_OPT.OBJ && cd build_OPT.OBJ && ../configure --enable-optimize && make -j8`

debugger.js is 2mb and 65k lines

```
➜  parse-times node babylon.js
parse  1084
parse  1050
parse  824
parse  848
parse  843
parse  960
parse  831
parse  805
parse  940
parse  689
time: 8876 - avg 806.9090909090909
➜  parse-times ~/src/mozilla/gecko/js/src/build_DBG.OBJ/dist/bin/js shell.js
parse  618
parse  685
parse  671
parse  711
parse  602
parse  936
parse  566
parse  758
parse  676
parse  658
time: 6881 - avg 625.5454545454545
```
