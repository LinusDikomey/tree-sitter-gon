
(value (string) @string)
(number) @number
(object_contents key: (string) @string.special.key)

[(comment) (block_comment)] @comment @spell

[
    "["
    "]"
    "{"
    "}"
] @punctuation.bracket

[
    ","
    ":"
] @punctuation.delimiter

[
    "true"
    "false"
    "null"
] @keyword
