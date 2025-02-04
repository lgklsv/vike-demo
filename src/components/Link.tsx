export { Link };

function normalize(url: string) {
  return '/' + url.split('/').filter(Boolean).join('/');
}

function Link({ href, children }: { href: string; children: string }) {
  if (!href.startsWith('/')) throw new Error('Link href should start with /');
  href = import.meta.env.BASE_URL + href;
  href = normalize(href);
  return <a href={href}>{children}</a>;
}
