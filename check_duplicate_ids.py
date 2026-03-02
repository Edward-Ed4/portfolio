from html.parser import HTMLParser
import os

class IDParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])

pages = ['index.html','projects.html','hospital-management.html','pig-disease.html']
problems = False
for p in pages:
    if not os.path.exists(p):
        continue
    with open(p,'r',encoding='utf-8') as f:
        content = f.read()
    parser = IDParser()
    parser.feed(content)
    seen = {}
    for i in parser.ids:
        seen[i] = seen.get(i,0) + 1
    dups = {k:v for k,v in seen.items() if v>1}
    if dups:
        problems = True
        print(p, 'has duplicate ids:', dups)

if not problems:
    print('No duplicate IDs found.')
