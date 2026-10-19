import {logout as logoutUser} from '/lib/xp/auth';

// Filter every request
export function autoLogin(req) {
    log.info('Invoked only unless user is already authenticated');
}

// Override error handler when authentication is required
export function handle401(req) {
    const body = generateLoginPage();
    return {
        status: 401,
        contentType: 'text/html',
        body: body
    };
}

// Triggered when user visits the ID providers login endpoint
export function login(req) {

    const redirectUrl = req.validTicket ? req.params.redirect : undefined;

    const body = generateLoginPage(redirectUrl);
    return {
        contentType: 'text/html',
        body: body
    };
}

// Triggered when user visits the ID providers logout endpoint
export function logout(req) {

    // Sign user out of XP
    logoutUser();

    const redirectUrl = req.validTicket ? req.params.redirect : undefined;

    if (redirectUrl) {
        return {
            redirect: redirectUrl
        };
    } else {
        const body = generateLoginPage();
        return {
            contentType: 'text/html',
            body: body
        };
    }
}
