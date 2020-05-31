import requests
import user_agents
import random
from random_proxies import random_proxy

def get_headers():
    headers = {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "User-Agent": random.choice(user_agents.useragents)
    }
    return headers

def get_session():
    session = requests.session()
    session.proxies = {'http': 'http://' + random_proxy(use_cache=False)}
    session.headers = get_headers()
    return session
