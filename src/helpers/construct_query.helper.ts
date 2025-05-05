export function constructQueryFromParams(
  params: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  },
  options?: {initialize?: boolean},
): string {
  const {initialize = true} = options ?? {};
  const queryParams: string[] = [];

  for (const key in params) {
    if (
      params.hasOwnProperty(key) &&
      params[key] !== undefined &&
      params[key] !== ''
    ) {
      queryParams.push(`${key}=${encodeURIComponent(params[key])}`);
    }
  }

  return `${!initialize ? '' : '?'}${queryParams.join('&')}`;
}
