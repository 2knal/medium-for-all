from proxy import get_session
from bs4 import BeautifulSoup

def parse_page(response):
    soup = BeautifulSoup(response.text, 'lxml')

    css_links = '\n'.join(list(map(str, soup.find_all('link'))))
    styles = '\n'.join(list(map(str, soup.find_all('style'))))
    scripts = '\n'.join(list(map(str, soup.find_all('script'))))
    article = soup.find('article')
    
    head = f'<head> {css_links} </link>'
    body = f'<body> {article} {styles} {scripts} </body>'
    body = body.replace('<noscript>', '').replace('</noscript>', '')

    return {
        'success': True,
        'data': {
            'head': head,
            'body': body,
        },
    }

def fetch_page(url):
    session = get_session()
    response = session.get(url, timeout=5)
    print("-- STATUS " + str(response.status_code) + " -- " + url)
    if response.status_code == 200:
        return parse_page(response)
    return {
        'success': False,
    }
