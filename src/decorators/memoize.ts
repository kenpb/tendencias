const MEMOIZED_VALUE_KEY = '_memoizedValue'

export const memoize = (expirationTimeMs: number = 300000) => {
  return (_target: any, _propertyName: string, descriptor: TypedPropertyDescriptor<any>) => {
    if (descriptor.value != null) {
      const originalMethod = descriptor.value
      const fn: any = function (...args: any[]) {
        const key = MEMOIZED_VALUE_KEY + '_' + JSON.stringify(args)

        if (!fn[key]) {
          fn[key] = originalMethod.apply(this, args)
          setTimeout(() => clearMemoizedValue(fn, key), expirationTimeMs)
        }

        return fn[key]
      }
      descriptor.value = fn

      return descriptor
    } else {
      throw Error('Only put the @memoize decorator on a method.')
    }
  }
}

export function clearMemoizedValue(method: any, key: string) {
  delete method[key]
}
