import urllib.request

opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)

def download_image(url, file_path, file_name):
    full_path = file_path + file_name
    urllib.request.urlretrieve(url, full_path)

for i in range(0, 711):
    url = (f"https://pointerpointer.com/images/{i}.jpg")
    print(url)
    filename = f"{i}.jpg"
    download_image(url, 'img/', filename)
    print(f"downloaded {filename}") 

print("done")

