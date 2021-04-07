# Note about compilation

1. The JS engine parses the code to an AST (Abstract Syntax Tree).
2. Js engine converts that AST to a kind-of byte code, a binary intermediate representation (IR), which is then refined/converted even further by the optimizing JIT compiler.
3. Finally, the JS Virtual Machine executes the program.

> source: https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md
