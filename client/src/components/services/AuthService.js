import Cookies from 'universal-cookie';

const cookies = new Cookies();


export function isAuthenticated() {
    return cookies.get('auth') === 'true';
}

export function signIn(cb) {
    cookies.set('auth', true, {path: '/'})
    setTimeout(cb, 200);
}

export function signOut(cb) {
    cookies.set('auth', false, {path: '/'})
    setTimeout(cb, 100);
}



