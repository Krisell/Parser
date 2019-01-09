import Parser from '../lib/index'

test('It parses data correctly', () => {
    let data = {
        one: 1,
        two: '2',
        thr: 'ee',
        arr: [1, 2, 3]
    }

    let serialized = JSON.stringify(data)

    let parsed = Parser.json(serialized)

    expect(parsed.one).toEqual(1)
    expect(parsed.two).toEqual('2')
    expect(parsed.thr).toEqual('ee')
    expect(parsed.arr).toEqual([1, 2, 3])
})