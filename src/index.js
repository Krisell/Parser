import BetterArguments from '@krisell/better-arguments'

const Parser = {
    json (...specs) {
        const options = BetterArguments.build({
            specs,
            defaultOptions: { type: 'object' },
            namedOptions: ['seralized', 'type']
          })

        function defaultValue () {
            if (options.type === 'array') {
                return []
            }

            return {}
        }

        try {
            let parsed = JSON.parse(options.seralized)

            if (!parsed) {
                return defaultValue()
            }

            return parsed
        } catch (e) {
            return defaultValue()
        }
    },
}

export default Parser

