import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
    const uid = 'user_id';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });    
});
