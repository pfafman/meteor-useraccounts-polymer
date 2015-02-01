Package.describe({
    summary: "Accounts Templates for Polymer",
    version: "0.2.1",
    name: "pfafman:user-accounts-polymer",
    git: "https://github.com/pfafman/meteor-useraccounts-polymer.git",
});

Package.on_use(function(api, where) {
    api.versionsFrom("METEOR@1.0");

    api.use([
        "less",
        "templating",
    ], "client");

    api.use([
        //"useraccounts:core",
        "useraccounts:core"
    ], ["client", "server"]);

    api.imply([
        //"useraccounts:core@1.4.1",
        "useraccounts:core@1.6.1"
    ], ["client", "server"]);

    api.add_files([
        "lib/error.html",
        "lib/error.js",
        "lib/form.html",
        "lib/form.js",
        "lib/input.html",
        "lib/input.js",
        "lib/navButton.html",
        "lib/navButton.js",
        "lib/oauth.html",
        "lib/oauth.js",
        "lib/pwdForm.html",
        "lib/pwdForm.js",
        "lib/pwdFormBtn.html",
        "lib/pwdFormBtn.js",
        "lib/pwdLink.html",
        "lib/pwdLink.js",
        "lib/result.html",
        "lib/result.js",
        "lib/sep.html",
        "lib/sep.js",
        "lib/signinLink.html",
        "lib/signinLink.js",
        "lib/signupLink.html",
        "lib/signupLink.js",
        "lib/social.html",
        "lib/social.js",
        "lib/termsLink.html",
        "lib/termsLink.js",
        "lib/title.html",
        "lib/title.js",
        "lib/fullPageForm.html",
        "lib/fullPageForm.js",
        "lib/unstyled.css"
    ], ["client"]);
});

Package.on_test(function(api) {
    api.use([
        "pfafman:user-accounts-polymer",
        //"user-accounts:core",
    ]);

    api.use([
        "accounts-password",
        "tinytest",
        "test-helpers"
    ], ["client", "server"]);

    api.add_files([
        "tests/tests.js"
    ], ["client", "server"]);
});
