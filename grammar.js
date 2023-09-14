module.exports = grammar({
    name: 'gon',
    extras: $ => [/\s/, $.comment, $.block_comment],
    rules: {
        source_file: $ => optional(choice($.value, $.object_contents)),
        value: $ => choice($.object, $.array, $.string),
        object: $ => seq('{', optional($.object_contents), '}'),
        object_contents: $ => repeat1(seq(field('key', $.string), optional(':'), $.value, optional(','))),
        array: $ => seq('[', repeat(seq($.value, optional(','))), ']'),
        string: $ => choice(
            'true',
            'false',
            'null',
            $.number,
            token(/"([^"\\]|\\"|\\\/|\\b|\\f|\\n|\\r|\\t|\\u([0-9]|[a-f]|[A-F]){4})*"/),
            token(/[^\s"\[\]\{\},:]+/),
        ),
        number: _ => token(prec(10, choice(/[0-9]*\.[0-9]*/, /[0-9]+/))),
        comment: _ => token(prec(20, /\/\/.*\n/)),
        block_comment: _ => token(prec(20, /\/\*(.|\n)*\*\//))
    }
})
