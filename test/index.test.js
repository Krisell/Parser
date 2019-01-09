import Parser from '../lib/index'

test('It parses data correctly', () => {
    let data = {
        one: 1,
        two: '2',
        thr: 'ee',
        arr: [1, 2, 3]
    }

    let seralized = JSON.stringify(data)

    let parsed = Parser.json(seralized)

    expect(parsed.one).toEqual(1)
    expect(parsed.two).toEqual('2')
    expect(parsed.thr).toEqual('ee')
    expect(parsed.arr).toEqual([1, 2, 3])
})

test('The data string can also be passed as a named argument', () => {
    let data = {
        one: 1,
        two: '2',
        thr: 'ee',
        arr: [1, 2, 3]
    }

    let seralized = JSON.stringify(data)

    let parsed = Parser.json({ 
        seralized: seralized 
    })

    expect(parsed.one).toEqual(1)
    expect(parsed.two).toEqual('2')
    expect(parsed.thr).toEqual('ee')
    expect(parsed.arr).toEqual([1, 2, 3])
})

test('The default value is an object per default', () => {
    expect(Parser.json("not valid json")).toEqual({})
    expect(Parser.json(undefined)).toEqual({})
    expect(Parser.json(null)).toEqual({})
    expect(Parser.json()).toEqual({})
})

test('The default value is an object if that is specified', () => {
    expect(Parser.json("not valid json", 'object')).toEqual({})
    expect(Parser.json(undefined, 'object')).toEqual({})
    expect(Parser.json(null, { type: 'object' })).toEqual({})
    expect(Parser.json({ type: 'object' })).toEqual({})
})

test('The default value is an array if that is specified', () => {
    expect(Parser.json("not valid json", 'array')).toEqual([])
    expect(Parser.json(undefined, 'array')).toEqual([])
    expect(Parser.json(null, { type: 'array' })).toEqual([])
    expect(Parser.json({ type: 'array' })).toEqual([])
})