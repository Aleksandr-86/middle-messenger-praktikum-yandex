export function xssDef(str: string): string {
  return (
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // eslint-disable-next-line
      .replace(/\"/g, '&quot;')
      // eslint-disable-next-line
      .replace(/\'/g, '&#39;')
      .replace(/\//g, '&#x2F;')
  );
}
