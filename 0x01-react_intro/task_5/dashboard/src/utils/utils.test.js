import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns correct year', () => {
    const year = getFullYear();
    expect(year).toEqual(2023);
});

test('getFooterCopy returns correct string', () => {
    const trueArg = getFooterCopy(true);
    const falseArg = getFooterCopy(false);
    const noArg = getFooterCopy();
    expect(trueArg).toEqual('Holberton School');
    expect(falseArg).toEqual('Holberton School main dashboard');
    expect(noArg).toEqual('Holberton School main dashboard');
});

test('check return string of getLatestNotification', () => {
    const notice = getLatestNotification();
    expect(notice).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
})