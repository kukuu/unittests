module("Loyalty Hub::cookie storage");

test("interface contract tests", function() {
    expect(2);
    equals(typeof _jss.cookie, 'object', 'object _jss exists');
    equals(typeof _jss.cookie.setItem, 'function', 'function setItem exists');
    
});

test('setItem return values', function() {
    expect(2);
    equals(_jss.cookie.setItem('optin', 1), 'optin', 'setItem returns (string) key');
    equals(_jss.cookie.setItem('optout', 0), 'optout', 'setItem returns (string) key');
});

