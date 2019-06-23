# Welcome to your Remote Client Extension!

Hi!
We developed a <code>Generic</code> yet <code>Simple</code> extension for End-users in any website to help solving their issues. You may consider it as a Generic Support Extension.

# Usage
Create the following endpoints in your server:

<code>/client-support/screenshot</code>
An endpoint to which a user will send a 64-base PNG screenshot.

<code>/client-support/fps</code>
An endpoint to which a user will send an array representing last 15 seconds of his FPS.
The FPS is measured once in 30 seconds.

<code>/client-support/message</code>
An endpoint to which a user will send a message.

# Notes
- The extension send the data to the url of the website.
e.g. https://www.foo-bar.com - the extension will send a screenshot to <code>https://www.foo-bar.com/client-support/screenshot</code>
