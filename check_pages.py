import urllib.request
urls = [
    'http://127.0.0.1:8000/index.html',
    'http://127.0.0.1:8000/projects.html',
    'http://127.0.0.1:8000/hospital-management.html',
    'http://127.0.0.1:8000/pig-disease.html'
]
for u in urls:
    try:
        r = urllib.request.urlopen(u, timeout=5)
        print(u, r.getcode())
    except Exception as e:
        print(u, 'ERROR', e)
