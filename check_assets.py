import os
from html.parser import HTMLParser

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'link' and 'href' in attrs:
            self.links.append(attrs['href'])
        if tag == 'script' and 'src' in attrs:
            self.links.append(attrs['src'])
        if tag == 'img' and 'src' in attrs:
            self.links.append(attrs['src'])

pages = ['index.html','projects.html','hospital-management.html','pig-disease.html']
missing = []
for p in pages:
    if not os.path.exists(p):
        missing.append((p, 'page missing'))
        continue
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    parser = LinkParser()
    parser.feed(content)
    for link in parser.links:
        if link.startswith('http'):
            continue
        # normalize path
        path = os.path.normpath(os.path.join(os.path.dirname(p), link))
        if not os.path.exists(path):
            missing.append((p, link))

if not missing:
    print('All local referenced assets exist.')
else:
    print('Missing assets:')
    for m in missing:
        print(m[0], '->', m[1])
