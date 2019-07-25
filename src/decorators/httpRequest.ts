//https://codeburst.io/decorate-your-code-with-typescript-decorators-5be4a4ffecb4
export const httpRequest = (url: string) => {
  return (_target: any, _key: string, descriptor: any) => {
    var originalMethod = descriptor.value

    // do not use arrow function in here or it will lose the context of `this`
    descriptor.value = async function (...args: any[]) {
      const parameters = args.length != 0 ? querify(args[0]) : ''
      const result = await fetch(url + parameters)
      const response = await result.json()
      const error = !result.ok ? { code: result.status, description: result.statusText } : undefined
      return originalMethod.apply(this, args.concat([response, error]))
    }

    return descriptor
  }
}

const querify = (parameters: Object) => {
  let firstParameter = true
  return Object.keys(parameters).map(parameterKey => {
    let querySegment = ""
    querySegment += firstParameter ? "?" : "&"
    if (firstParameter) firstParameter = false
    return querySegment += parameterKey + '=' + encodeURI(parameters[parameterKey])
  }).join('')
}
